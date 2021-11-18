import FooterBrand from '../../assets/footer-brand.png';

export default function Footer() {
  return (
    <footer className='container flex flex-col md:flex-row items-center w-full md:h-9 bg-primary text-white p-2 justify-between' data-testid='footer'>
      <img className='h-5' src={FooterBrand} alt='logo'/>
      <div className='flex flex-col justify-center md:flex-row md:mt-[0] mt-2'>
        <small className='text-white text-center text-sm md:mr-5 mb-2 md:mb-[0]'>Cookie Statement</small>
        <small className='text-body text-center text-sm'>© 2021 Takeaway.com</small>
      </div>
    </footer>
  );
}
