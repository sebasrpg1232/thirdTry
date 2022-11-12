import { Injectable } from '@angular/core';
import { iDriver } from './iDriver';

@Injectable({
  providedIn: 'root'
})
export class MoveDataService {
private driver:iDriver = {
  driverName: '',
    driverId: 0,
    driverDirection: '',
    driverNumber: 0,
    driverEmail: '',
    driverPassword: ''
};

addDriver(driver: iDriver){
this.driver = driver;
}

getDriver(): iDriver{
  return this.driver;
}
  constructor() { }
}
