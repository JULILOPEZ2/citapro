import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.page').then((m) => m.MenuPage),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios.page').then(
        (m) => m.ServiciosPage
      ),
  },
  {
    path: 'agendar-cita',
    loadComponent: () =>
      import('./pages/agendar-cita/agendar-cita.page').then(
        (m) => m.AgendarCitaPage
      ),
  },
];
