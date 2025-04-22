import RateService from '../services/ratesService';
import RateModel from '../models/rate';
import { useNavigate } from 'react-router-dom';
import useStarsStore from '../store/useStarsStore';
import useRatingStore from '../store/useRatingStore';
import useRegisterCpf from '../store/useRegisterCpfStore';
import useTotalRatings from '../store/useTotalRatingsStore';
import useCommentStore from '../store/useCommentStore';

export default function useSaveRate() {
  const navigate = useNavigate();
  const setListRatings = useTotalRatings((state) => state.setTotalRatingsList);
  const rating = useRatingStore((state) => state.recommendationRating);
  const starEnvironment = useStarsStore((state) => state.starEnvironmentRating);
  const starCollaborator = useStarsStore(
    (state) => state.starCollaboratorRating
  );
  const starTime = useStarsStore((state) => state.starTimeRating);
  const cpf = useRegisterCpf((state) => state.cpfUser);
  const comment = useCommentStore((state) => state.comment);

  const saveRate = async () => {
    const finalRating = new RateModel({
      recommendation: rating,
      location: starEnvironment,
      collaborator: starCollaborator,
      time: starTime,
      comment,
      cpf,
    });

    try {
      const success = await RateService.createRate(finalRating);
      if (success) {
        setListRatings(finalRating);
        navigate('/Feedback');
      }
    } catch (error) {
      console.error('Erro ao salvar a avaliação', error);
    }
  };

  return saveRate;
}
