import NumeredBox from "../components/numeredBox";
import useRatingStore from "../../store/useRatingStore";

/**
 * NumeredBoxList renders a row of boxes with numbers from 1 to 10. The component
 * uses the `useRatingStore` hook to get the current rating and the
 * `setSelectedRating` function to update the rating when a box is clicked.
 *
 * @returns {JSX.Element} A row of boxes with numbers from 1 to 10.
 */
function NumeredBoxList() {
  const { rating, setRating } = useRatingStore();

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <NumeredBox
          key={num}
          number={num}
          isSelected={rating === num}
          onClick={() => handleClick(num)}
        />
      ))}
    </>
  );
}

export default NumeredBoxList;
