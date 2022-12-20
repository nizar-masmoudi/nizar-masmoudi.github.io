import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Links from './components/Links';
import Logo from './components/Logo';
import Pagination from './components/Pagination';
import About from './components/About';
import Work from './components/Work';
import Scroll from './components/Scroll';
import Timeline from './components/Timeline';

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
        <Timeline id='story'>
          <Timeline.Marker estab='Faculty of Science' role="Bachelor's Diploma" major='Mathematics & Physics' date='2016 - 2018' />
          <Timeline.Marker estab='ESPRIT School of Engineering' role="Engineering Diploma" major='Software (Minor in Data Science)' date='2018 - 2021' />
          <Timeline.Marker estab='Swiss Premium Negoce' role="Software Engineer" major='Full-time' date='2021 - 2022' />
          <Timeline.Marker estab='Université Paris Dauphine-PSL' role="Master's Diploma" major='Big Data & AI' date='2022 - 2023' />
        </Timeline>
        <Work id='work'>
          <Work.Item src='drone.jpg' title='UAV-Based Crowd Surveillance System In Post COVID-19 Era' order={1} />
          <Work.Item src='face-mask.jpg' title='Real-time Face Mask Detection' order={2} />
          <Work.Item src='music.jpg' title='Spotify playlist recommendation system' order={3}/>
        </Work>
      </div>
      <Pagination page={page}/>
      <Scroll faceDown={page !== 3} />
    </div>
  );
}

export default App;
