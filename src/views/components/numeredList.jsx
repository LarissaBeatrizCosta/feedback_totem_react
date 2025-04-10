import NumeredBox from "../components/numeredBox";
import useRatingStore from "../../store/useRatingStore";

function NumeredBoxList() {
  const { rating, setRating } = useRatingStore();

  const handleClick = (number) => {
    setRating(number);
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <NumeredBox
          number={number}
          isSelected={rating === number}
          onClick={() => handleClick(number)}
        />
      ))}
    </>
  );
}

export default NumeredBoxList;
