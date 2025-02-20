import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import LoginPage from './pages/login-page';
import SignInPage from './pages/sign-up'
import NotesPage from './pages/notes-page'
import SettingsPage from './pages/settings'
import WelcomePage from './pages/welcome'
import PlansPage from './pages/plans'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/therapas-notes" element={<NotesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/welcome" element={<WelcomePage/>} />
        <Route path="/plans" element={<PlansPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
