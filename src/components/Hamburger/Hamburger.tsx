import './Hamburger.css';

interface HamburgerProps {
  open: boolean;
  onToggle: () => void;
  icons?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'grey';
  className?: string;
}

export function Hamburger({ open, onToggle, icons, className }: HamburgerProps) {
  return (
    <div onClick={onToggle} className={`hamburger-icon ${open ? 'active' : ''} ${className}`}>
      <div className={`icons ${icons} icon-1 ${open ? 'a' : ''}`}></div>
      <div className={`icons ${icons} icon-2 ${open ? 'c' : ''}`}></div>
      <div className={`icons ${icons} icon-3 ${open ? 'b' : ''}`}></div>
    </div>
  );
}

export default Hamburger;
