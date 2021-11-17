import { useState, FormEvent } from 'react';
import './test-input.scss';

interface TextBoxProps {
  label?: string;
  value: string;
  name?: string;
  type?: string;
  className?: string;
  testid?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
}

export default function TextBox({ label, name, value, className, testid, ...attr }: TextBoxProps) {
  const [isFocussed, setIsFocussed] = useState<boolean>(false);
  function handleFocus() {
    setIsFocussed(true);
  }
  function handleBlur() {
    setIsFocussed(false);
  }

  return (
    <div data-testid={testid} className={`text-box ${className}`}>
      <label htmlFor={name} className={value || isFocussed ? 'floating' : ''}>{label}</label>
      <input name={name} value={value} {...attr} onFocus={handleFocus} onBlur={handleBlur}/>
    </div>
  );
}
