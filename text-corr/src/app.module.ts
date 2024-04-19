import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { LoginModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
