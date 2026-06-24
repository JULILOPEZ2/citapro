import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  personOutline,
  calendarOutline,
  cutOutline,
  addCircleOutline,
  timeOutline,
  settingsOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class MenuPage implements OnInit {
  nombreUsuario = 'Usuario';

  totalServicios = 4;
  totalCitas = 0;

  proximaCita = {
    servicio: 'Sin citas programadas',
    fecha: 'Pendiente',
    hora: ''
  };

  constructor(private router: Router) {
    addIcons({
      personOutline,
      calendarOutline,
      cutOutline,
      addCircleOutline,
      timeOutline,
      settingsOutline
    });
  }

  ngOnInit() {
    this.cargarUsuario();
    this.cargarResumen();
  }

  cargarUsuario() {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      this.nombreUsuario = usuario.nombre || usuario.email || 'Usuario';
    }
  }

  cargarResumen() {
    const citasGuardadas = localStorage.getItem('citas');

    if (citasGuardadas) {
      const citas = JSON.parse(citasGuardadas);
      this.totalCitas = citas.length;

      if (citas.length > 0) {
        const ultimaCita = citas[citas.length - 1];

        this.proximaCita = {
          servicio: ultimaCita.servicio,
          fecha: ultimaCita.fecha,
          hora: ultimaCita.hora
        };
      }
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }
}
