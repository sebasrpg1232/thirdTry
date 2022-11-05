import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { iDriver } from '../data/iDriver'

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private https: HttpClient) { }
  public GetDriver(): Observable<iDriver []> { 
    return this.https.get<iDriver []>('https://localhost:7136/api/Drivers').pipe(
      tap(data =>
      console.log('All: ' + JSON.stringify(data)))
    );;
  }
}
