import {Routes, Route, Navigate} from 'react-router-dom';
import LogIn from './login';

export const UnauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
  }