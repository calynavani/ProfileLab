import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(formInput:NgForm):void{

  }

}
