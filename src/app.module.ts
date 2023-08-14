import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IonModule } from './ion/ion.module';

@Module({
  imports: [IonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
