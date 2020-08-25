import styled from "styled-components";
const SubTitleWapper = styled.div`
  font-size: 3rem;
  padding: 4rem 0;
  width: 70%;
  @media ${(props) => props.theme.media.mbL} {
    width: 90%;
  }
  & > p {
    font-family: ${(props) => props.theme.fonts.second};
  }
  & > h1 {
    font-weight: 500;
    display: inline-block;
    position: relative;
    font-size: 5rem;

    & > p {
      position: relative;
      z-index: 5;
    }
    &::before {
      content: "";
      width: 100%;
      height: 20%;
      position: absolute;
      background: #ffa3c8;
      z-index: 3;
      bottom: 5px;
    }
  }
`;
const SubTitle = ({ title, info }) => {
  return (
    <SubTitleWapper>
      <h1>
        <p>{title}</p>
      </h1>
      <p>{info}</p>
    </SubTitleWapper>
  );
};
export default SubTitle;
