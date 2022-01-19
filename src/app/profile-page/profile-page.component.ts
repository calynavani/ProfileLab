import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
 profileService1: ProfileServiceService = new ProfileServiceService;
  profile: Profile = ProfileServiceService.getUserProfile();
 
  
 

  constructor(public profileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

}
