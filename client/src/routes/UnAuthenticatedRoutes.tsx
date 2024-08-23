import {Routes, Route, Navigate} from 'react-router-dom';
import SignIn from  './auth/signin';
import SignUp from './auth/signup';

export const UnauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
  }