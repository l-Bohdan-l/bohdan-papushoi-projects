import { LinkStyled, List, Section, Title } from "./Main.styled";

export default function Main() {
  return (
    <Section>
      <Title>Choose project</Title>
      <List>
        <LinkStyled to="/images-search">Find Image</LinkStyled>
        <LinkStyled to="/movie-gallery">Movies</LinkStyled>
        <LinkStyled to="/phonebook">Phone book</LinkStyled>
      </List>
    </Section>
  );
}
