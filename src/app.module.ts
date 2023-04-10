import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';



@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '3835',
      database: 'nestjs_crud',
      entities: [User],
      synchronize: true,
      autoLoadEntities:true,
    }),
    AuthModule,
    ProfileModule,],
  providers:[AppService]
 
})
export class AppModule {

}
