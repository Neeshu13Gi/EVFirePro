import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import backIcon from '../assets/images/back.png';
import titleButton from '../assets/images/title_Button.png';
import logo from '../assets/images/EVlogo.png';

// ========== Styled Components ==========

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1f2e',
  padding: 'clamp(16px, 3vw, 40px)',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
});

const Frame = styled('div')({
  width: 'min(1100px, 95vw)',
  height: 'min(700px, 90vh)',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '16px',
  padding: 'clamp(18px, 3vw, 32px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
});

const LogoContainer = styled('div')({
  position: 'absolute',
  top: '14px',
  left: '24px',
  width: 'clamp(100px, 15vw, 180px)',
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
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

const GridLayout = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1.3fr 0.9fr',
  gap: 'clamp(20px, 2vw, 28px)',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  marginTop: 'clamp(32px, 5vh, 40px)',
  boxSizing: 'border-box',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gridAutoRows: 'auto',
    marginTop: '24px',
  },
});

const LeftCard = styled('div')({
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '16px',
  padding: 'clamp(20px, 3vh, 28px)',
  border: '2px solid rgba(255,255,255,0.15)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '380px',
  maxWidth: '340px',
  color: '#fff',
  lineHeight: 1.6,
  '@media (max-width: 900px)': {
    width: '95%',
    textAlign: 'center',
    margin: '0 auto',
    minHeight: 'auto',
    padding: '16px 12px',
  },
});

const ImageWrapper = styled('div')({
  borderRadius: '16px',
  overflow: 'hidden',
  border: '2px solid rgba(255,255,255,0.15)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '380px',
  maxWidth: '600px',
  height: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  '@media (max-width: 900px)': {
    width: '95%',
    margin: '0 auto',
    minHeight: '240px',
  },
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
  transition: 'opacity 0.4s ease-in-out',
  opacity: 1,
  '&.fading': { opacity: 0 },
});

const RightColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  minHeight: '380px',
  maxWidth: '220px',
  margin: 'auto',
  boxSizing: 'border-box',
  marginTop: '10px',
  marginBottom: '10px',
  marginLeft: '10px',
  marginRight: '10px',
  '@media (max-width: 900px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    minHeight: 'auto',
  },
});

const SideButton = styled('button')({
  background: `url(${titleButton}) no-repeat center center`,
  backgroundSize: '100% 100%',
  color: 'rgba(255,255,255,0.95)',
  border: 'none',
  width: '100%',
  maxWidth: '220px',
  height: '48px',
  borderRadius: '24px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.25s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  '&:hover': {
    color: '#2d4148ff',
    transform: 'scale(1.05)',
  },
  '@media (max-width: 900px)': {
    width: '45%',
    minWidth: '130px',
  },
});

// ========== Component ==========

const Features = () => {
  const navigate = useNavigate();

  const contentItems = [
    {
      title: 'Stainless Steel Construction',
      text: '3mm (0.12 in.) 304 stainless steel construction with 316 marine grade stainless steel available for harsher environments.',
      button: 'Stainless Steel Construction',
      image: '/features/construction.png'
    },
    {
      title: 'Low Profile Design',
      text: 'Compact and sleek design that integrates seamlessly into parking facilities while maintaining maximum effectiveness.',
      button: 'Low-profile Design',
      image: '/features/design.png'
    },
    {
      title: 'Retrofit or New Build',
      text: 'Flexible installation options suitable for both existing structures and new construction projects.',
      button: 'Retrofit or New Build',
      image: '/features/installation.png'
    },
    {
      title: 'Automatic Activation',
      text: 'Advanced sensors and monitoring systems for immediate response to thermal events.',
      button: 'Automatic Activation',
      image: '/features/activation.png'
    },
    {
      title: 'Vertical Spray Cooling',
      text: 'Strategic vertical spray pattern designed to effectively cool and suppress EV battery fires.',
      button: 'Vertical Spray Cooling',
      image: '/features/cooling.png'
    },
    {
      title: 'Lateral Water Spray',
      text: 'Comprehensive coverage with lateral water spray ensures complete protection of the affected area.',
      button: 'Lateral Water Spray',
      image: '/features/spray.png'
    },
    {
      title: 'Building System Integration',
      text: 'Seamlessly connects with existing building fire systems for coordinated emergency response.',
      button: 'Building System Integration',
      image: '/features/integration.png'
    },
    {
      title: 'Occupant Warning System',
      text: 'Built-in warning system to alert occupants and facilitate safe evacuation procedures.',
      button: 'Occupant Warning',
      image: '/features/warning.png'
    },
    {
      title: 'Dry Pipework',
      text: 'Advanced dry pipe system design to prevent corrosion and ensure long-term reliability.',
      button: 'Dry Pipework',
      image: '/features/pipework.png'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [currentContent, setCurrentContent] = useState(contentItems[0]);

  const showContentAt = (index: number) => {
    setActiveIndex(index);
    const content = contentItems[index];
    if (imageRef.current) {
      imageRef.current.classList.add('fading');
      setTimeout(() => {
        setCurrentContent(content);
        imageRef.current?.classList.remove('fading');
      }, 300);
    } else {
      setCurrentContent(content);
    }
  };

  return (
    <Container>
      <Frame>
        <LogoContainer>
          <img src={logo} alt="EVFirePro Logo" />
        </LogoContainer>

        <BackButton onClick={() => navigate('/')}>
          <img src={backIcon} alt="Back to home" />
        </BackButton>

        <GridLayout>
          <LeftCard>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>
              {currentContent.title}
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              {currentContent.text}
            </p>
          </LeftCard>

          <ImageWrapper>
            <StyledImage ref={imageRef} src={currentContent.image} alt={currentContent.title} />
          </ImageWrapper>

          <RightColumn>
            {contentItems.map((item, i) => (
              <SideButton
                key={item.button}
                onClick={() => showContentAt(i)}
                style={i === activeIndex ? { color: '#2d4148ff', fontWeight: 700 } : undefined}
              >
                {item.button}
              </SideButton>
            ))}
          </RightColumn>
        </GridLayout>
      </Frame>
    </Container>
  );
};

export default Features;
