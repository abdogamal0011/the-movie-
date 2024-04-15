import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SliderComponent } from './slider/slider.component';
import { TrandingComponent } from './tranding/tranding.component';
import { DetalisPeopleComponent } from './detalis-people/detalis-people.component';
import { ImagesComponent } from './images/images.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ,HomeComponent ,ImagesComponent, DetalisPeopleComponent, LoginComponent , TrandingComponent, RegisterComponent ,SliderComponent,  NavbarComponent , AddproductComponent    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abdogamal';
}
