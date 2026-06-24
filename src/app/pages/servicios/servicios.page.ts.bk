import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonSearchbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonButton,
    IonSearchbar
  ]
})
export class ServiciosPage {
  servicios = [
    {
      nombre: 'Corte de cabello',
      categoria: 'Peluquería',
      precio: '$20.000'
    },
    {
      nombre: 'Corte y peinado',
      categoria: 'Peluquería',
      precio: '$35.000'
    },
    {
      nombre: 'Baño completo',
      categoria: 'Mascotas',
      precio: '$30.000'
    },
    {
      nombre: 'Baño y corte',
      categoria: 'Mascotas',
      precio: '$45.000'
    }
  ];
}
