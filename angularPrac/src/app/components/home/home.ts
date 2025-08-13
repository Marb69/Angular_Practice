import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

   addStudent: FormGroup = new FormGroup({

      name: new FormControl(''),
      age: new FormControl()
  });


  listStudent: any []= [
 
    {
      name:"jhon", age:"19"
    },
    
    {
      name:"jhon", age:"19"
    },
    
    {
      name:"jhon", age:"19"
    },
    
    {
      name:"jhon", age:"19"
    },
    
  ]


  add(){

    const formValue = this.addStudent.value;
    this.listStudent.push(formValue);
      
  }

  delete(index: number){

      
  }
}
