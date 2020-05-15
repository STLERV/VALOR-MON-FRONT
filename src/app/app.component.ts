import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValoremonService } from '../app/valoremon.service'
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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


 enviar( ){}
  




 name: string, type: string, HP: string, Attack: string, Defense: string, SpceialAttack: string, SpecialDefense: string, Speed: string, Abilities: string


}
