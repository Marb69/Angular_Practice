import { Component, inject } from '@angular/core';
import { FuelServices } from '../../services/fuel-services';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-billing',
  imports: [ReactiveFormsModule],
  templateUrl: './add-billing.html',
  styleUrl: './add-billing.css'
})
export class AddBilling {


  
   fuelService = inject(FuelServices);



  dateTemp = new Date('2025-08-12T08:59:48.143Z').toISOString()
  
   
   DataForm: FormGroup = new FormGroup({

       billId: new FormControl(''),
       stationId: new FormControl(''),
       billDate: new FormControl(this.dateTemp),
       billNo: new FormControl(''),
       fundSourceId: new FormControl(''),
       userId: new FormControl(''),
       transDT: new FormControl(this.dateTemp),
   });
   addBill(){

   const formValue = this.DataForm.value;
    debugger;
       this.fuelService.addBilling(formValue).subscribe(
        {

          next:()=>{
            alert("Added");
          },

          error: (error)=>{

            alert(error.error);
          }
        }
       )
   }
}
