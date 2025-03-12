# Mr. Teabag ReadMe - FE

<img width="1709" alt="Screenshot 2025-03-12 at 3 27 06 PM" src="https://github.com/user-attachments/assets/ee1c255a-49ce-44c2-9006-0199477b455c" />

Mr. Teabag is a full-stack application designed for managing tea subscriptions. It allows users to:
  - View a list of all tea subscriptions.
  - Click on each subscription to see detailed information, including the subscription's name, price, and associated teas and customers.
  - Cancel a specific subscription if needed.

# App Overview

When users visit the app, they are presented with a list of available tea subscriptions. The top of the page features a navbar for easy navigation:

- Mr.Teabag logo: Positioned on the left side of the navbar.
- Title: Centrally placed to indicate the name of the app.
- Sort Button: Located on the right side of the navbar, allowing users to sort subscriptions by title alphabetically.

Each tea subscription in the list is clickable. Upon clicking a subscription, the user is taken to the detailed page for that particular tea subscription. On the details page, users can:

- Cancel Subscription: The "Cancel Subscription" button allows the user to cancel the subscription.

From the details page, users can click on the title or the logo in the navbar to return to the homepage.

# Getting Started

Clone down the repository to your local machine, cd into the directory and run:

- `npm install`
- `npm run dev`

# Technology Used
- `React v19.0`
- `React Router v7.2.0`

# Test Suite

**End-to-End Testing with Cypress**

End-to-end testing was performed using Cypress. To set up and run the test suite, follow these steps:

1. Install Cypress:

Run the following command to install Cypress as a development dependency:

- `npm i -D cypress`

2. Update package.json:

In your package.json file, add the following to the "scripts" section:

- `"cypress": "cypress open"`

3. Run Cypress:

- `npm run cypress`
  
# Deployment Instructions:
- Coming Soon!
