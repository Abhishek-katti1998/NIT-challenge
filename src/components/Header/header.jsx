import "./header.css";
import SearchBar from "../UI/searchBar/SearchBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const token = useSelector((sel) => sel.token);
  const formikRef = useSelector((sel) => sel.formik);
  // console.log("FormikRef", formikRef?.values);
  return (
    <header>
      <nav className="navigation">
        <Link to="/" className="link--logo">
          <div
            className="logo"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Fun</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="logo--icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </Link>
        <SearchBar />
        <div className="auth--container">
          {token ? (
            <p>{`${
              formikRef?.values.name.length > 5
                ? formikRef?.values.name + "..."
                : formikRef?.values.name
            }`}</p>
          ) : (
            <Link
              to="/login"
              className="nav--btn"
              style={{ color: "white", textDecoration: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              signup/login
            </Link>
          )}
          <a className="nav--btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icons"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            cart
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
