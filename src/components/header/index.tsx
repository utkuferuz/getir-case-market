import Logo from "./logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <Logo />
        </a>
      </div>
    </header>
  );
};

export default Header;
