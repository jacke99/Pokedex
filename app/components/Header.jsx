import { Form } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export async function action({ request }) {
  const formData = await request.formData;
  const query = formData.get("search-field");
}

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Pokedex</h1>
      <Form method="POST" className="search-form">
        <input
          className="search-field"
          name="search-field"
          type="text"
          placeholder="Search..."
        />
        <button className="search-btn" type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-bar-icon"
          />
        </button>
      </Form>
    </header>
  );
}
