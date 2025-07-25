import './navBar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img 
          src="/ProgrammigClub.png"
          className="logo"
          alt="Logo"
        />
        <h1 className="title">Personality Quiz</h1>
      </div>
    </nav>
  );
}
