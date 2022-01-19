import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  //Any component we wish to route, we MUST import
  {path: "profile-page", component: ProfilePageComponent},
  {path: "edit-profile-page", component: EditProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   
  
})
export class AppRoutingModule { }
