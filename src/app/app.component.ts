import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValoremonService } from '../app/valoremon.service'
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'valoremon';
  
  constructor(private valoremonservice: ValoremonService, private router: Router) { }

  ngOnInit(): void {


  }


  enviar(name: string, type: string, HP: string, Attack: string, Defense: string, SpceialAttack: string, SpecialDefense: string, Speed: string, Abilities: string
  ) {
    const stats = {
      'type': type,
      'Abilities': Abilities,
      'Hp': HP,
      'Attack': Attack,
      'Defense': Defense,
      'SpecialAttack': SpceialAttack,
      'SpecialDefense': SpecialDefense,
      'Speed': Speed
    }

    this.valoremonservice.getTier(stats)
      .subscribe(res => {

        if (res != null) {
          var result = res.toString();
          var resultSPlit = result.split("'");

          console.log(resultSPlit[1]);

          var finalResult = resultSPlit[1];
          M.toast({html:" Tu Pokémon pertenece al tier : " + finalResult });
        }
      })


  }

}
