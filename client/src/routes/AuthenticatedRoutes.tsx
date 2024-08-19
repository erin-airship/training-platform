import {Routes, Route, Navigate} from 'react-router-dom';
import Logout from './logout';

export const AuthenticatedRoutes = () => {
    return (

    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" />} />
   </Routes>
    )
  }
