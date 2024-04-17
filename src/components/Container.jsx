function Container({ children }) {
  return (
    <div className="m-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      {children}
    </div>
  );
}

export default Container;
