import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
