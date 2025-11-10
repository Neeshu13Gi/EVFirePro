import React from 'react';
import { styled } from '@mui/material';

interface IPadFrameProps {
  children?: React.ReactNode;
  className?: string;
  width?: string; // outer width override
}

const Outer = styled('div')<{ $width?: string }>(({ $width }) => ({
  width: $width || 'min(920px, 92vw)',
  padding: '20px',
  borderRadius: '28px',
  background: '#1c1c1e',
  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
  border: '2px solid rgba(255,255,255,0.04)',
  margin: '12px auto',
  boxSizing: 'border-box',
}));

const Screen = styled('div')({
  width: 'min(820px, 92%)',
  margin: '0 auto',
  borderRadius: '18px',
  overflow: 'hidden',
  background: '#000',
  boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.03)',
});

const IPadFrame: React.FC<IPadFrameProps> = ({ children, className, width }) => {
  return (
    <Outer $width={width} className={className}>
      <Screen>{children}</Screen>
    </Outer>
  );
};

export default IPadFrame;