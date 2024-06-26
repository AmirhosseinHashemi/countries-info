import { useNavigate } from "react-router-dom";

function BorderButton({ children }) {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate(`/country/${e.target.innerText}`);
  }

  return (
    <button
      className="col-span-1 py-2 text-xs font-light capitalize text-neutral-gray-2 shadow active:shadow-sm dark:bg-primary-blue-1 dark:text-neutral-gray-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default BorderButton;
