import { Component, OnInit, signal } from '@angular/core';
import { Paperelle } from '../../../shared/models/paperelle';
import { PaperelleService } from '../../../services/paperelle.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router'; 



@Component({
  imports: [RouterLink, CurrencyPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home  {

  paperelle:Paperelle[]= [];
preferiti= signal<Set<String>>(new Set());
  constructor(private paperelleService: PaperelleService) {

    this.paperelle= paperelleService.getAll();

   }
isPreferito(id: string){
  return this.preferiti().has(id);
}

togglePreferito(id:String){
  this.preferiti.update(set =>{
    const nuovo= new Set(set);
    nuovo.has(id) ? nuovo.delete(id) : nuovo.add(id);
    return  nuovo;
  });
}
 
}
