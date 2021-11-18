import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface MainTemplateProps {
  children: ReactNode;
  headerMessage: string;
}

const MainTemplate = ({ children, headerMessage }: MainTemplateProps) => (
  <>
    <Header message={headerMessage}/>
    <main className='container relative bg-body' data-testid='main-template'>
      {children}
    </main>
    <Footer/>
  </>
);

export default MainTemplate;
