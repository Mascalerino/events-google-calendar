import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  startTimeHour: number = 9;
  startTimeMinute: number = 0;
  eventDuration: number | null = null;
  formSubmitted: boolean = false;
  generatedScript: string = ''; // Variable to hold the generated script

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // Function to track the index and prevent re-rendering of inputs
  trackByIndex(index: number): number {
    return index;
  }

  // Function to add a new title field
  addTitle() {
    this.eventTitles.push('');
  }

  // Function to remove a title field
  removeTitle(index: number) {
    if (this.eventTitles.length > 1) {
      this.eventTitles.splice(index, 1);
    }
  }

  // Function to reset all fields
  resetForm() {
    this.eventTitles = [''];
    this.calendarId = '';
    this.eventDate = '';
    this.startTimeHour = 9;
    this.startTimeMinute = 0;
    this.eventDuration = null;
    this.formSubmitted = false;
    this.generatedScript = ''; // Clear generated script
  }

  // Function to validate the calendar ID (it must not be empty)
  isValidCalendarId(value: string): boolean {
    return value.trim().length > 0;
  }

  // Function to validate the event date (it must not be empty)
  isValidDate(value: string): boolean {
    return value.trim().length > 0;
  }

  // Function to validate time (hour and minute)
  isValidTime(hour: number, minute: number): boolean {
    return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59; // Valid hour and minute
  }

  // Function to generate the event creation script with the provided data
  generateEventScript() {
    this.formSubmitted = true;

    if (
      this.isValidCalendarId(this.calendarId) &&
      this.isValidDate(this.eventDate) &&
      this.isValidTime(this.startTimeHour, this.startTimeMinute) &&
      this.eventDuration !== null &&
      this.eventTitles.every((title) => title)
    ) {
      // Load the script from the external file
      this.loadScript('assets/create-event-script.txt').subscribe((script) => {
        // Replace placeholders in the script
        this.generatedScript = script
          .replace('{{calendarId}}', this.calendarId)
          .replace('{{eventDate}}', this.eventDate)
          .replace('{{startTimeHour}}', String(this.startTimeHour))
          .replace('{{startTimeMinute}}', String(this.startTimeMinute))
          .replace('{{eventTitles}}', JSON.stringify(this.eventTitles))
          .replace('{{durationMinutes}}', String(this.eventDuration));
      });
    } else {
      console.log('Please fill in all fields correctly');
    }
  }

  // Function to load the script file
  loadScript(filePath: string): Observable<string> {
    return this.http.get(filePath, { responseType: 'text' });
  }

  // Function to copy the generated script to the clipboard
  copyToClipboard() {
    const textarea = document.createElement('textarea');
    textarea.value = this.generatedScript;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Script copied to clipboard!');
  }
}
