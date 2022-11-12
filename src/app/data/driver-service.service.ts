import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { iDriver } from '../data/iDriver'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {
baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllDrivers(): Observable<iDriver[]>{
   return this.http.get<iDriver[]>(this.baseApiUrl + 'api/drivers')
  }

  postDriver(addDriverRequest: iDriver): Observable<iDriver>{
    return this.http.post<iDriver>(this.baseApiUrl + 'api/drivers', addDriverRequest);
  }
}
