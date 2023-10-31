import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './components/layout/public-header/public-header.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AboutComponent } from './components/public/about/about.component';
import { PrivateHeaderComponent } from './components/layout/private-header/private-header.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { GalleryComponent } from './components/private/gallery/gallery.component';
import { MatMenuModule, MatButtonModule } from '@angular/material'; 
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CrudComponent } from './components/private/crud/crud.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { RotateDirective } from './directives/rotate.directive'; 



@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    PrivateHeaderComponent,
    DashboardComponent,
    GalleryComponent,
    FooterComponent,
    CrudComponent,
    ProfileComponent,
    RotateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
