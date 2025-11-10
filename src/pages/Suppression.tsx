import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import backImg from '../assets/images/back.png';
import logo from '../assets/images/EVlogo.png';
import videoSrc from '../assets/videos/thermalRunaway.mp4';
import contentBoxImg from '../assets/images/ContentBox_.png';

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
  width: 'min(920px, 92vw)',
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


const Logo = styled('img')({
  width: 'clamp(160px, 30vw, 380px)',
  maxWidth: '92%',
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  position: 'relative',
  marginBottom: 'clamp(24px, 4vh, 30px)'
});

const VideoWrapper = styled('div')({
  width: 'min(820px, 92%)',
  maxWidth: '100%',
  aspectRatio: '16/9',
  background: 'rgba(0,0,0,0.6)',
  borderRadius: '20px',
  padding: '1px',
  boxSizing: 'border-box',
  /* lighter white frame */
  border: '2px solid rgba(255,255,255,0.95)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.55)',
  position: 'relative',
  overflow: 'hidden',
});

const Inner = styled('div')({
  width: 'min(820px, 92%)',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});


const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
  display: 'block',
});
const LogoContainer = styled('div')({
  position: 'relative', // Important: makes BackButton position relative to this container
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '-36px',
});

const BackButton = styled('button')({
  position: 'absolute',
  top: '12px',    // distance from the top of the logo container
  right: '-25px',  // distance from the right edge
  padding: '4px 6px',
  border: 'none',
  background: 'rgba(255, 255, 255, 0)', // subtle translucent background for visibility
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 20, // ensure it's above the logo
  transition: 'background 0.2s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
  },
  '&:focus': {
    outline: '2px solid rgba(255,255,255,0.8)',
    outlineOffset: '3px',
  },
  '@media (max-width: 420px)': {
    top: '4px',
    right: '4px',
  },
});

const BackIcon = styled('img')({
  width: 'clamp(20px, 4vw, 34px)',
  height: 'auto',
  display: 'block',
  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
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
      playPromise.catch(() => {
        // ignore autoplay block; user can tap to start
      });
    }
  }, []);

  return (
    <Container>
      <Frame>
      <LogoContainer>
  <Logo src={logo} alt="EV Fire Protection" />
  <BackButton onClick={() => navigate('/')} aria-label="Back to Home">
    <BackIcon src={backImg} alt="" />
  </BackButton>
</LogoContainer>

        <Inner>
          <VideoWrapper>
            <StyledVideo ref={videoRef} src={videoSrc} playsInline loop muted controls />
        
        
          </VideoWrapper>
        </Inner>
      </Frame>
    </Container>
  );
};

export default BatteryFire;