import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logo from '../assets/images/EVlogo.png';
import suppressionImg from '../assets/images/ev fire pro.png';
import batteryFireImg from '../assets/images/EV fire.png';
import featuresImg from '../assets/images/EV Features.png';
import understandingImg from '../assets/images/understanding.png';

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1f2e',
  padding: 'clamp(12px, 2.5vw, 28px)',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

const Frame = styled('div')({
  width: 'min(920px, 92vw)',
  height: '662px', // Added height
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '16px',
  padding: 'clamp(18px, 3.5vw, 36px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
});


const LogoContainer = styled('div')({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '-36px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '36px',
    background: 'transparent',
    zIndex: 1,
  }
});

const Logo = styled('img')({
  /* responsive logo: scales between 160px and 420px depending on viewport */
  width: 'clamp(160px, 30vw, 380px)',
  maxWidth: '92%',
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  position: 'relative',
  marginBottom: 'clamp(24px, 4vh, 30px)',
});

const ButtonContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
  gap: 'clamp(16px, 3vw, 32px)',
  width: 'min(820px, 92%)',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: 'clamp(20px, 4vh, 40px)',
  '@media (max-width: 900px)': {
    gap: 'clamp(12px, 2.5vw, 24px)',
  },
  '@media (max-width: 700px)': {
    gridTemplateColumns: '1fr',
    gap: 'clamp(16px, 3vh, 24px)',
    width: 'min(400px, 92%)',
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
          text="EV FIREPRO SUPPRESSION"
          onClick={() => navigate('/suppression')}
          imageSrc={suppressionImg}
          hideText
        />
        <Button
          text="UNCONTROLLED EV BATTERY FIRE"
          onClick={() => navigate('/battery-fire')}
          imageSrc={batteryFireImg}
          hideText
        />
        <Button
          text="EV FIREPRO FEATURES"
          onClick={() => navigate('/features')}
          imageSrc={featuresImg}
          hideText
        />
        <Button
          text="UNDERSTANDING ELECTRIC VEHICLE BATTERY FIRES"
          onClick={() => navigate('/understanding')}
          imageSrc={understandingImg}
          hideText
        />
        </ButtonContainer>
      </Frame>
    </Container>
  );
};

export default Home;