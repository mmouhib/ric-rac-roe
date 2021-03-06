import StyledCell from "../../styles/Cell.Styled";

export default ({
  id,
  value,
  affectChoice,
  radar,
  setRadar,
  cellBorderRadius,
}) => {
  return (
    <StyledCell
      cellBorderRadius={cellBorderRadius}
      id={id}
      onClick={() => {
        // \n checks if the cell is already chosen if not it will affect a choice
        if (radar[id] === false) {
          affectChoice(id);
          setRadar(
            radar.map((element, index) => {
              return index === id;
            })
          );
        }
      }}
      className="cell"
    >
      {value}
    </StyledCell>
  );
};
