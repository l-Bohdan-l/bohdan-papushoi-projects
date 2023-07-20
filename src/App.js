import "./App.css";
import { useState, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./pages/Main/Main";
import { Error } from "./components/Error";
import ImageSearch from "./pages/ImageSearch/ImageSearch";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import TrendingMovies from "./components/Movies/TrendingMovies/TrendingMovies";
import MovieDetailPage from "./pages/Movies/MovieDetailPage";
import Cast from "./components/Movies/Cast/Cast";
import Reviews from "./components/Movies/Reviews/Reviews";
import MovieSearch from "./components/Movies/MoviesSearch/MovieSearch";
import { PublicRoute } from "./components/Contacts/PublicRoute";
import { PrivateRoute } from "./components/Contacts/PrivateRoute";

import { persistor } from "./redux/store";
import { useAuth } from "./redux/hooks/useAuth";
import {
  setRefetchedCredentials,
  useGetCurrentUserQuery,
} from "./redux/authSlice";
const Home = lazy(() => import("./pages/Home"));
const ContactPage = lazy(() => import("./pages/Contacts/ContactPage"));
const LoginPage = lazy(() => import("./pages/Contacts/LoginPage"));
const Registration = lazy(() => import("./pages/Contacts/Registration"));

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        //   {
        //     // loader: () => import("./pages/Home"),
        //     element: <PublicRoute component={Home} />,
        //     index: true,
        //   },
        //   {
        //     path: "contacts",
        //     // loader: () => import("./pages/Movies"),
        //     element: <PrivateRoute component={ContactPage} redirectTo="/login" />,
        //   },
      ],
    },
    {
      path: "/images-search",
      element: <ImageSearch />,
    },
    {
      path: "/movie-gallery",
      element: <SharedLayout />,
      children: [
        {
          element: <TrendingMovies />,
          index: true,
        },
        {
          path: "movies",
          element: <MovieSearch />,
        },
        {
          path: "movies/:movieId",
          // loader: () => import("./pages/MovieDetailPage"),
          element: <MovieDetailPage />,
          children: [
            {
              path: "cast",
              // loader: () => import("./pages/Cast"),
              element: <Cast />,
            },
            {
              path: "reviews",
              // loader: () => import("./pages/Reviews"),
              element: <Reviews />,
            },
          ],
        },
      ],
    },
    {
      path: "/phonebook",
      element: <SharedLayout />,
      children: [
        {
          // loader: () => import("./pages/Home"),
          element: <PublicRoute component={Home} />,
          index: true,
        },
        {
          path: "contacts",
          // loader: () => import("./pages/Movies"),
          element: (
            <PrivateRoute
              component={ContactPage}
              redirectTo="/phonebook/login"
            />
          ),
        },
        {
          path: "login",
          element: (
            <PublicRoute
              restricted
              component={LoginPage}
              redirectTo="/phonebook/contacts"
            />
          ),
        },
        {
          path: "register",
          element: (
            <PublicRoute
              restricted
              component={Registration}
              redirectTo="/phonebook$ npm install gh-pages --save-dev/contacts"
            />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/bohdan-papushoi-projects" }
);

function App() {
  const { token } = useAuth();
  const { data } = useGetCurrentUserQuery(undefined, { skip: !token });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setRefetchedCredentials(data));
      return;
    }
    return;
  }, [data, dispatch]);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </>
  );
}

export default App;
