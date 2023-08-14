import { Module } from '@nestjs/common';
import { IonController } from './ion.controller';
import { IonService } from './ion.service';

@Module({
    controllers: [IonController],
    providers: [IonService],
})
export class IonModule {}
