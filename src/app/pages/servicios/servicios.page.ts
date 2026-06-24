import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonSearchbar,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  cutOutline,
  pawOutline,
  sparklesOutline,
  handLeftOutline
} from 'ionicons/icons';

interface Servicio {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: string;
  duracion: string;
  icono: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonSearchbar,
    IonIcon
  ]
})
export class ServiciosPage {
  textoBusqueda = '';

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Corte de cabello',
      categoria: 'Peluquería',
      descripcion: 'Servicio básico de corte para clientes.',
      precio: '$20.000',
      duracion: '30 min',
      icono: 'cut-outline'
    },
    {
      id: 2,
      nombre: 'Corte y peinado',
      categoria: 'Peluquería',
      descripcion: 'Corte completo con peinado final.',
      precio: '$35.000',
      duracion: '45 min',
      icono: 'sparkles-outline'
    },
    {
      id: 3,
      nombre: 'Baño completo',
      categoria: 'Mascotas',
      descripcion: 'Baño general para mascotas pequeñas o medianas.',
      precio: '$30.000',
      duracion: '40 min',
      icono: 'paw-outline'
    },
    {
      id: 4,
      nombre: 'Baño y corte',
      categoria: 'Mascotas',
      descripcion: 'Servicio completo de baño, corte y cuidado básico.',
      precio: '$45.000',
      duracion: '60 min',
      icono: 'hand-left-outline'
    }
  ];

  serviciosFiltrados: Servicio[] = [...this.servicios];

  constructor(private router: Router) {
    addIcons({
      arrowBackOutline,
      cutOutline,
      pawOutline,
      sparklesOutline,
      handLeftOutline
    });
  }

  filtrarServicios() {
    const texto = this.textoBusqueda.toLowerCase();

    this.serviciosFiltrados = this.servicios.filter(servicio =>
      servicio.nombre.toLowerCase().includes(texto) ||
      servicio.categoria.toLowerCase().includes(texto)
    );
  }

  seleccionarServicio(servicio: Servicio) {
    localStorage.setItem('servicioSeleccionado', JSON.stringify(servicio));
    this.router.navigateByUrl('/agendar-cita');
  }
}
