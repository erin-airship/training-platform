import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './home';

export const SharedRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    )
  }