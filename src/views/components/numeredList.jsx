import NumeredBox from '../components/numeredBox';
import useRatingStore from '../../store/useRatingStore';

function NumeredBoxList() {
  const { recommendationRating, setRecommendationRating: setRecommendationRating } = useRatingStore();

  const handleClick = (selectedRating) => {
    setRecommendationRating(selectedRating);
  };

  return (
    <>
      {[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <NumeredBox
          key={num}
          number={num}
          isSelected={recommendationRating === num}
          onClick={() => handleClick(num)}
        />
      ))}
    </>
  );
}

export default NumeredBoxList;
