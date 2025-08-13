import { Component, inject, OnInit } from '@angular/core';
import { FuelServices } from '../../services/fuel-services';

@Component({
  selector: 'app-billing',
  imports: [],
  templateUrl: './billing.html',
  styleUrl: './billing.css'
})
export class Billing implements OnInit{


      fuelServices = inject(FuelServices);


      ngOnInit(): void {
          
        this.displayBilling();

      }

 bill: any = {};
      
responseD: any [] = [];

    
      displayBilling(){

        debugger;
            this.fuelServices.getBilling(this.bill).subscribe({

              next:(response:any)=>{

                this.responseD = response.bills;
                console.log(response)
                
               
              },
 
              error: (error)=>{

                alert(error.error);
              }
            })


       
      }
}
