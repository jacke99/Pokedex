import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBottom() {
  return (
    <div className="nav-bottom">
      <nav>
        <ul className="nav-list-bottom">
          <li>
            <FontAwesomeIcon icon={faHouse} />
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleUser} />
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
