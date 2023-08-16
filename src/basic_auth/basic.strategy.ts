import { ConfigService } from '@nestjs/config';
import { BasicStrategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Basic認証
@Injectable()
export class BasicAuthStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  validate(username: string, password: string): boolean {
    const basicAuthUser = this.configService.get<string>('BASIC_AUTH_USER');
    const basicAuthPass = this.configService.get<string>('BASIC_AUTH_PASSWORD');

    if (username === basicAuthUser && password === basicAuthPass) return true;
    else throw new UnauthorizedException();
  }
}
