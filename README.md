# kob-automation
A Google Apps Script Project Using the Custom Search API

## Step 1: Create Cloud Project

Inside your Google Cloud Dashboard project dropdown menu, select “New Project,” give your project a descriptive name, and once created, select this new project within your dropdown menu. 

## Step 2: Enable Google Search API

In the home menu, go to “APIs & Services” > Library. Search for “Custom Search API”
Note, you’ll only be able to query this API 100 times per day for free. The Custom Search Engine JSON API costs $5 per 1000 queries.

You’ll now need to configure an “oAuth Consent Screen.” Select “Internal” or “External,” noting that an external app may be subject to more scrutiny/approval process from Google. You can also retroactively publish a project for external use so I’ll select “Internal” so that the tool can be used by anyone with a Siege Media email address and select “Create.”

Add a descriptive App Name (“Siege Media KOB Automation Example”) which will be shown to the user during the authentication process. An email address is also required for user support. You can optionally add a 120x120 pixel logo to also be shown to the user/building a polished user experience.

There are some optional fields under App Domain, that are relevant if you’re integrating this code into a hosted web app. We’re not doing that today so we’ll skip those. Also add your email address under Developer contact information.

Add Scopes for Custom Search API. Save and continue. 

## Step 3: Create API Key

In the API & Services menu, select the “Credentials” view and “+ Create Credentials” and select “API Key.” Copy your API key to clipboard and we’ll establish an “API_KEY” variable in our project. 

While were at it, let’s create a Programmable Search Engine ID needed as a parameter in our API call: https://cse.google.com/all 

