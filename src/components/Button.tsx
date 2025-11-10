import { Button as MuiButton, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: 'inherit',
  padding: 0,
  borderRadius: 0,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  margin: '10px',
  width: '100%',
  maxWidth: '360px',
  textTransform: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  minHeight: '120px',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '260px',
    minHeight: '100px',
    margin: '8px',
  },
}));

const ButtonImage = styled('img')(({ theme }) => ({
  width: '80%',
  maxWidth: '320px',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '5px',
  [theme.breakpoints.down('sm')]: {
    width: '70%',
    maxWidth: '220px',
  },
}));

interface CustomButtonProps {
  text?: string;
  onClick: () => void;
  imageSrc?: string;
  hideText?: boolean;
}

export const Button = ({ text, onClick, imageSrc, hideText }: CustomButtonProps) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {imageSrc && <ButtonImage src={imageSrc} alt={text} />}
      {!hideText && text && <span>{text}</span>}
    </StyledButton>
  );
};