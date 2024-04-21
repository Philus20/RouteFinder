import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoutesService } from '../Services/routes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
paths:any[]=[]
  constructor(public activeModal:NgbActiveModal, private rout:RoutesService){

  }

  ngOnInit(){
console.log(99)

    this.rout.shareResults$.subscribe({
      next:(x)=>{
        console.log(12)
        this.paths = x
        console.log(x)
      }
    })
  }
  }

