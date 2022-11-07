import { Link } from "react-router-dom";

const navbar = () => {
  return (
    
      <nav>
      <div className="navbar">
        <ul>
       <li> <Link to="/Link">Link</Link> </li>
       <li> <Link to="/home">Home</Link> </li>
       <li> <Link to="/about">About</Link> </li>
        </ul>
    </div>
    </nav>
  );
}
export default NavBar