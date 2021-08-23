import { UserModule } from '@/modules/user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthService, JwtStrategy, AuthResolver],
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'password super secret',
    }),
  ],
})
export class AuthModule {}
