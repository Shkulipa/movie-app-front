import { lazy } from "react";
import { IPage } from "./pages.interfaces";

/**
 * @info public pages
 */
const LazyHome = lazy(() => import("src/components/pages/home/home"));
const LazyLogin = lazy(() => import("src/components/pages/login/login"));
const LazyMovie = lazy(() => import("src/components/pages/movie/movie"));
const LazyError404 = lazy(() => import("src/components/pages/error404/error404"));
const LazyError500 = lazy(() => import("src/components/pages/error500/error500"));

export const home: IPage = {
  path: "/",
  element: <LazyHome />
};
export const login: IPage = {
  path: "/login",
  element: <LazyLogin />
};
export const post: IPage = {
  path: "/movie/:imdbID",
  element: <LazyMovie />
};
export const error404: IPage = {
  path: "*",
  element: <LazyError404 />
};
export const error500: IPage = {
  path: "/error500",
  element: <LazyError500 />
};

/**
 * @info auth pages
 */
 const LazyMovieFavorites = lazy(() => import("src/components/pages/movieFavorites/movieFavorites"));
 
 export const movieFavorites: IPage = {
   path: "/movie/favorites/collection",
   element: <LazyMovieFavorites />
 };

export const authPages: IPage[] = [movieFavorites];
export const publicPages: IPage[] = [home, login, post, error404, error500];
