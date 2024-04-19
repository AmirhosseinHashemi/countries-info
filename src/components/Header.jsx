import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ThemeButton from "./ThemeButton";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white px-2 py-6 shadow-sm dark:bg-primary-blue-1">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold dark:text-neutral-gray-3">
            <button onClick={() => navigate("/")}>Where in the world?</button>
          </h1>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
