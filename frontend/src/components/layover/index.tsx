import { ReactNode } from 'react';

interface LayoverProps {
  children: ReactNode;
}

const Layover = ({ children }: LayoverProps) => (
  <div className='flex bg-layover w-full h-full absolute items-center justify-center left-[0] top-[0]'>
    {children}
  </div>
);

export default Layover;
