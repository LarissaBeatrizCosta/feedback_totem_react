import { useNavigate } from "react-router-dom";
import useRatingStore from "../store/useRatingStore";
import useRegisterCpf from "../store/useRegisterCpfStore";
import useStarsStore from "../store/useStarsStore";
import useCommentStore from "../store/useCommentStore";

export default function useResetRatings() {
  const navigate = useNavigate();
  const setRating = useRatingStore((state) => state.setRecommendationRating);
  const setEnvironment = useStarsStore((state) => state.setStarEnvironmentRating);
  const setCollaborator = useStarsStore((state) => state.setStarCollaboratorRating);
  const setTime = useStarsStore((state) => state.setStarTimeRating);
  const setCpf = useRegisterCpf((state) => state.setCpf);
  const setComment = useCommentStore((state) => state.setComment);

  return () => {
    setRating(null);
    setEnvironment(null);
    setCollaborator(null);
    setTime(null);
    setCpf("");
    setComment("");
    navigate("/");
  };
}
