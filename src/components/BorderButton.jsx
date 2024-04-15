function BorderButton({ children }) {
  return (
    <button className="col-span-1 py-2 text-xs font-light capitalize text-neutral-gray-2 shadow active:shadow-sm">
      {children}
    </button>
  );
}

export default BorderButton;
