# 🚀 MarsWeatherApp

**MarsWeatherApp** is a full-stack mobile application built using **React Native** for the frontend and **Node.js** with Express for the backend. It displays real-time Mars weather data by consuming NASA's InSight Weather Service API and serves it via a custom backend with support for pagination.

---

## 📁 Project Structure

MarsWeatherApp/
├── backend/                     # 🌐 Express backend API
│   ├── src/
│   │   ├── config/              # API keys and constants
│   │   ├── controllers/         # Route handler functions
│   │   ├── routes/              # API endpoints
│   │   ├── services/            # NASA API integration logic
│   │   ├── utils/               # Pagination and helpers
│   │   └── app.js               # Express app setup
│   ├── index.js                 # Server entry point
│   └── .env                     # Environment variables (NASA_API_KEY)
│
├── frontend/                    # ⚛️ React frontend (SCSS + Redux)
│   ├── public/                  # Static files
│   ├── src/
│   │   ├── app/                 # Redux store setup
│   │   ├── components/          # Reusable UI components
│   │   │   ├── WeatherCard.tsx
│   │   │   └── WeatherCard.scss
│   │   ├── features/            # Redux slices (weatherSlice, etc.)
│   │   ├── hooks/               # Custom Redux hooks
│   │   ├── screens/             # Page-level views
│   │   │   ├── HomeScreen.tsx
│   │   │   └── HomeScreen.scss
│   │   ├── services/            # API calls to backend
│   │   ├── styles/              # Global SCSS and variables
│   │   │   ├── index.scss       # Root SCSS imports
│   │   │   └── variables.scss   # Colors, fonts, spacing, etc.
│   │   └── utils/               # Utility helpers
│   ├── App.tsx                  # App wrapper with Providers
│   ├── tsconfig.json            # TypeScript configuration
│   ├── jest.config.js           # Jest testing config
│   └── tests/                   # Unit tests with RTL + Jest

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
