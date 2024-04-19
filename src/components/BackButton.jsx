import { useNavigate } from "react-router-dom";

function BackButton({ position }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold shadow active:shadow-sm dark:bg-primary-blue-1 dark:text-neutral-gray-3 ${position || ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      <span>Back</span>
    </button>
  );
}

export default BackButton;
