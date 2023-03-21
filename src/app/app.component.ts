import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Cliente {
  idade: number,
  nome: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  item$?: Observable<Cliente[]>;
  firestore: Firestore = inject(Firestore);
 
  constructor(){
    const itemCollection = collection(this.firestore, 'clientes');
    // this.item$ = collectionData();
  }
  
}
