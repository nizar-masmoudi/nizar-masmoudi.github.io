import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Links from './components/Links';
import Logo from './components/Logo';
import Pagination from './components/Pagination';
import About from './components/About';

function App() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    const firstPage = document.getElementById('intro');
    const container = document.getElementById('container');
    container.addEventListener(
      'scroll',
      () => setPage(-Math.round((firstPage.getBoundingClientRect().top - container.getBoundingClientRect().top) / 550)),
      false
    );
  }, []);

  return (
    <div className='w-screen h-screen text-white bg-noise relative p-12 flex items-center justify-center'>
      <Logo />
      <Links />
      <div
        id='container'
        className='absolute top-1/2 -translate-y-1/2 left-44 w-5/6 h-[550px] overflow-y-scroll scrollbar-hide snap-y snap-mandatory'
      >
        <Intro id='intro' />
        <About id='about' />
        <Intro id='skills' />
        <Intro id='work' />
      </div>
      <Pagination page={page}/>
    </div>
  );
}

export default App;
