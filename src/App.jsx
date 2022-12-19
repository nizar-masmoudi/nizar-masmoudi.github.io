import Intro from './components/Intro';
import Links from './components/Links';
import Logo from './components/Logo';

function App() {
  return (
    <div className='w-screen h-screen text-white bg-noise relative p-12 flex items-center justify-center'>
      <Logo />
      <Links />
      <Intro />
    </div>
  );
}

export default App;
