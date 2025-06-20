import { Container } from "./ui/container";

const Attribution = () => {
  return (
    <div className="bg-primary text-sm text-white py-4 text-end">
      <Container>
        <p>&copy; {new Date().getFullYear()} Strona stworzona przez ENTEI</p>
      </Container>
    </div>
  );
};

export default Attribution;
