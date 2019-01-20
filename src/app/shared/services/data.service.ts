import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http: HttpClient) { 
      this.getData().subscribe(data => {
          console.log(data)
      });
  }

  getData(): Observable<any> {
      return this.http.get('../../../assets/data/data.json')
  }

  // getData(){
  //   return this.http.get('./assets/data/about.json')
  //     map((res: Response) => res.json());
  // }

}