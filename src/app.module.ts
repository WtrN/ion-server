import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IonController } from './ion/ion.controller';

@Module({
  imports: [],
  controllers: [AppController, IonController],
  providers: [AppService],
})
export class AppModule {}
