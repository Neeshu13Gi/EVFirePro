// /*  src/pages/Understanding.tsx  */
// import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import { useRef, useState, useEffect } from 'react';
// import thermalVideo from '../assets/videos/thermalRunaway.mp4';
// import backImg from '../assets/images/back.png';
// import titleButton from '../assets/images/title_Button.png';
// import logo from '../assets/images/EVlogo.png';

// /* ──────────────────────  Styled Components  ────────────────────── */
// const Container = styled('div')({
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#0d111c',
//   padding: 'clamp(12px, 2vw, 24px)',
//   boxSizing: 'border-box',
//   overflow: 'hidden',
//   position: 'relative',
// });

// const Frame = styled('div')({
//   width: 'min(1200px, 96vw)',
//   maxWidth: '1500px',
//   minHeight: 'min(82vh, 720px)',
//   background: 'rgba(255,255,255,0.03)',
//   border: '1px solid rgba(255,255,255,0.08)',
//   borderRadius: '16px',
//   padding: 'clamp(16px, 3vw, 36px)',
//   boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   position: 'relative',
//   overflow: 'hidden',
//   gap: 'clamp(12px, 2vh, 20px)',
//   '@media (max-width: 768px)': {
//     minHeight: 'auto',
//     padding: 'clamp(12px, 4vw, 24px)',
//     borderRadius: '12px',
//   },
// });

// const Header = styled('div')({
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
//   padding: 'clamp(8px, 2vh, 16px) 0',
//   minHeight: '50px',
// });

// const Logo = styled('img')({
//   width: 'clamp(100px, 16vw, 200px)',
//   height: 'auto',
//   objectFit: 'contain',
// });

// const BackButton = styled('button')({
//   position: 'absolute',
//   top: '50%',
//   right: '8px',
//   transform: 'translateY(-50%)',
//   padding: '8px',
//   border: 'none',
//   background: 'transparent',
//   cursor: 'pointer',
//   zIndex: 20,
//   borderRadius: '50%',
//   transition: 'background 0.2s',
//   '&:hover': {
//     background: 'rgba(255,255,255,0.1)',
//   },
//   '@media (max-width: 600px)': {
//     right: '4px',
//     padding: '6px',
//   },
// });

// const BackIcon = styled('img')({
//   width: 'clamp(20px, 5vw, 32px)',
//   height: 'auto',
//   display: 'block',
// });

// /* Video + Buttons Row */
// const ContentRow = styled('div')({
//   display: 'flex',
//   gap: 'clamp(16px, 2vw, 24px)',
//   width: '100%',
//   flex: 1,
//   minHeight: 0,
//   '@media (max-width: 900px)': {
//     flexDirection: 'column',
//     gap: '12px',
//   },
// });

