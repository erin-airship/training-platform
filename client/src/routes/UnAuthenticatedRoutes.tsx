import {Routes, Route, Navigate} from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';

export const UnauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
  }