import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonSend from './components/buttonSend';
import useRatingStore from '../store/useStarsStore';
import { useState } from 'react';
import AlertDialog from './components/dialogs';
import StarRate from './components/starRate';

export default function StarRating() {
  const navigation = useNavigate();

  const environmentRating = useRatingStore(
    (state) => state.starEnvironmentRating
  );
  const collaboratorRating = useRatingStore(
    (state) => state.starCollaboratorRating
  );
  const timeRating = useRatingStore((state) => state.starTimeRating);

  const setEnvironmentRating = useRatingStore(
    (state) => state.setStarEnvironmentRating
  );
  const setCollaboratorRating = useRatingStore(
    (state) => state.setStarCollaboratorRating
  );
  const setTimeRating = useRatingStore((state) => state.setStarTimeRating);

  const [showAlert, setShowALert] = useState(false);

  const handleClick = () => {
    if (
      environmentRating !== null &&
      collaboratorRating !== null &&
      timeRating !== null
    ) {
      navigation('/UserCpf');
    } else {
      setShowALert(true);
      setTimeout(() => {
        setShowALert(false);
      }, 4000);
    }
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Typography sx={{ typography: 'h1' }}>
        Ambiente do Posto de Atendimento
      </Typography>
      <StarRate value={environmentRating} onStarClick={setEnvironmentRating} />

      <Typography sx={{ typography: 'h1' }}>
        Atendimento dos colaboradores
      </Typography>
      <StarRate value={collaboratorRating} onStarClick={setCollaboratorRating} />

      <Typography sx={{ typography: 'h1' }}>Tempo de Espera</Typography>
      <StarRate value={timeRating} onStarClick={setTimeRating} />

      {showAlert && (
        <AlertDialog text={'Escolha uma nota de 1 a 5'}></AlertDialog>
      )}

      <ButtonSend
        text={'Enviar'}
        color="#cca926"
        onClick={() => {
          handleClick();
        }}
        fontSize={'30px'}
      />
    </Stack>
  );
}
