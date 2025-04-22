import { Stack } from '@mui/material';
import smallImage from '../../../assets/images/desenho.png';
import logoImage from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import bg from '../../../assets/images/bg.png';

const ImageBackground = ({ showLogo = true, children }) => {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={bg}
        alt="bg"
        style={{
          position: 'absolute',
          zIndex: -2,
          width: '100%',
          height: '100%',
        }}
      />

      {showLogo && (
        <img
          src={logoImage}
          alt="Logo"
          style={{
            position: 'absolute',
            zIndex: 0,
            height: '15%',
            top: '5%',
          }}
        />
      )}

      <img
        onDoubleClick={() => {
          navigate('/Login');
        }}
        src={smallImage}
        alt="simbolo"
        style={{
          position: 'absolute',
          width: '190px',
          height: '160px',
          right: '0',
          top: '0',
        }}
      />

      {children}
    </Stack>
  );
};

export default ImageBackground;
