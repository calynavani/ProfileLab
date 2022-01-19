
import {Profile} from './profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProfileServiceService {
  static getUserProfile(): Profile {
    throw new Error('Method not implemented.');
  }
  userProfile:Profile = new Profile("Calyn", "CalnGreene@gmail.com", "I like cheese");

 constructor() {}
  getUserProfile():Profile{

    return this.userProfile;
  }

  setUserProfile(name:string, contactInfo:string, bio:string): void{
     this.userProfile.name = name;
     this.userProfile.contactInfo = contactInfo;
     this.userProfile.bio = bio;


  }
}
