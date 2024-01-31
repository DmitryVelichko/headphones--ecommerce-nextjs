import type { NextPage } from 'next';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import { Container } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(./assets/home/desktop/image-hero.jpg)',
        height: '100vh',
        backgroundSize: '100%',
        color: 'white',
      }}
    >
      <Container>
        <Nav />
        <hr></hr>
        <Hero />
      </Container>
    </div>
  );
};

export default Home;
