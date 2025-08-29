import { Module } from '@nestjs/common';
import { ClerkStrategy } from './clerk.strategy';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config';
import { ClerkClientProvider } from 'src/providers/clerk-client.providers';
import { UsersModule } from 'src/modules/v1/users/users.module';

@Module({
  imports: [PassportModule, ConfigModule, UsersModule],
  providers: [ClerkStrategy, ClerkClientProvider],
  exports: [PassportModule],
})
export class AuthModule {}
