import React from 'react';
import DrawingBoardPage from "./pages/DrawingBoardPage";

import SxAttribute from "./pages/MuiExperimentalCon/DefinedMuistyle/SxAttribute";
import { renderRoutes } from 'react-router-config';
import routers  from "./routers";
import {BrowserRouter, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/*<DrawingBoardPage />*/}
      {/*  <SxAttribute />*/}
      <Switch>
        {renderRoutes(routers)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
