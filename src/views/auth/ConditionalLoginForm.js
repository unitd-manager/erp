import React from 'react';
import { Navigate } from 'react-router-dom';
import UserToken from '../../components/UserToken';
import LoginForm from './LoginForm';

function ConditionalLoginForm() {
  const { token, setToken } = UserToken();

  if (!token) {
    return <LoginForm setToken={setToken} />;
  }
  console.log('Token value:', token);
  // Redirect to the dashboard page once login is successful
  return <Navigate to="/dashboards/classic" replace />;
}

export default ConditionalLoginForm;