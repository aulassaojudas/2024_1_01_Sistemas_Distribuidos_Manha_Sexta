import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { User } from '../user/entity/user.entity';
import { Filiacao } from '../user/entity/filiacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { FiliacaoService } from './service/filiacao.service';
import { FiliacaoController } from './controller/filiacao.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, Filiacao]),
  ],
  controllers: [AppController, UserController, FiliacaoController],
  providers: [AppService, UserService, FiliacaoService],
})
export class UserModule {}