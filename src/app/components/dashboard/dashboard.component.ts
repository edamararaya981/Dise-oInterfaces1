import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string;
  materia: string;
  imagen: string;
  texto: string;
  textEvent: string
  constructor() {
    this.nombre = "DAMIAN";
    this.materia = "";
    this.imagen = "https://media.istockphoto.com/vectors/cool-face-monkey-smoke-cigarette-wear-a-glasses-and-hoodie-jacket-vector-id1193248641?k=20&m=1193248641&s=612x612&w=0&h=_YYCut8RBU7KXcpqWtXWmrhQtqlZ1m-JOIqH6IgBJwQ=";
    this.texto = "hola";
    this.textEvent = "Probando evento binding";
  }
  ngOnInit(): void {
  }
  getMateria(): string {
    return this.materia ="Diseño de interfaces"
  }
  cambiarTexto(): void {
    this.textEvent ="Cambiamos el titulo con event binding"
  }
}
