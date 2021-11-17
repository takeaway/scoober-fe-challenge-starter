interface PreviousSelectionProps {
  label: string;
  className?: string;
  testid?: string;
  isSecondary?: boolean;
}

const classes = 'text-white rounded-full text-2xl h-[60px] w-[60px] flex items-center justify-center';

export default function PreviousSelection({
  label, testid, className, isSecondary,
}: PreviousSelectionProps) {
  return (
    <span className={`${classes} ${isSecondary ? 'bg-secondary' : 'bg-primary'} ${className || ''}`} data-testid={testid}>
      {label}
    </span>
  );
}
