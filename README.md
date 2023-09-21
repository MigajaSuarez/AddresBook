# AddressBook

This documentation provides a comprehensive guide to understanding and using of the front-end project AddressBook that displays a list of people from an address book with the ability to view individual details. The project's main goal is to create a responsive web client that fetches and displays a list of people from the address book using the RandomUser.me API. Users can select an individual to view more details about them.

# Prerequisites

This project was generated with:
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.
- Node.js v16.17.0
-npm 8.15.0

# Getting Started

- Clone the project repository from https://github.com/MigajaSuarez/AddressBook.git.
- Install project dependencies using npm install 
- Run `ng serve` for a dev server. 
- Navigate to `http://localhost:4200/`. 
- The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Implementation Details

API Integration:
It uses the API endpoints from https://randomuser.me/ to request lists of users.
Documentation can be found at https://randomuser.me/documentation.

The ConnectionService class is responsible for handling API requests to fetch contact information from the RandomUser.me API. It is designed to provide a clean and reusable way to interact with the API. Below are the key implementation details:

getContactList Method:
- This method is used to retrieve a list of contacts from the API.
Parameters:
- numberOfContacts: The number of contacts to fetch from the API is specified as a parameter.
Returns:
- An Observable that emits the HTTP response containing contact data.
Method Description:
- The method constructs an HTTP GET request to the API using the http.get method provided by Angular's HttpClient.
- The URL for the request is built by appending query parameters to the apiUrl. These query parameters include:
- seed=nuvalence This parameter ensures that the API returns the same data on each request, which is useful for consistency.
- results=${numberOfContacts}: This parameter specifies the number of contacts to fetch, as provided by the numberOfContacts parameter.
- exc=gender,nat,login,dob,registered,id: This parameter excludes certain fields (gender, nationality, login details, date of birth, registration information, and ID) from the API response to reduce unnecessary data.
- The method returns an Observable of this response.

## Responsive Design with Bootstrap 5

Bootstrap 5 is a popular front-end framework that provides a wide range of responsive design components and utilities. It allows you to create responsive web applications easily. In our project, Bootstrap 5 is used to ensure that our application works seamlessly on both mobile and desktop devices.

Bootsrap 5 documentation: https://getbootstrap.com/docs/5.0/getting-started/introduction/  

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Contact Developer Miguel Suarez masuarezj@gmail.com


