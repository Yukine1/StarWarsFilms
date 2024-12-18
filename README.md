# Describing Test Code Assignment

Mobiquity Test Assigment for Juinor Front-end developer
Copyright by Oleksandr Kolva

## Technologies

1. I used React.js to build this single page application.
2. Use Route library to switching page

### What now not implemented but in process

Not implemented additional information like characters, vehicles, planets.

My ideas on how I can implement features:

API (https://swapi.dev/api)

1. Make one AJAX request for films "/films/" and then do again requests for each element
   in response, example: in film object make request for eacth one character:
   (/people/1/, /people/2/, /people/3/ ...) in characters array, same for vehicles: (/vehicle/1/ ...),
   and planetes: (/planet/1/ ...) etc.
   (Bad decision because it needs send a lot of requests)
   
   <!-- ---------------------------------------------------------------------- -->
2. Same as in first point make one AJAX request for films, but make requests for
   characters (/people/1/ ...), vichecles: (/vehicle/1/ ...), 
   planets (/planet/1/ ...), at the moment of clicking the link.
  (Again bad desicion because a lot of request as in first point)

   <!-- ---------------------------------------------------------------------- -->
3. Make 3 big AJAX requests from API with all I needed information and then use them.
(I think this is good desicion because better get big amount of information than send big amount of requests) 

UPDATED:
3. I understood that this method isn't possible because api didn't store all information on one page, insdead of this 
api store a peace of information on different pages. So I decided that I make AJAX request for each one page and then 
concatenate received information to one single array.

## Setup and Run Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Yukine1/StarWarsFilms.git
   ```
2. Navigate to the project directory:
   ```sh
   cd StarWarsFilms
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Project

To start the development server, run:
```sh
npm start
```
This will start the application at `http://localhost:3000`.

## Project Structure

```
StarWarsFilms/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── FilmDetails/
│   │   │   ├── FilmDetails.jsx
│   │   │   ├── FilmsContainer.jsx
│   │   │   └── styles.module.css
│   │   ├── FilmItem/
│   │   │   ├── FilmItem.jsx
│   │   │   └── styles.module.css
│   │   ├── Films/
│   │   │   ├── FilmItems.jsx
│   │   │   └── styles.module.css
│   ├── Contexts/
│   │   └── StarWarsContext.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Screenshots and Examples

### Home Page

![Home Page](screenshots/home_page.png)

### Film Details Page

![Film Details Page](screenshots/film_details_page.png)

## Badges and Links

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-v6+-red)](https://www.npmjs.com/)
[![API](https://img.shields.io/badge/API-SWAPI-blue)](https://swapi.dev/documentation)
