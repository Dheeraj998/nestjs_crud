import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";
import { UpdateUserDto } from "./dto/update-user.dto";
@Controller('user')
export  class UserController{
    
    constructor(private readonly userService:UserService ){

    }
@Get()    
getUsers(){
    return this.userService.getUsers();
} 

// @Post()
// loginUser(@Req() req:Request){
//      return this.userService.createUser(req.body);
// }

@Get(":id")
getUser(@Param('id',ParseIntPipe) userId:number){
return this.userService.getUser(userId)
}

//using body decorator
@Post()
create(@Body() req:UpdateUserDto){
    console.log("contro");
    
  return this.userService.createUser(req)
}

@Patch(':id')
updateUser(@Body() req:UpdateUserDto,@Param('id',ParseIntPipe) userId:number){
   return this.userService.updateUser(req,userId)
}

// @Delete(':id')
// deleteUser(@Param() param:{userId:number}){
//     return this.userService.deleteUser(param)
// }
@Delete(':id')
deleteUser(@Param() userId:number){
    return this.userService.deleteUser(userId)
}

}