import { Link } from "react-router-dom";
import { List, Section } from "./Main.styled";

export default function Main() {
  return (
    <Section>
      <h1>Choose project</h1>
      <List>
        <Link to="/images-search">Find Image</Link>
        <Link to="/movie-gallery">Movies</Link>
        <Link to="/phonebook">Phone book</Link>
      </List>
    </Section>
  );
}
