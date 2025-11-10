import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Suppression from './pages/Suppression';
import BatteryFire from './pages/BatteryFire';
import Features from './pages/Features';
import Understanding from './pages/Understanding';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppression" element={<Suppression />} />
          <Route path="/battery-fire" element={<BatteryFire />} />
          <Route path="/features" element={<Features />} />
          <Route path="/understanding" element={<Understanding />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
