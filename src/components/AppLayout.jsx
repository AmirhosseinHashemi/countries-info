import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <p>Main Content</p>
      </Main>
    </>
  );
}

export default AppLayout;
