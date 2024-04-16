import { Outlet } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import { AppProvider } from "../contexts/AppContext";

function AppLayout() {
  return (
    <AppProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </AppProvider>
  );
}

export default AppLayout;
