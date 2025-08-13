import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuelServices {
   
  http = inject(HttpClient);


  getBilling(data:any){

      return this.http.post("https://davaodelnorte.ph/AppData/fuelapi/api/Billing/InitData",data);
  }


  addBilling(dataBill: any){

     return this.http.post("https://davaodelnorte.ph/AppData/fuelapi/api/Billing/save",dataBill);
  }

   UpdateBilling(dataBill: any){

    this.http.post("https://davaodelnorte.ph/AppData/fuelapi/api/Billing/update",dataBill);
  }
}
