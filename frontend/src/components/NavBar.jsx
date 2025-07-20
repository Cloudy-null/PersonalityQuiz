import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img 
          src= "..\public\ProgrammigClub.png"
          className="logo"
        />
        <h1 className="title">Personality Quiz</h1>
      </div>
    </nav>
  );
}