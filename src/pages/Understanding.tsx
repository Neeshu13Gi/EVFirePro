import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import thermalVideo from '../assets/videos/thermalRunaway.mp4';
import backIcon from '../assets/images/back.png';
import titleButton from '../assets/images/title_Button.png';
import logo from '../assets/images/EVlogo.png';

// ========== Styled Components ==========

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  backgroundColor: '#0d111c',
  padding: 'clamp(16px, 3vw, 40px)',
  boxSizing: 'border-box',
  overflow: 'hidden',
});


const Frame = styled('div')({
  width: 'min(820px, 95vw)',
  maxWidth: '100vw',
  height: '662px',
  aspectRatio: '16/9',
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
  boxSizing: 'border-box',
  '@media (max-width: 900px)': {
    width: '100%',
    minHeight: '320px',
    padding: '16px 8px',
    overflow: 'auto',
  },
});

// ✅ Fixed, responsive logo placement
const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: 'clamp(-4px, 1vh, 4px)', // slight upward adjustment
  marginBottom: 'clamp(10px, 2vh, 24px)',
  '@media (max-width: 600px)': {
    marginTop: '4px',
    marginBottom: '12px',
  },
});
const Logo = styled('img')({
  width: 'clamp(100px, 20vw, 160px)',
  height: 'auto',
  objectFit: 'contain',
  marginTop: '-50px', // move slightly upward
});

const Grid = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  gap: '32px',
  overflow: 'hidden',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    overflow: 'auto',
  },
});

const LeftCard = styled('div')({
  flex: 1,
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '20px',
  padding: '32px 28px',
  color: '#fff',
  border: '2px solid #fff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: 1.6,
  minHeight: '380px',
  maxWidth: '320px',
  '@media (max-width: 900px)': {
    textAlign: 'center',
    minHeight: 'auto',
    order: 2,
    width: '95%',
    maxWidth: 'none',
    padding: '18px 10px',
  },
});

const VideoWrapper = styled('div')({
  flex: 1.5,
  position: 'relative',
  overflow: 'visible',
  borderRadius: '24px',
  border: '2px solid #fff',
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
  minHeight: '400px',
  maxHeight: '400px',
  maxWidth: '800px',
  padding: '12px',
  '@media (max-width: 900px)': {
    width: '98%',
    marginBottom: '16px',
    minHeight: '240px',
    maxWidth: 'none',
    padding: '6px',
  },
});

const StyledVideo = styled('video')({
  width: '200%',
  height: '200%',
  objectFit: 'cover',
  borderRadius: '20px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
  background: '#000',
  transition: 'opacity 0.5s ease-in-out',
  opacity: 1,
  border: 'none',
  '&.fading': {
    opacity: 0,
  },
});

const RightColumn = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '19.5px',
  justifyContent: 'center',
  alignItems: 'center',
   marginTop: '20px',   // 👈 added top margin
  marginBottom: '10px', // 👈 added bottom margin
 
  marginRight: 'px',

  minHeight: '200px',
  maxWidth: '201px',
  '@media (max-width: 900px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
    minHeight: 'auto',
    maxWidth: 'none',
  },
});
      
const SideButton = styled('button')({
  background: `url(${titleButton}) no-repeat center center`,
  backgroundSize: '100% 100%',
  color: 'rgba(255,255,255,0.95)',
  border: 'none',
  width: '90%',
  maxWidth: '240px',
  height: '48px',
  cursor: 'pointer',
  fontSize: '10px',
  fontWeight: 400,
  borderRadius: '24px',
  transition: 'all 0.25s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  '&:hover': {
    color: '#2d4148ff',
    transform: 'scale(1.04)',
  },
  '@media (max-width: 900px)': {
    width: '45%',
    minWidth: '130px',
    marginBottom: '8px',
    maxWidth: 'none',
  },
});

const BackButton = styled('button')({
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  width: '40px',
  height: '40px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

// ========== Component ==========

const Understanding = () => {
  const navigate = useNavigate();

  const contentItems = [
    {
      title: 'What is thermal runaway?',
      text: 'A self-sustaining chemical reaction in a lithium-ion cell — often triggered by battery damage, overcharging, or a fault — that overheats and ignites surrounding cells.',
      button: 'Thermal Runaway',
      video: thermalVideo,
    },
    {
      title: 'What are toxic gases in EV fires?',
      text: 'Burning batteries release: • Hydrogen fluoride (HF) • Carbon monoxide (CO) • Carbon dioxide (CO2) • Methane (CH4) • Hydrogen (H2) and other toxic vapours creating life-threatening risks for responders.',
      button: 'Toxic Gases',
      video: thermalVideo,
    },
    {
      title: 'Understanding Deflagration',
      text: 'Deflagration occurs when battery cells rapidly release stored energy, causing explosive combustion — requiring specialized suppression techniques.',
      button: 'Deflagration',
      video: thermalVideo,
    },
    {
      title: 'Intense Jet-like Flames',
      text: 'Fires can eject jet flames over 1,000°C sideways – igniting vehicles and damaging nearby structures.',
      button: 'Jet-like Flames',
      video: thermalVideo,
    },
    {
      title: 'EV Fires in Enclosed Spaces',
      text: 'Fires release heat and toxic smoke that can weaken structures and force evacuation.',
      button: 'EV Fires in Car Parks',
      video: thermalVideo,
    },
    {
      title: 'About Electric Vehicles',
      text: 'Modern EVs use high-capacity lithium-ion batteries. Understanding fire risks and response is vital for safety personnel.',
      button: 'About EV Vehicles',
      video: thermalVideo,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(contentItems[0]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playContentAt = (index: number) => {
    const content = contentItems[index];
    setActiveIndex(index);
    setCurrentContent(content);

    if (videoRef.current) {
      videoRef.current.classList.add('fading');
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.src = content.video;
          videoRef.current.load();
          videoRef.current.classList.remove('fading');
          videoRef.current.play().catch(() => {});
        }
      }, 500);
    }
  };

  return (
    <Container>
      <Frame>
        <BackButton onClick={() => navigate('/')}>
          <img src={backIcon} alt="Back" />
        </BackButton>

        {/* ✅ Logo perfectly centered and spaced */}
        <LogoContainer>
          <Logo src={logo} alt="EV Fire Protection" />
        </LogoContainer>

        <Grid>
          <LeftCard>
            <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>
              {currentContent.title}
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(255,255,255,0.88)' }}>
              {currentContent.text}
            </p>
          </LeftCard>

          <VideoWrapper>
            <StyledVideo ref={videoRef} src={currentContent.video} autoPlay loop muted playsInline />
          </VideoWrapper>

          <RightColumn>
            {contentItems.map((item, i) => (
              <SideButton
                key={item.button}
                onClick={() => playContentAt(i)}
                style={i === activeIndex ? { color: '#2d4148ff', fontWeight: 700 } : undefined}
              >
                {item.button}
              </SideButton>
            ))}
          </RightColumn>
        </Grid>
      </Frame>
    </Container>
  );
};

export default Understanding;
