import { Navbar } from 'react-bootstrap';
import './Header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
    return (
        <>
        <header className="header">
            <Navbar>
                <Navbar.Brand href="#home">
                    MEDIA APPEREANCES
                </Navbar.Brand>
            </Navbar>
            <div className="hamburger">
                <GiHamburgerMenu />
            </div>
        </header>
        </>

    )
}

export default Header
