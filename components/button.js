import styled from "styled-components";
import Link from "next/link";
const ButtonWapper = styled.a`
  padding: 1.5rem 2rem;
  background-color: #0081a7;
  color: white;
  text-decoration: none;
  border-radius: 12px;
`;

const Button = ({ text, goto }) => {
  return (
    <Link href={goto ? goto : "#"} passHref>
      <ButtonWapper>{text}</ButtonWapper>
    </Link>
  );
};
export default Button;
