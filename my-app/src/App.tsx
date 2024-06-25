import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import routes from "./routes/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
