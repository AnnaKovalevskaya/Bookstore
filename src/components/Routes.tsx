import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  )
}

export { AppRoutes }
