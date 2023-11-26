import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrl: './prediccion.component.css'
})
export class PrediccionComponent {
  private file: File | null = null;
  results: any;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  predict() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);

      this.http.post('http://127.0.0.1:5000/predecir', formData).subscribe(
        (response) => {
          this.results = response;
        },
        (error) => {
          console.error('Error:', error);
          this.results = { error: 'Ocurrió un error mientras de predecía.' };
        }
      );
    }
  }
}
