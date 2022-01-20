import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css'],
  providers: [UserService]
})
export class EditProfilePageComponent implements OnInit {
  userToEdit: any;
  avatars: string[]=["dino.jpg", "emodog.gif", "eyes.png", "frog.jpg", "girldog.jpg", "monkey.jpg", "nerdog.webp", "wolf.png"];
  
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    if(this.userService.User)
    {
      this.userToEdit = this.userService.User;
    }
    else{
      this.userToEdit = {fName: "Calyn", contactInfo:"CalynGreene@gmail.com", bio: "I like monkeys", imageURL: "monkey.jpg"};
    }
    
   
  }


  UpdateUser():void{
    let name:string =(<HTMLInputElement>document.getElementById("Name")).value;
    let contactInfo:string =(<HTMLInputElement>document.getElementById("ContactInfo")).value;
    let bio:string = (<HTMLInputElement>document.getElementById("Bio")).value;
    //let options: number = document.getElementsByName("Avatar").length;
    let options = (<HTMLCollection>document.getElementsByClassName("imageSelection"));
    console.log(options);
    let selectedImage: string ="";
   
    for (let i = 0; i <= options.length; i++) {
      let input = <HTMLInputElement>options[i];
      if(input.checked){
        
        selectedImage = input.value;
      }
    }
    //let imageId: string = "Avatar" + i;
    //if ((<HTMLInputElement>document.getElementById(imageId)).checked) {
      // let selectedOption = (<HTMLInputElement>document.getElementById(imageId)).value;
      // console.log(selectedOption);
     // }
   // }
  

    let u: User = {fName:name, contactInfo:contactInfo ,bio: bio, imageURL: selectedImage}
    this.userService.User = u;
    console.log(this.userService.User);

  }
  //updateProfile(formInput:NgForm):void{

  //}

}
