import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { ImplentationComponent } from './implentation/implentation.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
// {path:'',component:HomeComponent},
  {path:'docs',component:DocumentationComponent},
  {path:'implement',component:ImplentationComponent},
  {path:'how',component:HowItWorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
