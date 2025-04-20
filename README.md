# KirbyOnlineStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Running My code steps
1. Install dependencies
npm i
  - Installs all necessary project dependencies

2. Start Docker containers
npm run dockerup
  - Docker Desktop must be running in the background
  - The PostgreSQL database runs on localhost:5432

3. Run database migrations
npm run migrate-up
  - Seeds the database with provided test data

4. Start the Express server
npm run start_api
  - Starts the backend server
  - API endpoints will be available at localhost:3000

5. Run the Angular frontend
ng serve
  - Compiles and runs the Angular app
  - The frontend is available at localhost:4200

6. Shut down Docker containers
npm run dockerdown
  - Stops Docker containers
    - Clears the PostgreSQL databaase
  - Don’t forget to stop the Express server with Ctrl + C


## Copyright Disclaimer

This project includes visual assets from Kirby and the Amazing Mirror by Nintendo, which are copyrighted by their respective owners.

These assets are used under the belief of **fair use**, for non-commercial, educational, and fan-based purposes only. No copyright infringement is intended. 

If you are a copyright holder and have any concerns, please contact me and I will address them promptly.

<a href="https://www.vecteezy.com/free-vector/star">Star Vectors by Vecteezy</a>
