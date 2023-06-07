import { Form } from "@remix-run/react";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Pokedex</h1>
      <Form>
        <input className="search-field" type="text" placeholder="Search..." />
        <button type="submit"></button>
      </Form>
    </header>
  );
}
