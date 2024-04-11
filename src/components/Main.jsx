import Container from "./Container";

function Main({ children }) {
  return (
    <main className="px-2 py-6">
      <Container>{children}</Container>
    </main>
  );
}

export default Main;
