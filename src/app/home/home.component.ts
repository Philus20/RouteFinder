import { Component } from '@angular/core';
import { RoutesService } from '../Services/routes.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  source:string=''
  destination:string=''
  temp:string[]=[]
  paths:any[]=[]
  d:number=1;
  time:number=0
  distance:number=0
  showTable:boolean=false
  constructor(private rout:RoutesService, private router:Router, private modal:NgbModal){

    
  }
index:number =0

path:string=''
  proceed(){
      this.paths=[]
      this.temp = []
      //this.showTable=false
      
    this.rout.getData(this.source,this.destination).subscribe({
      next:(res:any)=>{
       // this.path='f'
        console.log(res)
        this.temp=res
        //this.paths=[]
        for(this.index; this.index<=this.temp.length-1; this.index++){
         
          if(this.index==this.temp.length-1){
            //t
            
            this.d = parseFloat(this.temp[this.index])
            this.d = (this.d*1000)/1.5
            this.distance=Math.round(parseFloat(this.temp[this.index]) * 1000) / 1000;
            this.time = this.d/60
            this.time = Math.round(this.time)
            //this.paths.push(`${this.time} minutes`)
            //this.rout.shareResults.next(this.paths)
            
            break
          }
          else if(this.index == this.temp.length-2){
            this.paths.push(this.temp[this.index])
          }
          else{ this.paths.push(this.temp[this.index]+"  >>  ")}
             
              // this.source=''
              // this.destination=''
              // this.temp=[]

        }
        
        this.index=0
        this.path = ''
        for(this.index; this.index<=this.temp.length-2; this.index++){

          this.path = this.path + this.paths[this.index]
        }
        console.log(this.path)
        this.showTable=true
      this.index=0
      //  this.modal.open(ResultsComponent)
        
      },
      error:(e)=>{
        console.log("erro")
      }
    })

  }

  goToDocs(){
    console.log('dk')
    this.router.navigate(['/docs'])
  }
  goToImplement(){
this.router.navigate(['/implement'])
  }
  goToHow(){
    this.router.navigate(['/how'])
      }
}
