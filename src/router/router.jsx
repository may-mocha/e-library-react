import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { RouteConfig } from "./config";


export const PrivateRoute = ({ children, protect }) => {
  // if (!authStore.getAuth()?.user_id) {
  //   return <Navigate to="/" />;
  // }
  return children;
};

const RouteList = () => {
  return (
    <Routes>
      {RouteConfig.map(({ path, element, protect }, key) => {
        return (
          <Route
            path={path}
            key={key}
            element={
              protect ? (
                <PrivateRoute protect={protect}>{element}</PrivateRoute>
              ) : (
                element
              )
            }
          />
        );
      })}
    </Routes>
  )
}

const AppRoute = () => {
  return (
    <>
      <RouteList />
    </>
  )
}

export default AppRoute