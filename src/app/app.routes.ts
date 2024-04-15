import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetalisproductComponent } from './detalisproduct/detalisproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SliderComponent } from './slider/slider.component';
import { TrandingComponent } from './tranding/tranding.component';
import { DetalisPeopleComponent } from './detalis-people/detalis-people.component';
import { ImagesComponent } from './images/images.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'AddProduct', component: AddproductComponent, title: 'Products' },
  { path: 'Detalisproduct/:id', component: DetalisproductComponent, title: 'Detalisproduct' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'register', component: RegisterComponent, title: 'register' },
  { path: 'slider', component: SliderComponent, title: 'register' },
  { path: 'tranding', component: TrandingComponent, title: 'tranding' },
  { path: 'detalisPeple/:id', component: DetalisPeopleComponent, title: 'detalisPeple' },
  { path: 'Images/:id', component: ImagesComponent, title: 'Images' },


];
