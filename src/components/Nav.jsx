import {Link} from "react-router-dom";
import "./Nav.css"
function Nav(){
    return(<>
        <nav className="nav">
            <Link to="/" className="n">Home</Link>
            <Link to="/about" className="n">About</Link>
            <Link to="/contact" className="n">Contact</Link>
        
        </nav>
    </>);
}
export default Nav;