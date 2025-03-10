# Google Calendar Event Creation App

This application allows you to create events in a Google Calendar using a custom script. The script can be generated with the provided fields and configuration, which can then be executed in **Google Apps Script** to automatically create events in a specified calendar.

## Installation

To install and run this application locally, follow these steps:

### 1. Clone the repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/Mascalerino/events-google-calendar.git
```

### 2. Install dependencies

Navigate to the project folder and install the required dependencies using npm:

```bash
cd events-google-calendar
npm install
```

### 3. Run the application

Once the dependencies are installed, you can start the application with:

ng serve

The application will be running at http://localhost:4200. Open it in your browser.

## Using the Application

### 1. Fill in the Event Information

On the app’s main page, you’ll see a form with the following fields:
• Calendar ID: The ID of the Google Calendar where you want to create the events.
• Event Date: The date of the event.
• Start Time: The time when the event will begin (in hours and minutes).
• Event Duration: How long the event will last, in minutes.
• Event Title(s): You can enter multiple event titles. Use the + button to add more titles and the - button to remove them.

### 2. Generate the Google Apps Script

After filling in all the necessary fields, click the Generate Event Script button. This will generate a script that you can use to create events in your Google Calendar.

The script will be displayed in a textarea on the screen, and you can copy it to your clipboard using the Copy to Clipboard button.

How to Find Your Google Calendar ID

To use this application, you need the Calendar ID for the calendar where you want to create events. Follow these steps to find it: 1. Open Google Calendar in your browser: https://calendar.google.com. 2. On the left side, under “My calendars”, find the calendar where you want to add events. 3. Hover over the calendar name, click on the three vertical dots (options menu), and select Settings and sharing. 4. Scroll down to the “Integrate calendar” section. 5. Here, you will find the Calendar ID in the format of an email address (e.g., your-calendar-id@group.calendar.google.com).

Copy this Calendar ID and paste it into the Calendar ID field in the application.

## How to Execute the Script in Google Apps Script

After you generate the script, you can run it in Google Apps Script to create the events in your Google Calendar. Follow these steps:

### 1. Create a Google Apps Script Project

1.  Open Google Apps Script: https://script.google.com.
2.  Click on New Project.
3.  Give your project a name (e.g., Google Calendar Event Creator).

### 2. Create a New Script File

1.  In the Google Apps Script editor, click on File -> New -> Script File.
2.  Name the file (e.g., createEvents.js) and click OK.

### 3. Paste the Script

1.  Go back to your app and copy the generated script from the textarea.
2.  Paste the script into the newly created createEvents.js file in the Google Apps Script editor.

### 4. Run the Script

1.  Click the Run button (the triangle icon) at the top of the Google Apps Script editor.
2.  The first time you run the script, it will ask for authorization. Click Review Permissions and choose your Google account.
3.  Allow the necessary permissions for the script to access your Google Calendar and create events.
4.  Once authorized, the script will run, and events will be created in your specified calendar.

### 5. Schedule the Script (Optional)

If you want to schedule this script to run automatically (e.g., daily or weekly), follow these steps:

1. In the Google Apps Script editor, click on the clock icon (Triggers).
2. Click on + Add Trigger in the lower-right corner.
3. Choose createCustomEvents as the function to run, select the frequency (e.g., time-driven), and set the desired schedule.
4. Click Save.

Contributing

Feel free to submit issues and pull requests if you’d like to contribute to this project!

License

This project is licensed under the MIT License - see the LICENSE file for details.
