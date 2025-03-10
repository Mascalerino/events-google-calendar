import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  eventTitles: string[] = [''];
  calendarId: string = '';
  eventDate: string = '';
  startTime: string = ''; // Inicializado como cadena vacía
  formSubmitted: boolean = false;

  // Función para agregar un nuevo campo de título
  addTitle() {
    this.eventTitles.push('');
  }

  // Función para eliminar un campo de título
  removeTitle(index: number) {
    if (this.eventTitles.length > 1) {
      this.eventTitles.splice(index, 1);
    }
  }

  // Función para limpiar todos los campos
  resetForm() {
    this.eventTitles = [''];
    this.calendarId = '';
    this.eventDate = '';
    this.startTime = ''; // Reiniciar a cadena vacía
    this.formSubmitted = false; // Reiniciar la bandera de envío
  }

  // Función para validar el formato de hora
  validateTime(value: string) {
    if (this.isValidTime(value)) {
      this.startTime = value;
    }
  }

  // Función para verificar si el formato de hora es válido (HH:mm)
  isValidTime(value: string): boolean {
    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/; // Expresión regular para HH:mm
    const match = value.match(timePattern);
    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      return hours >= 0 && hours <= 24 && minutes >= 0 && minutes < 60;
    }
    return false;
  }

  // Función para crear el evento (simulada en la consola)
  createEvent() {
    this.formSubmitted = true;

    // Validar si todos los campos son completos
    if (
      this.calendarId &&
      this.eventDate &&
      this.isValidTime(this.startTime) &&
      this.eventTitles.every((title) => title)
    ) {
      console.log('Evento creado:', {
        calendarId: this.calendarId,
        eventDate: this.eventDate,
        startTime: this.startTime,
        eventTitles: this.eventTitles,
      });
    } else {
      console.log('Por favor, completa todos los campos correctamente');
    }
  }
}
