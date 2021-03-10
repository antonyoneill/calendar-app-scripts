# Calendar App Scripts

A collection of Google App Scripts I use to manage primary and secondary calendars, which both use Google.

### Installing

There's a better way of managing this, but I just keep it very simple:

* Copy the code from the source
* Create a new Google App Script project on the account you want to run the code
  * I run secondary-account-manager.gs on my secondary Google account and colour-events.gs on my primary account.
* Paste the code into the default .gs file
* Set up a trigger using the following details:
  * Event source: "From calendar"
  * Calendar details: "Calendar updated" then the owner email of the account you want to run it on.

### Improvements

Of course, this thing is janky. I threw part of it together in a short gap between meetings, and the other part over the weekend.

These scripts run every time a calendar event changes. Instead, you could go down the route of maintaining a DB of events, and run the changes over only new ones, or find a smarter way. I find this works well enough for my needs and never exceeds 10 seconds per run.

## secondary-account-manager.gs

*This is designed to run on your secondary account*

I got really frustrated with managing two separate calendars, my primary and one client. A lot of my client colleagues use my client calendar, which doesn't show when I'm actually busy, but I also don't monitor the inbox either so I miss a lot of invites.

I wrote a fairly hacky Google App Script for my secondary Google calendar to:

* Automatically accept events that I have created. I.e. "Lunch", "Blocked", etc - So the client can see when I'm busy when inviting me to meetings
* Automatically invite my primary account if guests can invite others - so I can reply from my primary calendar.

If you want to use this, make sure you update the `PRIMARY_EMAIL`

## colour-events.gs

*This is designed to run on your primary account*

My calendar often contains events from different contexts. I used to manually change the colours of these events as they came in so I could tell at a glance what the day looks like and what headspace I'm going to need to prepare for.

Of course, I got bored of that after a week and so the colour-events.gs script was born.

To customise it, you'll need some regex power and the colours defined in the enum.


