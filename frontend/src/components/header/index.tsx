import Brand from '../../assets/brand.png';

interface HeaderProps {
  message: string;
}

export default function Header({ message }: HeaderProps) {
  return (
    <header className='container flex items-center w-full bg-brand h-9 px-2 shadow-md' data-testid='header'>
      <img className='h-5 w-5 mr-2' src={Brand} alt='logo'/>
      <p className='text-white text-lg leading-[1.2]'>
        {message}
        <br/>
        <small className='text-sm'>Win the game or win the job</small>
      </p>
    </header>
  );
}
