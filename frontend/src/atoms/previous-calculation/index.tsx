import './previous-calcualtion.scss';

interface PreviousCalculationProps {
  label: string;
  className?: string;
  testid?: string;
  alignRight?: boolean;
}

export default function PreviousCalculation({
  label, testid, className, alignRight,
}: PreviousCalculationProps) {
  return (
    <span className={`previous-calcualtion ${alignRight ? 'text-right' : 'text-left'} ${className || ''}`} data-testid={testid}>
      {label}
    </span>
  );
}
