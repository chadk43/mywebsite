import classes from "./Navigation.module.css";

const Navigation = () => {
  // const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>

        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
