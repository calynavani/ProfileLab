import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridExampleComponent } from './grid-example/grid-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    EditProfilePageComponent,
    GridExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



