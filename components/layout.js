import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Logo from "../images/logo.svg";
import Topcurv from "../images/topcurv.svg";
import Bottomcurv from "../images/bottomcur.svg";
import Link from "next/link";

import { useRouter } from "next/router";
const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  & > main {
    flex: 1;
    position: relative;
  }
`;

const SNavbar = styled.nav`
  height: 15vh;
  z-index: 80;
  top: 0;
  /* position: sticky; */
  /* background-color: ${(props) => props.theme.colors.background}; */
  /* background: linear-gradient(to top, #ffc7ce, #ffdde1); */
  /* box-shadow: 1px 1px 20px -7px rgb(0 0 0 / 66%); */
  @media ${(props) => props.theme.media.mbS} {
    height: 12vh;
  }
  & > ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 3rem;
    list-style: none;
    @media ${(props) => props.theme.media.laptopM} {
      font-size: 2.5rem;
    }
    & > span {
      font-size: 5rem;
      transform: rotate(90deg);
      font-weight: 900;
      display: none;
      @media ${(props) => props.theme.media.tabL} {
        display: block;
      }
    }
    & > li {
      height: 100%;
    }
    & > li > svg {
      height: 100%;
      width: auto;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;

      @media ${(props) => props.theme.media.tabL} {
        display: none;
      }
      & > li {
        padding: 1rem;
        margin: 0 2rem;
        height: 100%;
        display: flex;
        align-items: center;
        transition:all .1s ease-in;
          &:hover{
            border-bottom: 5px solid #0081a7;
          }
      }
      & > li > a {
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
      }
    }
  }
`;
const Topcurvsty = styled(Topcurv)`
  width: 80vw;
  height: auto;
  position: absolute;
  z-index: 10;
  left: -20px;
  top: -4%;
`;
const Bottomcurvsty = styled(Bottomcurv)`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const MblNav = styled.div`
  position: fixed;
  z-index: 100;
  background: white;
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.show ? "block" : "none")};
  & > span {
    position: absolute;
    z-index: 110;
    top: 0;
    right: 0;
    font-size: 5rem;
    padding: 2rem 4rem;
    font-family: ${(props) => props.theme.fonts.second};
  }
  & > ul {
    list-style: none;
    font-size: 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > li {
      & > a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
const homeNavLink = [
  {
    linkname: "Home",
    linkgoto: "/#home",
  },
  {
    linkname: "About Us",
    linkgoto: "/#aboutus",
  },
  {
    linkname: "Services",
    linkgoto: "/#servies",
  },

  {
    linkname: "Contact us",
    linkgoto: "#contactus",
  },
];

const LayOut = ({ children }) => {
  const ref = useRef("");
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 200) {
        ref.current.style.position = "sticky";
        ref.current.style.background =
          "linear-gradient(to top, #ffc7ce, #ffdde1)";
        
        ref.current.style.boxShadow = "1px 1px 20px -7px rgb(0 0 0 / 66%)";
      } else {
        ref.current.style.position = "unset";
        ref.current.style.backgroundColor = "transparent";
        ref.current.style.background = "transparent";
        ref.current.style.boxShadow = "none";
      }
    };
  }, [ref]);
  const [state, setState] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainWapper>
      <SNavbar ref={ref}>
        <ul>
          <li>
          <Link href={"/"}>
            <Logo />
            </Link>
          </li>
          <div>
            {homeNavLink.map((data, i) => (
              <li key={i}>
                <a href={data.linkgoto}>{data.linkname}</a>
              </li>
            ))}
          </div>
          <span onClick={() => setState(true)}>|||</span>
        </ul>
      </SNavbar>
      <MblNav show={state}>
        <ul>
          {homeNavLink.map((data, i) => (
            <li key={i} onClick={() => setState(false)}>
              <a href={data.linkgoto}>{data.linkname}</a>
            </li>
          ))}
        </ul>
        <span onClick={() => setState(false)}>X</span>
      </MblNav>
      <main>
        <Topcurvsty />
        {children}
        <Bottomcurvsty />
      </main>
    </MainWapper>
  );
};
export default LayOut;
