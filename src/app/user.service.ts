
import {User} from './User';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class UserService {
 User:any;
   
 constructor() {
   console.log(this.User);
  //this.User = {fName:"Calyn Greene", contactInfo:"CalynGreene@gmail.com", bio:"I like monkeys", imageURL:"../../assets/images/monkey.jpg"};
  
 }
  getUser():User{

    return this.User;
  }

  setUser(name:string, contactInfo:string, bio:string): void{
    this.User.fName = name;
    this.User.contactInfo = contactInfo;
    this.User.bio = bio;
    //this.User.imageURL = imageURL;
    console.log(this.User);
    
  }
}