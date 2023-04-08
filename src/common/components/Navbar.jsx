import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from '../../assets/demo images/logo black.png'
import logow from '../../assets/demo images/logo white.png'

import '../../index.css'
function Navbar() {
	return (
		<header>
		<nav class="navigation section">
            <div class="item_left">
                <a href="./index.html" class="logo">
				<img className='logo-site' src={logow} />
                </a>
            </div>
            <div class="item_right">
                <div class="main_menu">
                    <div class="menu_close">
                        <i class="fa-light fa-xmark"></i>
                    </div>
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="mobile_menu">
                    <i class="fa-light fa-bars"></i>
                </div>
            </div>
        </nav>
		</header>
	);
}
export default Navbar;