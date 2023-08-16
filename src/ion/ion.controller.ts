import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { IonService } from './ion.service';
import { BasicAuthGuard } from 'src/basic_auth/basic-auth.guard';

@Controller('ion')
@UseGuards(BasicAuthGuard)
export class IonController {
  constructor(private readonly ionService: IonService) {}

  @Get('create-did')
  async createDID(): Promise<{}> {
    return this.ionService.createDID();
  }

  @Get('resolve-did/:did')
  async resolveDID(@Param('did') did: string): Promise<any> {
    return this.ionService.resolveDID(did);
  }
}
