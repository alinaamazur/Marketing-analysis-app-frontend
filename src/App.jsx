import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/MainPage/WelcomePage/Header/Header.css';
import './Components/MainPage/WelcomePage/MainContent/MainContent.css';
import './Components/MainPage/WelcomePage/WelcomePage.css';

import WelcomePage from './Components/MainPage/WelcomePage/WelcomePage';
import Offers from './Components/MainPage/Offers/Offers';
import Examples from './Components/MainPage/Examples/Examples';
import Footer from './Components/MainPage/Footer/Footer';

import LogInPage from './Components/Pages/LogInPage/LogIn';
import SignUpPage from './Components/Pages/RegisterPage/RegisterPage';
import MyWorkspacePage from './Components/Workspace/Workspace';

const MainPage = () => (
  <div>
    <WelcomePage />
    <Offers />
    <Examples />
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/my-workspace/*" element={<MyWorkspacePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;