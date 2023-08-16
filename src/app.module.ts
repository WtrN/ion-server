import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IonModule } from './ion/ion.module';
import { BasicAuthModule } from './basic_auth/auth.module';

@Module({
  imports: [
    IonModule,
    BasicAuthModule,
    ConfigModule.forRoot({
      envFilePath: ['config/.env.develop'],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
