import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar-private',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent implements OnInit {
  ngOnInit(): void  //Verfica el token, si estoy logueado o no
  {
    if(localStorage.getItem('token'))
    {//Se fija si tengo un token en el localStorage
      //this.textButton= 'LogOut'
      this.auth.logIn() //Me logeo. Coloca el "estoyLogeado" del service en true
      //this.route.navigateByUrl('home'); // al logearme me lleva a esta pagina
    }
  }

  logoUrl: string = 'assets/images/logo.jpeg';

  isProfileOpen = false;
  route = inject(Router)

  //constructor(private router: Router) {} //! CREO QUE ESTO LO TENEMOS QUE BORRAR, CHECKEAR

  openDropdown() {
    this.isProfileOpen = true;
  }

  closeDropdown() {
    this.isProfileOpen = false;
  }

  /*
  logout() {
    console.log('Cerrar sesión');
    this.closeDropdown();
    this.route.navigate(['/login']);
  }
*/

  irADetalles(id:string)
  {
    this.route.navigate([`detalles/${id}`]);
  }



  ///-------------------- RUTAS PROTEGIDAS -----------------------
  //-------CHEKEAR ------ probando...

  auth = inject(AuthService);
  //textButton : string = 'Login'

  onLogout()
  {
     this.auth.LogOut();// Coloca el "estoyLogeado" del service en false
     this.route.navigateByUrl('login');
     localStorage.clear()

  }

//-------BORRADOR ------ video chaldu
/*
  textButton : string = 'Login'

  onLoginLogout2()
  {
      if(this.textButton == 'Login')
      {// LOGUEARME
        this.textButton = 'LogOut';
        this.auth.logIn() //Me logeo. Coloca el "estoyLogeado" del service en true
        this.route.navigateByUrl('home'); // al logearme me lleva a esta pagina
      }else
      {
        this.auth.LogOut();
        this.textButton = 'Login'
        this.route.navigateByUrl('login');
        localStorage.clear()
      }
  }
*/

}

