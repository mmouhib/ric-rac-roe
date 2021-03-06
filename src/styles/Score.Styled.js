import styled from "styled-components";

const StyledScore = styled.div`
  text-align: center;
  /* font-size: 1.5rem; */
  font-size: 100%;
  font-family: "Orbitron", sans-serif;
  margin: auto auto 2% 2%;

  span {
    font-weight: bold;
    color: ${(props) => props.theme.scoreNumbers};
  }

  p {
    color: ${(props) => props.theme.scoreTitles};
    display: inline-block;
    margin: 0 45px 0 45px;
  }
`;

export default StyledScore;
