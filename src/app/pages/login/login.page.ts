import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  calendarOutline,
  mailOutline,
  lockClosedOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class LoginPage {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {
    addIcons({
      calendarOutline,
      mailOutline,
      lockClosedOutline
    });
  }

  login() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Debes ingresar correo y contraseña.';
      return;
    }

    if (!this.email.includes('@')) {
      this.errorMessage = 'Ingresa un correo válido.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener mínimo 6 caracteres.';
      return;
    }

    localStorage.setItem('usuario', JSON.stringify({
      email: this.email,
      nombre: 'Administrador CitaPro'
    }));

    this.router.navigateByUrl('/menu');
  }
}
