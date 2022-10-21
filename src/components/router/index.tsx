import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Loader } from 'src/components';
import { publicPages, authPages } from "src/utils/pages/pages";
import { IPage } from "src/utils/pages/pages.interfaces";

const user = true;

export function Router(): JSX.Element {
  const publicRouters = publicPages.map(({ path, element }: IPage) => {
    
    return <Route key={path} path={path} element={
      <React.Suspense fallback={<Loader />}>
        {element}
      </React.Suspense>
      } />
  });

  const authRouters = authPages.map(({ path, element }: IPage) => {
    
    return <Route key={path} path={path} element={
      <React.Suspense fallback={<Loader />}>
        {element}
      </React.Suspense>
      } />
  });
  
  return (
    <BrowserRouter>
      <Routes>
        {publicRouters}
        {user && authRouters}
      </Routes>
    </BrowserRouter>
  );
}