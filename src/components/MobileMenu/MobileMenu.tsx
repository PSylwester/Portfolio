import { Link, NavLink } from 'react-router-dom';
import './MobileMenu.css';
import { DEFAULT_NAV_ITEMS } from '@/config/navigation';
interface MobileMenuProps {
  open: boolean;
  onClose?: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${open ? 'show' : ''}`}>
      <div className={`dark-blue ${open ? 'slide' : ''}`}></div>
      <ul>
        {DEFAULT_NAV_ITEMS.map((item, index) => (
          <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <NavLink to={item.link_to} onClick={onClose}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
