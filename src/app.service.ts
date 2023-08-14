import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIssuerEntraVerifiedId(): string {
    return 'issuer-entra-verified-id';
  }
}
