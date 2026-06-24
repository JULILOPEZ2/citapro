import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
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

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonIcon
  ]
})
export class AgendarCitaPage implements OnInit {
  servicioSeleccionado: any = null;

  cliente = '';
  telefono = '';
  fecha = '';
  hora = '';
  observaciones = '';

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {
    addIcons({
      arrowBackOutline,
      cutOutline,
      pawOutline,
      sparklesOutline,
      handLeftOutline
    });
  }

  ngOnInit() {
    const servicio = localStorage.getItem('servicioSeleccionado');

    if (servicio) {
      this.servicioSeleccionado = JSON.parse(servicio);
    }
  }

  confirmarCita() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.servicioSeleccionado) {
      this.errorMessage = 'Debes seleccionar un servicio.';
      return;
    }

    if (!this.cliente || !this.telefono || !this.fecha || !this.hora) {
      this.errorMessage = 'Completa todos los campos obligatorios.';
      return;
    }

    const nuevaCita = {
      cliente: this.cliente,
      telefono: this.telefono,
      servicio: this.servicioSeleccionado.nombre,
      precio: this.servicioSeleccionado.precio,
      duracion: this.servicioSeleccionado.duracion,
      fecha: this.fecha,
      hora: this.hora,
      observaciones: this.observaciones
    };

    const citasGuardadas = localStorage.getItem('citas');
    const citas = citasGuardadas ? JSON.parse(citasGuardadas) : [];

    citas.push(nuevaCita);

    localStorage.setItem('citas', JSON.stringify(citas));

    this.successMessage = 'Cita agendada correctamente.';

    setTimeout(() => {
      this.router.navigateByUrl('/menu');
    }, 1200);
  }
}