// const VideoContainer = styled('div')({
//   flex: '2 1 600px',
//   minWidth: '280px',
//   borderRadius: '20px',
//   overflow: 'hidden',
//   background: '#000',
//   boxShadow: '0 0 20px rgba(255,255,255,0.15)',
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '@media (max-width: 900px)': {
//     flex: '1 1 auto',
//     borderRadius: '16px',
//     maxHeight: '45vh',
//   },
//   '@media (max-width: 600px)': {
//     borderRadius: '12px',
//     maxHeight: '38vh',
//   },
// });

// const StyledVideo = styled('video')({
//   width: '100%',
//   height: '100%',
//   objectFit: 'contain',
//   background: '#000',
//   transition: 'opacity 0.5s ease-in-out',
//   '&.fading': { opacity: 0 },
// });

// /* Side Buttons Panel */
// const ButtonPanel = styled('div')({
//   flex: '0 0 220px',
//   display: 'grid',
//   gridTemplateColumns: '1fr',
//   gap: '-10px',
//   minWidth: '180px',
//   '@media (max-width: 900px)': {
//     flex: '0 0 auto',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '8px',
//   },
//   '@media (max-width: 600px)': {
//     gridTemplateColumns: '1fr',
//     gap: '6px',
//   },
// });

// const SideBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
//   background: `url(${titleButton}) no-repeat center center`,
//   backgroundSize: '100% 100%',
//   color: active ? '#2d4148' : 'rgba(255,255,255,0.95)',
//   fontWeight: active ? 700 : 500,
//   border: 'none',
//   width: '100%',
//   height: 'clamp(36px, 8vw, 48px)',
//   minHeight: '36px',
//   cursor: 'pointer',
//   fontSize: 'clamp(10px, 2.2vw, 13px)',
//   borderRadius: '4px',
//   transition: 'all 0.25s ease',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   padding: '0 8px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//   '&:hover': {
//     color: '#2d4148',
//     transform: 'scale(1.05)',
//   },
//   '&:active': {
//     transform: 'scale(0.98)',
//   },
//   '@media (max-width: 900px)': {
//     fontSize: 'clamp(9px, 2vw, 11px)',
//     height: 'clamp(32px, 7vw, 40px)',
//   },
//   '@media (max-width: 600px)': {
//     height: 'clamp(36px, 9vw, 44px)',
//     fontSize: 'clamp(10px, 2.5vw, 12px)',
//   },
// }));

// /* Text Card - Moved UP */
// const TextCard = styled('div')({
//   background: 'rgba(255,255,255,0.04)',
//   border: '1px solid rgba(255,255,255,0.10)',
//   borderRadius: '12px',
//   padding: 'clamp(16px, 3vw, 24px)',
//   color: '#fff',
//   width: '100%',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
//   textAlign: 'center',
//   marginTop: 'auto',
//   '@media (max-width: 600px)': {
//     padding: '12px 10px',
//     borderRadius: '8px',
//   },
// });

// const CardTitle = styled('h2')({
//   fontSize: 'clamp(15px, 3vw, 18px)',
//   fontWeight: 600,
//   marginBottom: '10px',
//   '@media (max-width: 600px)': {
//     marginBottom: '8px',
//   },
// });

// const CardText = styled('p')({
//   fontSize: 'clamp(12px, 2.2vw, 14px)',
//   lineHeight: 1.6,
//   color: 'rgba(255,255,255,0.88)',
// });

// /* ──────────────────────  Data  ────────────────────── */
// const contentItems = [
//   {
//     title: 'What is thermal runaway?',
//     text: 'A self-sustaining chemical reaction in a lithium-ion cell — often triggered by battery damage, overcharging, or a fault — that overheats and ignites surrounding cells.',
//     button: 'Thermal Runaway',
//     video: thermalVideo,
//   },
//   {
//     title: 'What are toxic gases in EV fires?',
//     text: 'Burning batteries release: • Hydrogen fluoride (HF) • Carbon monoxide (CO) • Carbon dioxide (CO2) • Methane (CH4) • Hydrogen (H2) and other toxic vapours creating life-threatening risks for responders.',
//     button: 'Toxic Gases',
//     video: thermalVideo,
//   },
//   {
//     title: 'Understanding Deflagration',
//     text: 'Deflagration occurs when battery cells rapidly release stored energy, causing explosive combustion — requiring specialized suppression techniques.',
//     button: 'Deflagration',
//     video: thermalVideo,
//   },
//   {
//     title: 'Intense Jet-like Flames',
//     text: 'Fires can eject jet flames over 1,000°C sideways – igniting vehicles and damaging nearby structures.',
//     button: 'Jet-like Flames',
//     video: thermalVideo,
//   },
//   {
//     title: 'EV Fires in Enclosed Spaces',
//     text: 'Fires release heat and toxic smoke that can weaken structures and force evacuation.',
//     button: 'EV Fires in Car Parks',
//     video: thermalVideo,
//   },
//   {
//     title: 'About Electric Vehicles',
//     text: 'Modern EVs use high-capacity lithium-ion batteries. Understanding fire risks and response is vital for safety personnel.',
//     button: 'About EV Vehicles',
//     video: thermalVideo,
//   },
// ];

// /* ──────────────────────  Component  ────────────────────── */
// const Understanding = () => {
//   const navigate = useNavigate();
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [current, setCurrent] = useState(contentItems[0]);

//   const switchTo = (idx: number) => {
//     if (idx === activeIdx) return;
//     const item = contentItems[idx];
//     setActiveIdx(idx);
//     setCurrent(item);

//     if (videoRef.current) {
//       videoRef.current.classList.add('fading');
//       setTimeout(() => {
//         if (videoRef.current) {
//           videoRef.current.src = item.video;
//           videoRef.current.load();
//           videoRef.current.classList.remove('fading');
//           videoRef.current.play().catch(() => {});
//         }
//       }, 500);
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.src = contentItems[0].video;
//       videoRef.current.load();
//     }
//   }, []);

//   return (
//     <Container>
//       <Frame>
//         <Header>
//           <Logo src={logo} alt="EV Fire Protection" />
//           <BackButton onClick={() => navigate('/')} aria-label="Back to Home">
//             <BackIcon src={backImg} alt="" />
//           </BackButton>
//         </Header>

//         {/* Video + Buttons */}
//         <ContentRow>
//           <VideoContainer>
//             <StyledVideo
//               ref={videoRef}
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="auto"
//             />
//           </VideoContainer>

//           <ButtonPanel>
//             {contentItems.map((it, i) => (
//               <SideBtn
//                 key={it.button}
//                 active={i === activeIdx}
//                 onClick={() => switchTo(i)}
//                 aria-pressed={i === activeIdx}
//               >
//                 {it.button}
//               </SideBtn>
//             ))}
//           </ButtonPanel>
//         </ContentRow>

//         {/* Text Card - Now closer to content */}
//         <TextCard>
//           <CardTitle>{current.title}</CardTitle>
//           <CardText>{current.text}</CardText>
//         </TextCard>
//       </Frame>
//     </Container>
//   );
// };

// export default Understanding;

export {};