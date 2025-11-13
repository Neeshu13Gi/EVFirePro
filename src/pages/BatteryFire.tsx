import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import backImg from '../assets/images/back.png';
import logo from '../assets/images/EVlogo.png';
import videoSrc from '../assets/videos/thermalRunaway.mp4';

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1f2e',
  padding: 'clamp(16px, 3vw, 40px)',
  color: '#fff',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
});

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
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    minHeight: 'auto',
    padding: 'clamp(16px, 5vw, 32px)',
  },
});

const LogoContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '-30px',
  position: 'relative',
});

const Logo = styled('img')({
  width: 'clamp(110px, 18vw, 220px)',
  maxWidth: '80%',
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  marginBottom: 'clamp(16px, 2vh, 20px)',
});

const VideoWrapper = styled('div')({
  width: 'min(600px, 90%)',
  maxWidth: '100%',
  aspectRatio: '16/9',
  background: 'rgba(0,0,0,0.6)',
  borderRadius: '14px',
  border: '2px solid rgba(255,255,255,0.95)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.45)',
  overflow: 'hidden',
  marginTop: '22px',
});

const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  display: 'block',
});

const BackButton = styled('button')({
  position: 'absolute',
  top: '18px',
  right: '-10px',
  padding: '2px 4px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  zIndex: 20,
});

const BackIcon = styled('img')({
  width: 'clamp(20px, 4vw, 34px)',
  height: 'auto',
  display: 'block',
  pointerEvents: 'none',
});

const BatteryFire = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const playPromise = v.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {}); // ignore autoplay block
    }
  }, []);

  return (
    <Container>
      <Frame>
        <LogoContainer>
          <Logo src={logo} alt="EV Fire Protection" />
          <BackButton onClick={() => navigate('/')} aria-label="Back to Home">
            <BackIcon src={backImg} alt="Back" />
          </BackButton>
        </LogoContainer>

        <VideoWrapper>
          <StyledVideo
            ref={videoRef}
            src={videoSrc}
            playsInline
            loop
            muted
            controls
          />
        </VideoWrapper>
      </Frame>
    </Container>
  );
};

export default BatteryFire;
