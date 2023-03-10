# PokeStats App

This is a simple React application that consumes the PokeAPI to show the stats of different Pokemons. It uses Vite as the build tool, MUI (Material UI) for styling, and React Router for navigation.
To se the deploy go to https://main--papaya-sprite-f4881c.netlify.app

## Installation

To install the app, clone this repository and then run: `npm install`. 
This will install all the necessary dependencies.

## Running the App

To run the app, run: `npm start`.
This will start the app in development mode on `http://localhost:3000/`.

## Usage

The app has two pages. The first page is the home page with a landing, and the second page is where you can select the desired Pokemon and view its stats.

### Navbar

The navbar component can be found in `src/components/NavBar.jsx`. It uses `NavLink` from `react-router-dom` to navigate to the different pages in the app.

### Home Page

The home page can be accessed by navigating to the root URL (`/`). It has a simple landing that welcomes the user and provides a button to navigate to the Pokemon stats page.

### Pokemon Stats Page

The Pokemon stats page can be accessed by navigating to `/pokemons`. On this page, there is an input field where you can search for the desired Pokemon. Once you have entered the name of the Pokemon, press the "Submit" button. This will use the `useParams` hook to display the stats of the selected Pokemon.

## Dependencies

The app was created using the following dependencies:

- React
- Vite
- Material UI
- React Router

## Credits

This app was created by José Cannobbio. It uses the [PokeAPI](https://pokeapi.co/) to fetch the data for the Pokemons. The app is licensed under the MIT license.




