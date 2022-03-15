import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header id="main-header">
            <Link to="/">
                <h1>Óptica Cantillo</h1>
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header