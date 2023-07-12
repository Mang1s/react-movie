import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import MoviePage from './components/MoviePage/MoviePage.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/movies')
  },
  {
    path: "/movies",
    element: <App />,
  },
  {
    path: "/movies/:movieId",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
