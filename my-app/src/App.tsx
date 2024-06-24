import React, { Suspense } from 'react'; 
import { BrowserRouter,  Route, Link } from "react-router-dom";
import { Routes } from 'react-router';
import routes from './routes/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
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
