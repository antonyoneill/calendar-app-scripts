// Script to accept events from the primary email, and forward event invites on
// Add a trigger to run handleEvents based on Calendar updated

const PRIMARY_EMAIL = 'my-primary@email.com';

function handleEvents() {
  const startTime = new Date();
  const endTime = new Date();

  endTime.setDate(startTime.getDate() + 14);

  const events = CalendarApp.getEvents(startTime, endTime);

  for (const event of events) {
    acceptMyEvents(event)

    invitePrimaryEmail(event)
  }
}

function acceptMyEvents(event) {
  const fromPrimaryEmail = event.getCreators().includes(PRIMARY_EMAIL);
  const needToRespond = event.getMyStatus() === CalendarApp.GuestStatus.INVITED;

  if (fromPrimaryEmail && needToRespond) {
    console.log('Auto accepting', event.getTitle(), event);
    event.setMyStatus(CalendarApp.GuestStatus.YES);
  }
}

function invitePrimaryEmail(event) {
  const needToRespond = event.getMyStatus() === CalendarApp.GuestStatus.INVITED;
  
  const primaryEmailIsInvited = event.getGuestByEmail(PRIMARY_EMAIL) !== null;
  const canUpdateEvent = event.guestsCanInviteOthers();

  if (canUpdateEvent && needToRespond && !primaryEmailIsInvited) {
    try {
      console.log('Attempting to invite primary email to', event.getTitle())
      event.addGuest(PRIMARY_EMAIL);
    } catch (error) {
      console.error('it failed.', error)
    }
  }
}
