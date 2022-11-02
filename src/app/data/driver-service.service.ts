import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iDriver } from '../data/iDriver'

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private https: HttpClient) { }
  GetDriver(): Promise<any> { 
    return this.https.get<any>('https://localhost:7136/api/Drivers')
    .toPromise();
  }
}
