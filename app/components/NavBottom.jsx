import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCircleUser,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "@remix-run/react";

export default function NavBottom() {
  const navigate = useNavigate();
  return (
    <div className="nav-bottom">
      <nav>
        <ul className="nav-list-bottom">
          <li className="nav-list-item" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouse} />
            <p className="nav-list-text">Home</p>
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p className="nav-list-text">Search</p>
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faCircleUser} />
            <p className="nav-list-text">Profile</p>
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <p className="nav-list-text">Sign in</p>
          </li>
          <li className="nav-list-item" style={{ display: "none" }}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <p className="nav-list-text">Sign out</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
