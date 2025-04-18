# 🚀 MarsWeatherApp

**MarsWeatherApp** is a full-stack mobile application built using **React Native** for the frontend and **Node.js** with Express for the backend. It displays real-time Mars weather data by consuming NASA's InSight Weather Service API and serves it via a custom backend with support for pagination.

---

## 📁 Project Structure

MarsWeatherApp/ │ ├── backend/ # Express backend API │ ├── src/ │ │ ├── config/ # Configuration files (e.g., API keys) │ │ ├── controllers/ # Express controllers │ │ ├── routes/ # Express routes │ │ ├── services/ # NASA API service logic │ │ ├── utils/ # Utility functions │ │ └── app.js # Express app initialization │ ├── index.js # App entry point │ └── .env # Environment variables │ ├── frontend/ # React Native frontend │ ├── src/ │ │ ├── app/ # Redux store │ │ ├── components/ # Reusable UI components (WeatherCard, etc.) │ │ ├── features/ # Redux slices │ │ ├── hooks/ # Custom hooks (Redux wrapper) │ │ ├── screens/ # Screens (HomeScreen) │ │ ├── services/ # API integration layer │ │ ├── styles/ # Styled-components and themes │ │ └── utils/ # Utility functions │ ├── App.tsx # Root component │ ├── tsconfig.json # TypeScript config │ ├── jest.config.js # Jest config for testing │ └── tests/ # Jest unit tests │ └── README.md # Project overview and usage instructions

## 🌐 Backend API (Node.js + Express)

### Features

- Fetches Mars weather data from NASA API
- Caches and paginates Sol-based results
- Serves to frontend via `/api/weather?page=1&limit=5`

### Setup

```bash
cd backend
npm install
npm run dev

Environment File (.env):
NASA_API_KEY=your_actual_api_key(have provided in code)


Frontend App (React Native):

Features: ->

Displays Mars Sol, Temperature, Pressure, Wind using FlatList

Uses Redux Toolkit and RTK Thunk for state management

Themed UI using styled-components

Unit tested with Jest & React Native Testing Library


cd frontend
npm install
npx react-native run-ios

Redux State Flow:

HomeScreen
 └── dispatch(fetchWeatherData)
     └── asyncThunk (calls backend)
         └── updates store via weatherSlice
             └── renders in WeatherCard


Testing:->
cd frontend
npm test


API Endpoint Example:

GET /api/weather?page=1&limit=5

Response:
{
  "total": 25,
  "page": 1,
  "limit": 5,
  "data": [
    {
      "sol": "1073",
      "AT": { "av": -62.1 },
      "HWS": { "av": 5.3 },
      "PRE": { "av": 750.1 }
    },
    ...
  ]
}


💡 Tech Stack

Layer	Tech
Frontend	React Native, Redux Toolkit
Backend	Node.js, Express
Styling	styled-components/native
Testing	Jest, RTL
API Source	NASA InSight API


🧠 Author & Credits
Built by Vivek Upadhyay 

Powered by NASA's InSight Mission Weather Data

License
MIT – Open source and free to use.