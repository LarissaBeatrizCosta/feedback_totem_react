import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonSend from './components/buttonSend';
import NumeredBoxList from './components/numeredList';
import useRatingStore from '../store/useRatingStore';
import AlertDialog from './components/dialogs';
import { useState } from 'react';

function Home() {
  const navigation = useNavigate();
  const recommendationRating = useRatingStore(
    (state) => state.recommendationRating
  );
  const setRecommendationRating = useRatingStore(
    (state) => state.setRecommendationRating
  );

  const [showAlert, setShowALert] = useState(false);

  const handleClick = () => {
    recommendationRating !== null
      ? navigation('/StarRating')
      : setShowALert(true);
  };

  setTimeout(() => {
    setShowALert(false);
  }, 4000);

  return (
    <Stack>
      <Typography
        sx={{
          paddingTop: 20,
          typography: 'h1',
          textAlign: 'start',
          paddingBottom: 4,
          paddingLeft: 4,
        }}
      >
        Em uma escala de 0 a 10 o quanto você indicaria a experiência de hoje
        para amigos e familiares?
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          typography: 'h2',
          justifyContent: 'center',
        }}
      >
        <NumeredBoxList onSelect={setRecommendationRating} />
      </Stack>

      {showAlert && <AlertDialog text={'Escolha um valor'}></AlertDialog>}

      <Stack sx={{ alignItems: 'center', paddingTop: 20 }}>
        <ButtonSend
          text={'Enviar'}
          color="rgba(25, 118, 210)"
          fontSize={'30px'}
          onClick={() => {
            handleClick();
          }}
        ></ButtonSend>
      </Stack>
    </Stack>
  );
}
export default Home;
