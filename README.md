## Weather Project

Created as an evaluation for Parsity. If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email hello@parsity.io.

## Functionality

- On page load button should be disabled.
- User has access to a searchable select element.
- User can type to find a city on the specified list of cities.
- When a valid city is selected, button is enabled and user can get charts.
- Charts loaded displaying temperature, humidity and pressure.
- User can search for an additional city. 3 cities will be held in app memory.

## Challenges

- Project had to use Redux Toolkit, requesting data from the OpenWeather api.
- Data is stored using Redux Toolkit store. Provider provides state to all components in the app.
- Jest used for integration tests.
- Cypress used for e2e tests.
- TypeScript used across the project. It was challenging to type the API in the Redux store. The types for Redux Toolkit were obtained from the Redux toolkit docs.
- Ensuring that the last city the user queries is at the top of the list was difficult, since the data is added to an array. The data therefore needed to be mapped in reverse.
- React-Select was used for the select element which is searchable and clearable. Styling this with TailwindCSS was difficult. It's difficult because it's necessary to completely clear the select element of all styling and then rebuild it. The code for this was borrowed from [this article](https://www.jussivirtanen.fi/writing/styling-react-select-with-tailwind) and modified slightly for me needs. I don't know if I would use React-Select again, probably would use something like ShadCN or similar.
- It was also difficult to select the select element when implementing testing. I had to use data-id in the end to identify it. This worked well with Cypress but not Jest.
- React, Cypress and User Testing Library was also used with Jest and Cypress. The docs are not as helpful as I would have liked.
- It was interesting to bring some functional programming elements to this app. Using lodash `partial` and `flow`. `partial` sets an argument in a function so that it can then be called as a unary function. `flow` creates a function using unary functions, passing the result of the previous to the nest.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

[Live Site on Vercel](https://rtk-weather-ochre.vercel.app/)
