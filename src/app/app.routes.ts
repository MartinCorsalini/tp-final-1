import { Routes } from '@angular/router';
import { OlvidasteContraseniaComponent } from './component/LOGIN/olvidaste-contrasenia/olvidaste-contrasenia.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FaqComponent } from './component/Inicio/faq/faq.component';
import { AltaBajaPageComponent } from './pages/alta-baja-page/alta-baja-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { PerfilTrabajadorComponent } from './component/perfil/perfil-trabajador/perfil-trabajador.component';
import { PerfilPropioComponent } from './component/perfil/perfil-propio/perfil-propio.component';
import { ModificarPerfilComponent } from './component/perfil/modificar-perfil/modificar-perfil.component';
import { NotificacionesPageComponent } from './pages/notificaciones-page/notificaciones-page.component';
import { authGuard } from './guard/auth.guard';



export const appRoutes: Routes = [

    {
      path: 'login',
      component: LoginPageComponent,
      canActivate: [() => authGuard(false)] // Solo permite acceso si NO está logueado. y me lleva a home
    },
    {
      path: 'olvidaste-contrasenia',
      component: OlvidasteContraseniaComponent
    },
    {
      path: 'home/:id',
      component: InicioPageComponent,
      canActivate : [() => authGuard(true)] // Solo permite acceso si está logueado
    },
    {
      path: 'preguntas-frecuentes',
      component: FaqComponent
    },
    {
      path: 'perfil-trabajador/:id',
      component: PerfilTrabajadorComponent
    },
    {
      path: 'perfil-propio/:id',
      component: PerfilPropioComponent,
      canActivate : [authGuard] //SI ESTOY LOGEADO
    },
    {
      path: 'modificar/:id',
       component: ModificarPerfilComponent
    },
    { path: 'notificaciones', 
      component: NotificacionesPageComponent
    },
    {
      path: '**',
      redirectTo:'home'
    }
];
