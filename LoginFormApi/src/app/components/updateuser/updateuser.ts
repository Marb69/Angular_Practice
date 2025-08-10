import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-updateuser',
  imports: [ReactiveFormsModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css'
})
export class Updateuser {

  
  http = inject(HttpClient);


  ngOnInit(): void {
      
    this.allUser();

  }



  dataUser: any [] = [];

  

  allUser(){


     this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe({

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
     
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getUserById?id=" + id).subscribe({

      
      next:(res:any)=>{

 

        this.formUpdate.patchValue({

          fullname: res.fullName,
          email: res.emailId,
          password: res.password,
          mobileno: res.mobileNo
        }
           
          
        );
      }
    })

  }

   createdate = new Date();
 
  updateUser(){

const idus = this.iduser;

    let updatedUser: any = {

      emailId: this.formUpdate.value.email,
      password: this.formUpdate.value.password,
      fullName: this.formUpdate.value.fullname,
      mobileNo: this.formUpdate.value.mobileno,
      createdDate: this.createdate
    }
    debugger;
 this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + idus,updatedUser).subscribe({

      next:()=>{

     
        alert( "succesfully updated");
         this.allUser();
      },

      error:(error)=>{

     
        alert('Mao ning error po. ' +  error.error);
      }

    })


  }

}
