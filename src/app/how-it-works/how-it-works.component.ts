import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {

  constructor(private router:Router){

  }

  goToHow(){
    this.router.navigate(['/how'])
      }
      goToDocs(){
        console.log('dk')
        this.router.navigate(['/docs'])
      }
      goToImplement(){
    this.router.navigate(['/implement'])
      }
  }


