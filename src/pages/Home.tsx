import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logo from '../assets/images/EVlogo.png';
import suppressionImg from '../assets/images/ev fire pro.png';
import batteryFireImg from '../assets/images/EV fire.png';
import featuresImg from '../assets/images/EV Features.png';
import understandingImg from '../assets/images/understanding.png';

// 🟩 Outer Container: handles background + centering
const Container = styled('div')({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0d111c',
  padding: 'clamp(16px, 3vw, 40px)',
  boxSizing: 'border-box',
  overflow: 'auto',
});

// 🟩 Frame: main card structure
const Frame = styled('div')({
  width: 'min(1200px, 95vw)',
  maxWidth: '150vw',
  minHeight: 'min(85vh, 820px)',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: 'clamp(20px, 3vw, 40px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    minHeight: 'auto',
    padding: 'clamp(16px, 5vw, 32px)',
  },
});

// 🟩 Logo section
const LogoContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '-32px',
  '@media (max-width: 600px)': {
    marginTop: '-12px',
  },
});

const Logo = styled('img')({
  width: 'clamp(140px, 30vw, 360px)',
  maxWidth: '95%',
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  marginBottom: 'clamp(20px, 4vh, 30px)',
});

// 🟩 Buttons grid layout
const ButtonContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(260px, 1fr))',
  gap: 'clamp(24px, 3vw, 40px)',
  width: 'min(850px, 92%)',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: 'clamp(40px, 6vh, 100px)',
  '@media (max-width: 900px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'clamp(20px, 3vw, 32px)',
  },
  '@media (max-width: 700px)': {
    gridTemplateColumns: '1fr',
    gap: 'clamp(16px, 3vh, 28px)',
    width: 'min(420px, 95%)',
    marginTop: 'clamp(20px, 5vh, 60px)',
  },
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Frame>
        <LogoContainer>
          <Logo src={logo} alt="EV Fire Protection" />
        </LogoContainer>

        <ButtonContainer>
          <Button
            text=""
            onClick={() => navigate('/suppression')}
            imageSrc={suppressionImg}
          />
          <Button
            text=""
            onClick={() => navigate('/battery-fire')}
            imageSrc={batteryFireImg}
          />
          <Button
            text=""
            onClick={() => navigate('/features')}
            imageSrc={featuresImg}
          />
          <Button
            text=""
            onClick={() => navigate('/understanding')}
            imageSrc={understandingImg}
          />
        </ButtonContainer>
      </Frame>
    </Container>
  );
};

export default Home;
