import styled from "styled-components";
const ButtonWapper = styled.a`
  padding: 1.5rem 2rem;
  background-color: #0081a7;
  color: white;
  text-decoration: none;
  border-radius: 12px;
`;

const Button = ({ text }) => {
  return <ButtonWapper href="#">{text}</ButtonWapper>;
};
export default Button;
