import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string="";
  password: string="";

  constructor(private personasService: PersonasService, private router: Router) { }

  login() {
    this.personasService.login(this.username, this.password).subscribe(response => {
      // Manejar la respuesta del servidor, como guardar el token de autenticación en el almacenamiento local
      console.log('Respuesta del servidor:', response);
      if (response === 'ok') {
        // Redireccionar al componente AdministradorComponent
        this.router.navigate(['/AdministradorComponent']);
      } else {
        // Mostrar un alert si la respuesta no es "ok"
        alert('Hubo un error en el inicio de sesión');
      }
    }, error => {
      // Manejar cualquier error
      console.error('Error en el inicio de sesión:', error);
    });
  }
}
