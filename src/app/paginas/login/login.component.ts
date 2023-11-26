import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  ngOnInit() {}

  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
   
  ) {}

  async login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://127.0.0.1:5000/login', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/data']);
        } else {
          alert("¡incorrecto!"); 
        }
      },
      async error => {
      alert("Email o contraseña incorrecta")
      }
    );
  }
}
