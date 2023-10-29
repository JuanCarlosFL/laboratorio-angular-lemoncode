import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './components/public/public-header/public-header.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AboutComponent } from './components/public/about/about.component';
import { PublicMenuComponent } from './components/public/public-menu/public-menu.component';
import { PrivateHeaderComponent } from './components/private/private-header/private-header.component';
import { PrivateMenuComponent } from './components/private/private-menu/private-menu.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { GalleryComponent } from './components/private/gallery/gallery.component';
import { MatMenuModule, MatButtonModule } from '@angular/material'; 
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    PublicMenuComponent,
    PrivateHeaderComponent,
    PrivateMenuComponent,
    DashboardComponent,
    GalleryComponent
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
