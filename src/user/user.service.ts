import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>){

}

    getUsers():Promise<User[]>{

        return this.userRepository.find();
    }

    getUser(userId:number){
return this.userRepository.findOne({where :{id:userId}})

    }

    findByEmail(name:string){
        return this.userRepository.findOne({where:{name}});
    }

   async createUser(body:UpdateUserDto){

    console.log(body);
    
         try {
           const user=
           this.userRepository.create({
            name:body.name,
            age:body.age,
            password:body.password
           });
           console.log(user);
           
       await this.userRepository.save(user);

            
            return user;
         } catch (error) {
            
         }
       
    }

    create(body:any){

        return body;
    }
 

//update


    updateUser1(body:UpdateUserDto,userId:number){
   return {body:body,userId};
    }

    updateUser(body:UpdateUserDto,userId:number){
        return this.userRepository.update(userId,body);
    }


//delete

    // deleteUser( param:{userId:number}){
    //     return param;
    // }
    deleteUser( userId:number){
        return this.userRepository.delete(userId);
    }
}
