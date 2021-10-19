import React from 'react';
import DrawingBoardPage from "./pages/DrawingBoardPage";

import SxAttribute from "./pages/MuiExperimentalCon/DefinedMuistyle/SxAttribute";
import {renderRoutes} from 'react-router-config';
import routers from "./routers";
import {BrowserRouter, Switch} from 'react-router-dom';
import SxAttributeWithMuiCLassName from "./pages/MuiExperimentalCon/DefinedMuistyle/SxAttributeWithMuiCLassName";
import ClassNamesChangeStyle from "./pages/MuiExperimentalCon/DefinedMuistyle/ClassNamesChangeStyle";
import GlobalClassName from "./pages/MuiExperimentalCon/DefinedMuistyle/GlobalClassName";
import PlainCssSliderDeep1 from "./pages/MuiExperimentalCon/DefinedMuistyle/PlainCssSliderDeep/PlainCssSliderDeep1";
import PlainCssSliderDeep2 from "./pages/MuiExperimentalCon/DefinedMuistyle/PlainCssSliderDeep/PlainCssSliderDeep2";
import StyledComponentsTheme from "./pages/MuiExperimentalCon/DefinedMuistyle/StyledComponentMUiTheme";

function App() {
    return (
        <BrowserRouter>
            {/*<DrawingBoardPage />*/}
            {/*  <SxAttribute />*/}
            {/*<Switch>*/}
            {/*  {renderRoutes(routers)}*/}
            {/*</Switch>*/}
            {/*  <SxAttributeWithMuiCLassName />*/}
            {/*  <ClassNamesChangeStyle />*/}
            {/*<GlobalClassName />*/}
            {/*<PlainCssSliderDeep1 />*/}
            {/*<PlainCssSliderDeep2 />*/}
            <StyledComponentsTheme />
        </BrowserRouter>
    );
}

export default App;
