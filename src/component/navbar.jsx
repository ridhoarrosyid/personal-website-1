export default function Navbar() {
  return (
    <div className="navbar-div">
      <h1 className="text-lg">
        <span className="text-lavender">Sam</span>Creative
      </h1>
      <div className="navbar-linkWraper">
        <a href="home" className="navbar-linkItem">
          Home
        </a>
        <a href="about" className="navbar-linkItem">
          About
        </a>
        <a href="project" className="navbar-linkItem">
          project
        </a>
        <a href="blog" className="navbar-linkItem">
          Blog
        </a>
        <a href="contact Me" className="navbar-contactMe">
          Contact Me
        </a>
      </div>
    </div>
  );
}
