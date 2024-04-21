import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }

   callBackendAPI(s:string , d:string) {
    
  
    // return this.http.get<any[]>(`⁠http://localhost:8080/get/${s}/${d}`⁠).subscribe(
    //   {
    //     next: response => {
    //       // Handle the response from the backend here
    //       console.log(response);
    //     },
    //     error:error => {
    //       // Handle any errors that occur during the request
    //       console.error(error);
    //     }
    //   }
     
    // );
  }

  getData(s:string,d:string){
    return this.http.get(`http://localhost:8080/get/${s}/${d}`)

  }

   shareResults = new Subject<any>()
   shareResults$ = this.shareResults.asObservable()
  emitResults(){

  }
}
