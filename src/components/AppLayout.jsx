import Outlet from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default AppLayout;
