import { BasicStrategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Basic認証
@Injectable()
export class BasicAuthStrategy extends PassportStrategy(BasicStrategy) {
    constructor() {
      super();
    }
  
    validate(username: string, password: string): boolean {
      if (username === 'admin' && password === 'develop') return true;
      else throw new UnauthorizedException();
    }
  }
