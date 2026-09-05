import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Operacion {
  texto: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1: number | null = null;
  num2: number | null = null;
  operador: string = '+';
  resultado: number | null = null;
  error: string = '';
  historial: Operacion[] = [];

  operadores = [
    { simbolo: '+', nombre: 'Sumar' },
    { simbolo: '-', nombre: 'Restar' },
    { simbolo: '*', nombre: 'Multiplicar' },
    { simbolo: '/', nombre: 'Dividir' },
    { simbolo: '^', nombre: 'Potencia' }
  ];

  operar(): void {
    this.error = '';

    if (this.num1 === null || this.num2 === null) {
      this.error = 'Ingresa ambos números.';
      this.resultado = null;
      return;
    }

    let valor: number;

    switch (this.operador) {
      case '+':
        valor = this.num1 + this.num2;
        break;
      case '-':
        valor = this.num1 - this.num2;
        break;
      case '*':
        valor = this.num1 * this.num2;
        break;
      case '/':
        if (this.num2 === 0) {
          this.error = 'No se puede dividir entre cero.';
          this.resultado = null;
          return;
        }
        valor = this.num1 / this.num2;
        break;
      case '^':
        valor = Math.pow(this.num1, this.num2);
        break;
      default:
        this.error = 'Operador no válido.';
        this.resultado = null;
        return;
    }

    this.resultado = valor;
    this.historial.unshift({
      texto: `${this.num1} ${this.operador} ${this.num2} = ${valor}`
    });
  }

  limpiarHistorial(): void {
    this.historial = [];
  }
}
