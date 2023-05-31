# Newsletter Signup Page

This project is a newsletter signup page that allows users to subscribe to a newsletter using their email address. The signup page is built using HTML and CSS, while the backend functionality is implemented using Node.js, Express.js, and the `body-parser` middleware. The newsletter subscription is managed using the Mailchimp API.

## Technologies Used

- HTML
- CSS
- Node.js
- Express.js
- Mailchimp API

## Setup Instructions

1. Clone the repository to your local machine.
2. Install Node.js on your system if you haven't already.
3. Navigate to the project's root directory in your terminal.
4. Run `npm install` to install the project dependencies.
5. Create a Mailchimp account and obtain an API key.
6. Create an .env file.
7. Update the API key and list ID in the `.env` file with your own Mailchimp API credentials.
8. Run `node app.js` to start the server.
9. Access the signup page by visiting `http://localhost:3000` in your web browser.

## Folder Structure

- `public/`: Contains the static files (HTML, CSS, client-side JavaScript).
- `app.js`: Main server file.

## Features

### Newsletter Signup
- Users can enter their email address and submit the signup form to subscribe to the newsletter.
- The server validates the email address and sends a request to the Mailchimp API to add the subscriber to the designated list.
- Success and error messages are displayed to the user based on the API response.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## Authors

- [Kais Sabbegh] <[Kaissabbegh@gmail.com](mailto:Kaissabbegh@gmail.com)>

