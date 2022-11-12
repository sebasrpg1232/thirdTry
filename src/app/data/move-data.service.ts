import { Injectable } from '@angular/core';
import { iDriver } from './iDriver';

@Injectable({
  providedIn: 'root'
})
export class MoveDataService {
private driver:iDriver = {
  driverName: 'carlos',
    driverId: 757878,
    driverDirection: 'ayudaporfa',
    driverNumber: 3224599592,
    driverEmail: 'ysi@perdimicarnet.com',
    driverPassword: '12345543112321'
};

addDriver(driver: iDriver){
this.driver = driver;
}

getDriver(): iDriver{
  return this.driver;
}
  constructor() { }
}
