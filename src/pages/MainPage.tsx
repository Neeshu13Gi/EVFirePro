import { styled } from '@mui/material';
import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import logo from '../assets/images/EVlogo.png';
import suppressionImg from '../assets/images/ev fire pro.png';
import batteryFireImg from '../assets/images/EV fire.png';

import featuresImg from '../assets/images/EV Features.png';
import understandingImg from '../assets/images/understanding.png';
import backIcon from '../assets/images/back.png';
import titleButton from '../assets/images/title_Button.png';
import thermalVideo from '../assets/videos/thermalRunaway.mp4';
import OccupantWarning from '../assets/videos/Occupant warning system.mp4';
import './UnderstandingSection.css';
import styles from './Features.module.css';




const Container = styled('div')({
  width: '100%',
  height: '100vh', // always full screen height
  display: 'flex',
  justifyContent: 'center', // center horizontally
  alignItems: 'center', // center vertically
  backgroundColor: '#0d111c',
  padding: 'clamp(8px, 2vw, 24px)',
  boxSizing: 'border-box',
   overflowY: 'auto', // allows scroll if content overflows
  '@media (max-height: 500px)': {
    height: 'auto', // allows scroll if screen is extremely short
    minHeight: '100vh',
    overflowY: 'auto',
  },
});

const Frame = styled('div')({
  width: 'min(1200px, 95vw)',
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
  margin: 'auto', // ensures centering even with scroll
  '@media (max-width: 768px)': {
    width: '95vw',
    minHeight: 'auto',
    padding: 'clamp(16px, 4vw, 28px)',
  },
  '@media (orientation: landscape) and (max-height: 600px)': {
    minHeight: '90vh',
    justifyContent: 'center',
  },
});

const LogoContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '-45px', // moved down from -85px
    marginBottom: '1px',
    '@media (max-width: 600px)': {
        marginTop: '-30px',
    },
});
const Logo = styled('img')({
    width: 'clamp(140px, 30vw, 360px)',
    maxWidth: '95%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    marginBottom: 'clamp(20px, 1vh, 1px)',
});
const ButtonContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(260px, 1fr))',
    gap: 'clamp(24px, 3vw, 45px)',
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

// ...other styled components for video, cards, etc. will be added as needed


