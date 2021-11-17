import { MouseEvent } from 'react';
import './button.scss';

interface ButtonProps {
  label?: string;
  testid?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ label, testid, ...attr }: ButtonProps) {
  return (
    <button data-testid={testid} type='button' {...attr}>{label}</button>
  );
}
