import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IonModule } from './ion/ion.module';
import { BasicAuthModule } from './basic_auth/auth.module';

@Module({
  imports: [IonModule, BasicAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
