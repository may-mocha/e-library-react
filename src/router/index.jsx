import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoute from './router'
import { GlobalStyle } from "../theme/common/global";
import { Main } from "../component/layout";

const AppLayout = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* header */}
      <Main>
        <AppRoute />
      </Main>
      {/* footer */}
    </BrowserRouter>
  )
}

export default AppLayout