// --- Understanding Section Logic ---
const understandingContent = [
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

// --- Features Section Logic ---
const featuresContent = [
    { title: 'Stainless Steel Construction', text: '3mm (0.12 in.) 304 stainless steel construction with 316 marine grade stainless steel available for harsher environments.', button: 'Stainless Steel Construction', video: thermalVideo },
    { title: 'Low Profile Design', text: 'Compact and sleek design that integrates seamlessly into parking facilities while maintaining maximum effectiveness.', button: 'Low-profile Design', video: thermalVideo },
    { title: 'Retrofit or New Build', text: 'Flexible installation options suitable for both existing structures and new construction projects.', button: 'Retrofit or New Build', video: thermalVideo },
    { title: 'Automatic Activation', text: 'Advanced sensors and monitoring systems for immediate response to thermal events.', button: 'Automatic Activation', video: thermalVideo },
    { title: 'Vertical Spray Cooling', text: 'Strategic vertical spray pattern designed to effectively cool and suppress EV battery fires.', button: 'Vertical Spray Cooling', video: thermalVideo },
    { title: 'Lateral Water Spray', text: 'Comprehensive coverage with lateral water spray ensures complete protection of the affected area.', button: 'Lateral Water Spray', video: thermalVideo },
    { title: 'Building System Integration', text: 'Seamlessly connects with existing building fire systems for coordinated emergency response.', button: 'Building System Integration', video: thermalVideo },
    { title: 'Occupant Warning System', text: 'Built-in warning system to alert occupants and facilitate safe evacuation procedures.', button: 'Occupant Warning', video: OccupantWarning },
    { title: 'Dry Pipework', text: 'Advanced dry pipe system design to prevent corrosion and ensure long-term reliability.', button: 'Dry Pipework', video: thermalVideo },
];

const MainPage = () => {
    const [section, setSection] = useState<'home' | 'understanding' | 'features' | 'suppression' | 'batteryfire'>('home');

    // For Understanding
    const [understandingIdx, setUnderstandingIdx] = useState(0);
    const understandingVideoRef = useRef<HTMLVideoElement>(null);

    // For Features
    const [featuresIdx, setFeaturesIdx] = useState(0);
    const featuresVideoRef = useRef<HTMLVideoElement>(null);

    // --- Section Renderers ---
    if (section === 'home') {
        return (
            <Container>
                <Frame>
                    <LogoContainer>
                        <Logo src={logo} alt="EV Fire Protection" />
                    </LogoContainer>
                    <ButtonContainer>
                        <Button text="" onClick={() => setSection('suppression')} imageSrc={suppressionImg} />
                        <Button text="" onClick={() => setSection('batteryfire')} imageSrc={batteryFireImg} />
                        <Button text="" onClick={() => setSection('features')} imageSrc={featuresImg} />
                        <Button text="" onClick={() => setSection('understanding')} imageSrc={understandingImg} />
                    </ButtonContainer>
                </Frame>
            </Container>
        );
    }

    // --- Suppression Section ---
    if (section === 'suppression') {
        return (
            <Container>
                <Frame>
                    <LogoContainer>
                        <Logo src={logo} alt="EV Fire Protection" />
                        <button style={{ position: 'absolute', top: 21, right: 18, padding: '4px 6px', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 20 }} onClick={() => setSection('home')} aria-label="Back to Home">
                            <img src={backIcon} alt="Back" style={{ width: 'clamp(20px, 4vw, 34px)', height: 'auto', display: 'block', pointerEvents: 'none' }} />
                        </button>
                    </LogoContainer>
                    <div style={{ width: 'min(900px,92%)', maxWidth: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.6)', borderRadius: 20, border: '2px solid rgba(255,255,255,0.95)', boxShadow: '0 6px 18px rgba(0,0,0,0.55)', overflow: 'hidden', marginTop: 35 }}>
                        <video controls
                            src={thermalVideo}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, display: 'block' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </Frame>
            </Container>
        );
    }

    // --- Battery Fire Section ---
    if (section === 'batteryfire') {
        return (
            <Container>
                <Frame>
                    <LogoContainer>
                        <Logo src={logo} alt="EV Fire Protection" />
                        <button style={{ position: 'absolute', top: 21, right: 18, padding: '4px 6px', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 20 }} onClick={() => setSection('home')} aria-label="Back to Home">
                            <img src={backIcon} alt="Back" style={{ width: 'clamp(20px, 4vw, 34px)', height: 'auto', display: 'block', pointerEvents: 'none' }} />
                        </button>
                    </LogoContainer>
                    <div style={{ width: 'min(900px,92%)', maxWidth: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.6)', borderRadius: 20, border: '2px solid rgba(255,255,255,0.95)', boxShadow: '0 6px 18px rgba(0,0,0,0.55)', overflow: 'hidden', marginTop: 35 }}>
                        <video controls
                            src={thermalVideo}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, display: 'block' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </Frame>
            </Container>
        );
    }

   // --- Features Section ---
if (section === 'features') {
  const current = featuresContent[featuresIdx];
  return (
    <Container>
      <Frame>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresFrame}>
            {/* === Logo + Back === */}
            <LogoContainer>
              <Logo src={logo} alt="EV Fire Protection" />
              <button
                style={{
                  position: 'absolute',
                  top: 21,
                  right: 18,
                  padding: '4px 6px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  zIndex: 20,
                }}
                onClick={() => setSection('home')}
                aria-label="Back to Home"
              >
                <img
                  src={backIcon}
                  alt="Back"
                  style={{
                    width: 'clamp(20px, 4vw, 34px)',
                    height: 'auto',
                    display: 'block',
                    pointerEvents: 'none',
                  }}
                />
              </button>
            </LogoContainer>

            {/* === Video + Buttons Layout === */}
            <div className={styles.featuresTop}>
              {/* Video Section */}
              <div className={styles.videoBoxFeatures}>
                <video controls
                  ref={featuresVideoRef}
                  src={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Buttons Section */}
              <div className={styles.buttonListFeatures}>
                {featuresContent.map((item, i) => (
                  <button
                    key={item.button}
                    className={`${styles.titleButtonFeatures} ${
                      i === featuresIdx ? styles.active : ''
                    }`}
                    style={{
                      background: `url(${titleButton}) no-repeat center center`,
                      backgroundSize: '100% 100%',
                    }}
                    onClick={() => setFeaturesIdx(i)}
                  >
                    {item.button}
                  </button>
                ))}
              </div>
            </div>

            {/* === Description Section === */}
            <div className={styles.featuresText}>
              <h2>{current.title}</h2>
              <p>{current.text}</p>
            </div>
          </div>
        </div>
      </Frame>
    </Container>
  );
}


    // --- Understanding Section ---
 
if (section === 'understanding') {
  const current = understandingContent[understandingIdx];

    return (
        <Container>
            <Frame>
                <LogoContainer>
                        <Logo src={logo} alt="EV Fire Protection" />
                        <button style={{ position: 'absolute', top: 21, right: 18, padding: '4px 6px', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 20 }} onClick={() => setSection('home')} aria-label="Back to Home">
                            <img src={backIcon} alt="Back" style={{ width: 'clamp(20px, 4vw, 34px)', height: 'auto', display: 'block', pointerEvents: 'none' }} />
                        </button>
                    </LogoContainer>
                 
                <div className="understanding-top">
                    <div className="video-box">
                        <video controls
                             className="videoPlayer"
                            ref={understandingVideoRef}
                            src={current.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                    </div>
                    <div className="button-list">
                        {understandingContent.map((item, i) => (
                            <button
                                key={item.button}
                                className={`title-button ${i === understandingIdx ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${titleButton})` }}
                                onClick={() => understandingIdx !== i && setUnderstandingIdx(i)}
                            >
                                {item.button}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="understanding-text">
                    <h2>{current.title}</h2>
                    <p>{current.text}</p>
                </div>
            </Frame>
        </Container>
    );
}

    // fallback
    return null;
};

export default MainPage;
