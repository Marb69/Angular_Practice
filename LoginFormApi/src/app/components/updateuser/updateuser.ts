import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Master } from '../../services/master';


@Component({
  selector: 'app-updateuser',
  imports: [ReactiveFormsModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css'
})
export class Updateuser {

  
  http = inject(HttpClient);
 masterService = inject(Master);

  ngOnInit(): void {
      
    this.allUser();

  }



  dataUser: any [] = [];

  

  allUser(){


    this.masterService.getAllUser().subscribe({

      next:(data: any) =>{

         this.dataUser = data;
      }
     })
  }


  formUpdate: FormGroup = new FormGroup({

       fullname: new FormControl(''),
       email: new FormControl(''),
       password: new FormControl(''),
      mobileno: new FormControl('')
  })

  iduser!: number;

  
  edit(id: number){


    debugger;
    this.iduser = id;
     
  this.masterService.getUser(id).subscribe({

      
      next:(res:any)=>{

 

        this.formUpdate.patchValue({

          fullname: res.fullName,
          email: res.emailId,
          password: res.password,
          mobileno: res.mobileNo
        }
           
          
        );
      },
      error:(error)=>{

        alert("error " + error.error);
      }
    })

  }

   createdate = new Date();
 
  updateUser(){



    let updatedUser: any = {

      emailId: this.formUpdate.value.email,
      password: this.formUpdate.value.password,
      fullName: this.formUpdate.value.fullname,
      mobileNo: this.formUpdate.value.mobileno,
      createdDate: this.createdate,
      projectName: ''
    }
    debugger;
 this.masterService.update(this.iduser,updatedUser).subscribe({


      next:()=>{

     
        alert( "succesfully updated");
         this.allUser();
      },

      error:(error)=>{

     
        alert('Mao ning error po. ' +  error.error);
      }

    })

    console.log(this.iduser);

  }

}
