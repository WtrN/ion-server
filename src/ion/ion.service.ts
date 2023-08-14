import { Injectable } from '@nestjs/common';
import {
  DID,
  generateKeyPair,
  resolve,
  anchor,
} from '@decentralized-identity/ion-tools';

import { writeFile } from 'fs/promises';

@Injectable()
export class IonService {
  async createDID(): Promise<{}> {
    const keyPair = await generateKeyPair();
    console.log(JSON.stringify(keyPair, null, 2));
    const did = new DID({
      content: {
        publicKeys: [
          {
            id: 'key-1',
            type: 'EcdsaSecp256k1VerificationKey2019',
            publicKeyJwk: keyPair.publicJwk,
            purposes: ['authentication'],
          },
        ],
        services: [
          {
            id: 'domain-1',
            type: 'LinkedDomains',
            serviceEndpoint: 'https://foo.example.com',
          },
        ],
      },
    });

    const uri = {
      long: await did.getURI(),
      short: await did.getURI('short'),
    };

    console.log(JSON.stringify(uri, null, 2));

    const response = await this.anchorDID(did);

    return response;
  }

  async anchorDID(did: DID): Promise<any> {
    const request = await did.generateRequest(0);
    const response = await anchor(request);

    // Store the key material and source data of all operations that have been created for the DID
    let ionOps = await did.getAllOperations();
    await writeFile('./ion-did-ops-v1.json', JSON.stringify({ ops: ionOps }));

    return response;
  }

  async resolveDID(did: string): Promise<any> {
    const resolved = await resolve(did);
    console.log(JSON.stringify(resolved, null, 2));
    return resolved;
  }
}
