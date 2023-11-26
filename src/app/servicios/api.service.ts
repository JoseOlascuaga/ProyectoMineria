import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000/'; // URL API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const data = { email, password };

    return this.http.post(url, data);
  }

  // Puedes agregar más métodos para otras operaciones con la API
}
