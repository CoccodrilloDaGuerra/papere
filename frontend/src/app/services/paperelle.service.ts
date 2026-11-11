 import{Injectable} from '@angular/core';
import { sample_paperelle } from '../../data';
import { Paperelle } from '../shared/models/paperelle';

 @Injectable({
    providedIn: 'root'
 })
 export class PaperelleService {
    constructor(){}

    getAll(): Paperelle[]{
       
        return sample_paperelle;
    }
 }