// Script to colour calendar events based on patterns
// Add a trigger to run colourCalendarEvents based on Calendar updated

function colourCalendarEvents() {
  const startTime = new Date();
  const endTime = new Date();

  endTime.setDate(startTime.getDate() + 14);

  const events = CalendarApp.getEvents(startTime, endTime);

  for (const event of events) {
    if (event.getColor() === '') {
      const newColor = deriveColor(event);

      if (newColor !== null) {
        event.setColor(newColor);
      }
    }
  }
}


function deriveColor(event) {
  const titleAndDescription = event.getTitle() + event;
  // Colours here: https://developers.google.com/apps-script/reference/calendar/event-color
  // Note the colours in the documentation do not match the google calendar UI

  if (/Topic A/i.test(titleAndDescription)) {
    return CalendarApp.EventColor.BLUE; // Blueberry..
  } else if (/Topic B|Topic C/i.test(titleAndDescription)) {
    return CalendarApp.EventColor.GRAY;
  } else if (/121|\/ Antony|\/Antony \//i.test(titleAndDescription)) {
    return CalendarApp.EventColor.MAUVE;
  }

  return null;
}
