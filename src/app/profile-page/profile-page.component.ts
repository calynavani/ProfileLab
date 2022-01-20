import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [UserService]
})
export class ProfilePageComponent implements OnInit {

  currentUser: any;
 
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    if(this.userService.User){
      this.currentUser = this.userService.getUser();
    }
    else{
      this.currentUser={fName: "Calyn", contactInfo:"CalynGreene@gmail.com", bio: "I like monkeys", imageURL: "monkey.jpg"};
    }
     
  }

}
