import { Stack } from '@mui/material';
import ButtonSend from './components/buttonSend';
import CpfInput from './components/cpfInput';
import { useNavigate } from 'react-router-dom';
import useRegisterCpf from '../store/useRegisterCpfStore';
import AlertDialog from './components/dialogs';
import { useState } from 'react';
import isValidCpf from '../utils/validCpf';

export default function RegisterCpf() {
  const navigate = useNavigate();
  const cpf = useRegisterCpf((state) => state.cpfUser);
  const [showAlert, setShowALert] = useState(false);

  const handleClick = () => {
    if (cpf !== '' && isValidCpf(cpf)) {
      navigate('/Comment');
    } else {
      setShowALert(true);
      setTimeout(() => {
        setShowALert(false);
      }, 4000);
    }
  };

  return (
    <Stack sx={{ gap: 4, alignItems: 'center', paddingTop: 8 }}>
      <CpfInput></CpfInput>
      {showAlert && (
        <AlertDialog text={'Por favor, Digite um CPF válido!'}></AlertDialog>
      )}

      <ButtonSend
        text={'Enviar'}
        color={'#cca926'}
        onClick={() => {
          handleClick();
        }}
        fontSize={'30px'}
      ></ButtonSend>
    </Stack>
  );
}
