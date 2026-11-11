import { Component, OnInit } from '@angular/core';
import { Paperelle } from '../../../shared/models/paperelle';
import { PaperelleService } from '../../../services/paperelle.service';
import {sample_paperelle} from '../../../../data';
import { RouterLink } from '@angular/router'; 
@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  paperelle:Paperelle[]= [];

  constructor(private paperelleService: PaperelleService) {

    this.paperelle= paperelleService.getAll();

   }

  ngOnInit(): void {

  }
}
