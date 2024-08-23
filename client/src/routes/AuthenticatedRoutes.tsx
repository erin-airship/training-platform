import {Routes, Route, Navigate} from 'react-router-dom';
import Logout from './auth/logout';

export const AuthenticatedRoutes = () => {
    return (

    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" />} />
   </Routes>
    )
  }
