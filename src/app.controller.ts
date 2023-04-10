import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";

@Controller()
export class AppController{
constructor(private readonly appService:AppService){


}
// @Get()
gethello():string{
    
 return this.appService.getHello();
}

// @Post()
store(@Req() req:Request){
return req.body;
}

// @Get(":id")
getUserById(@Param() params:{userId:Number}){
   return params;
}
// @Delete(':id')
deleteUser(@Param() userId:Number){

}
// @Patch(':id')
updateUser(@Param() userId:number,@Req() req:Request){

    console.log(req.body);
    console.log(userId);
    
    const body=req.body
    let resp:any={
      ...  body,
userId

    
    }
    return ({userId,...body});
}

}