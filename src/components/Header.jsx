import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ThemeButton from "./ThemeButton";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white px-2 py-6 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold">
            <button onClick={() => navigate("/")}>Where in the world?</button>
          </h1>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
