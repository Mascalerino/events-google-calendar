import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  eventTitles: string[] = [''];
  calendarId: string = ''; // Este campo no se usará por ahora, ya que no se creará el evento en Google
  eventDate: string = '';
  startTime: string = ''; // Hora de inicio
  eventDuration: number | null = null; // Duración del evento en minutos
  selectedTimezone: string = ''; // Zona horaria seleccionada
  formSubmitted: boolean = false;

  // Lista de zonas horarias para el input select
  timezones: string[] = [];

  ngOnInit() {
    // Cargar las zonas horarias utilizando moment-timezone
    this.timezones = moment.tz.names(); // Devuelve una lista con todas las zonas horarias
    this.selectedTimezone = moment.tz.guess(); // Obtiene la zona horaria local por defecto
  }

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
    this.startTime = '';
    this.eventDuration = null;
    this.selectedTimezone = moment.tz.guess(); // Restablecer zona horaria
    this.formSubmitted = false;
  }

  // Función para validar el formato de la hora (HH:mm)
  isValidTime(value: string): boolean {
    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/; // Expresión regular para HH:mm
    const match = value.match(timePattern);
    return match !== null;
  }

  // Función para validar el ID del calendario
  isValidCalendarId(value: string): boolean {
    return value.trim().length > 0; // Validar que no esté vacío
  }

  // Función para validar la fecha del evento
  isValidDate(value: string): boolean {
    return value.trim().length > 0; // Validar que la fecha no esté vacía
  }

  // Función para validar el formato de la hora
  validateTime(value: string) {
    if (this.isValidTime(value)) {
      this.startTime = value;
    } else {
      console.log('Hora no válida, el formato debe ser HH:mm');
    }
  }

  // Función para la validación general antes de crear el evento (sin lógica del evento por ahora)
  createEvent() {
    this.formSubmitted = true;

    // Validar si todos los campos son completos y correctos
    if (
      this.isValidCalendarId(this.calendarId) && // Validar ID del calendario
      this.isValidDate(this.eventDate) && // Validar fecha del evento
      this.isValidTime(this.startTime) && // Validar hora de inicio
      this.eventDuration !== null && // Validar duración
      this.selectedTimezone &&
      this.eventTitles.every((title) => title) // Validar que todos los títulos estén completos
    ) {
      console.log('Evento creado: ', {
        calendarId: this.calendarId, // Este campo ya no se usará por ahora
        eventDate: this.eventDate,
        startTime: this.startTime,
        eventDuration: this.eventDuration,
        selectedTimezone: this.selectedTimezone,
        eventTitles: this.eventTitles,
      });
      alert('Evento creado con los datos proporcionados!');
    } else {
      console.log('Por favor, completa todos los campos correctamente');
    }
  }
}
