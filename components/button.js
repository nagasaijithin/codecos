import styled from "styled-components";
import Link from "next/link";
const ButtonWapper = styled.a`
  padding: 1.5rem 2rem;
  background-color: #0081a7;
  color: white;
  text-decoration: none;
  border-radius: 12px;

  box-shadow: 1px 2px 15px -5px black;
  transition: all 0.4s ease-out;
  &:hover {
    color: #0081a7;
    background-color: white;
    box-shadow: 1px 2px 20px -5px black;
    transform: scale(1.02);
  }
`;

const Button = ({ text, goto }) => {
  return (
    <Link href={goto ? goto : "#"} passHref>
      <ButtonWapper>{text}</ButtonWapper>
    </Link>
  );
};
export default Button;
