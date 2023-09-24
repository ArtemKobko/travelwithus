import React from 'react';
import { Navigate } from 'react-router-dom';

function DefaultRoute() {
  return (
    <Navigate to="/" replace />
  );
}

export default DefaultRoute;
