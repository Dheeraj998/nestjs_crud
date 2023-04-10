import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authServive: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  // async login(@Body() loginDto:any){
  //  return this.authServive.valiateUser(loginDto);
  // }

  //  when we use use passport we can do it like this without authService
  async login(@Request() req: any) {
    return this.authServive.login(req.user);
  }
}
