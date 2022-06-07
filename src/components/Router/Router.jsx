import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CarPark from '../CarPark/CarPark';
import SingleCarPage from '../CarPark/SingleCarPage/SingleCarPage';
import HistoryMaintenance from '../HistoryMaintenance/HistoryMaintenance';
import Login from '../Login/Login';
import Maintenance from '../Maintenance/Maintenance';
import Registration from '../Registration/Registration';
import ServiceStation from '../ServiceStation/ServiceStation';
import SinglePageCarService from '../ServiceStation/SinglePageCarService/SinglePageCarService';
import SideBar from '../SideBar/SideBar';
import RequireAuth from '../RequireAuth/RequireAuth';
import Profile from '../Profile/Profile';

function Router() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route
            path="/"
            element={(
              <RequireAuth>
                <ServiceStation />
              </RequireAuth>
            )}
          />
          <Route
            path="/car-park"
            element={(
              <RequireAuth>
                <CarPark />
              </RequireAuth>
          )}
          />
          <Route
            path="/car-park/single-car-page/:id"
            element={(
              <RequireAuth>
                <SingleCarPage />
              </RequireAuth>
          )}
          />
          <Route
            path="/history-maintenance"
            element={(
              <RequireAuth>
                <HistoryMaintenance />
              </RequireAuth>
            )}
          />
          <Route
            path="/maintenance/:id"
            element={(
              <RequireAuth>
                <Maintenance />
              </RequireAuth>
            )}
          />
          <Route
            path="/single-page-car-service/:id"
            element={(
              <RequireAuth>
                <SinglePageCarService />
              </RequireAuth>
            )}
          />
          <Route
            path="/profile"
            element={(
              <RequireAuth>
                <Profile />
              </RequireAuth>
            )}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default Router;
