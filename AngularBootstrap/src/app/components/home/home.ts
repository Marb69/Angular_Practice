import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  components: string = " ";
  width: string = " ";
  word: string = " ";
  redColor: string = " ";  
 hide: boolean = true;

  showText(){
 
    this.word = "Alvert";
    this.redColor = "text-danger";
    this.hide = false;
  }

   name!:any;

  changeAlert(){

    alert(this.name);
  }





  firstname!: string;
  middlename!: string;
  lastname!: string;
  gender!: string;
  course!: string;
  fullname!:string;
  courses: string = "N/A";
  genders: string = "N/A";

  submitForm(){

   if(this.firstname==undefined || this.middlename == undefined || this.lastname==undefined){

     alert("Please fill first");
     
   }
   else{

      this.fullname = this.firstname + ' ' + this.middlename + ' ' + this.lastname;
      this.courses = this.course;
      this.genders = this.gender;
   }

  
    

  }
}
