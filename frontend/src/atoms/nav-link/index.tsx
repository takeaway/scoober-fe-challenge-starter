import { Link } from 'react-router-dom';
import './nav-link.scss';

interface NavLinkProps {
  label: string;
  url: string;
  isActive?: boolean;
  testid?: string;
  className?: string;
}

export default function Button({ label, url, testid, className, isActive }: NavLinkProps) {
  return (
    <Link to={url} data-testid={testid} className={`nav-link color-transition ${className || ''} ${isActive ? 'active' : ''}`}>
      {label}
      <svg className='nav-link-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 49'>
        <path d='M5.7 48.3L.8 43.4l18.5-18.5L.8 6.3l4.9-4.9 23.5 23.5z'/>
      </svg>
    </Link>
  );
}
