import { Box, Stack, Typography } from '@mui/material';
import ButtonSend from './components/buttonSend';
import { useNavigate } from 'react-router-dom';
import useSaveRate from '../hooks/useSaveRate';

export default function UserCpf() {
  const navigate = useNavigate();
  const saveRate = useSaveRate();

  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography sx={{ typography: 'h0', paddingBottom: 4 }}>
        Gostaria de informar o seu CPF?
      </Typography>
      <Box sx={{ display: 'flex', gap: 8 }}>
        <ButtonSend
          text={'Sim'}
          height={'80%'}
          onClick={() => {
            navigate('/RegisterCpf');
          }}
          fontSize={'40px'}
          color={'#4CAF50'}
        ></ButtonSend>
        <ButtonSend
          text={'Não'}
          onClick={saveRate}
          height={'80%'}
          fontSize={'40px'}
          color={'#FFA726'}
        ></ButtonSend>
      </Box>
    </Stack>
  );
}
