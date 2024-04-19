import Container from "./Container";

function Main({ children }) {
  return (
    <main className="bg-neutral-gray-3 px-2 py-6 dark:bg-primary-blue-2">
      <Container>{children}</Container>
    </main>
  );
}

export default Main;
