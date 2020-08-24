import styled from "styled-components";
import Logo from "../images/logo.svg";
import Topcurv from "../images/topcurv.svg";
import Bottomcurv from "../images/bottomcur.svg";

const MainWapper = styled.div`
  display: flex;
  & > main {
    flex: 1;
    position: relative;
  }
`;

const SNavbar = styled.nav`
  height: 100vh;
  position: sticky;
  z-index: 30;
  top: 0;

  background-color: ${(props) => props.theme.colors.background};
  background: linear-gradient(to top, #ffc7ce, #ffdde1);
  box-shadow: 1px 1px 20px -7px rgb(0 0 0 / 66%);
  & > ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 3rem;
    list-style: none;
    & > li > svg {
      height: 10rem;
    }
    & > li > a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
    }
  }
`;
const Topcurvsty = styled(Topcurv)`
  width: 70%;
  height: auto;
  position: absolute;
  z-index: 10;
  left: -20px;
`;
const Bottomcurvsty = styled(Bottomcurv)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const LayOut = ({ children }) => {
  return (
    <MainWapper>
      <SNavbar>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#servies">Services</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#contactus">Contact us</a>
          </li>
        </ul>
      </SNavbar>
      <main>
        <Topcurvsty />
        {children}
        <Bottomcurvsty />
      </main>
    </MainWapper>
  );
};
export default LayOut;
