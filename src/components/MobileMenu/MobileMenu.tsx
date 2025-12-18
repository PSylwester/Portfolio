import { Link } from 'react-router-dom';
import './MobileMenu.css';

interface MobileMenuProps {
  open: boolean;
  onClose?: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${open ? 'show' : ''}`}>
      <div className={`dark-blue ${open ? 'slide' : ''}`}></div>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
