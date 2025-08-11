import { Component, effect, inject } from '@angular/core';
import { Cardpokemon } from '../cardpokemon/cardpokemon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [Cardpokemon,ReactiveFormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {


  http = inject(HttpClient);

  pokemonData: FormGroup = new FormGroup({

    name: new FormControl('')
  });


  data: any = {

    name: '',
    game_index: '',
    height: '',
    url: '', 
    weight: '',
    sprites: {

      front_default: ''
    }
  }


  

  search(){

     console.log(this.data.front_default);
    debugger;
     const formValue = this.pokemonData.value;
    this.http.get("https://pokeapi.co/api/v2/pokemon/"+ formValue.name).subscribe({

      next: (res)=>{

        alert("Ok")
         this.data = res;
      },

      error: (error)=> {
        

        alert("error" + error.error);


      }

    })
  }
  


    
}
