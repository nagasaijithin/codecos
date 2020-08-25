import styled from "styled-components";
import Heroimg from "../images/hero.svg";
import Webdesign from "../images/webdesign.svg";
import Webdev from "../images/webdev.svg";
import Ecom from "../images/ecom.svg";
import Button from "../components/button";
import Subtitle from "../components/subtitle";
import Contact from "../components/contactus";
import Link from "next/link";
const ButtonWapper = styled.a`
  padding: 1.5rem 2rem;
  background-color: #0081a7;
  color: white;
  text-decoration: none;
  border-radius: 12px;
`;
const MainWapper = styled.div`
  position: relative;
  z-index: 30;
`;

const HomeWapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > div {
    font-size: 2.5rem;
    padding: 4rem;
    width: 70%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    @media ${(props) => props.theme.media.tabM} {
      padding: 0;
    }
    @media ${(props) => props.theme.media.mbL} {
      width: 90%;
      height: 50%;
    }
    @media ${(props) => props.theme.media.mbS} {
      height: 70%;
    }
    & > h1 {
      font-size: 10rem;
      font-weight: 500;
    }
    & > p {
      font-family: ${(props) => props.theme.fonts.second};
    }
  }
  & > svg {
    height: 100%;
    width: 80%;
    @media ${(props) => props.theme.media.tabM} {
      display: none;
    }
  }
`;
const ServiesWapper = styled.section`
  margin: 0 4rem;
`;
const SubtitlegridWapper = styled.div`
  & > div:nth-child(even) {
    & > div {
      order: 2;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    @media ${(props) => props.theme.media.tabM} {
      flex-direction: column;
    }
    @media ${(props) => props.theme.media.mbL} {
      margin: 5rem 0;
    }

    & > svg {
      width: 50%;
      height: 100%;
      @media ${(props) => props.theme.media.mbL} {
        width: 100%;
        padding: 4rem;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      font-size: 2.5rem;
      width: 60%;
      margin: 0 3rem;
      @media ${(props) => props.theme.media.tabM} {
        order: 2;
      }
      @media ${(props) => props.theme.media.mbL} {
        width: 100%;
        margin: 0 0;
      }
      & > * {
        margin: 2rem 0;
      }
      & > h2 {
        font-weight: 500;
      }
      & > p {
        font-size: 2.5rem;
        font-family: ${(props) => props.theme.fonts.second};
      }
    }
  }
`;
const Aboutuswapper = styled.div`
  margin: 4rem;
  & > p {
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.second};
  }
`;
const content =
  "It should not be neglected that the accurate predictions of the operational system will require a vast knowledge. To be more specific, any part of the deep analysis makes no difference to The Assistance of Technology-Driven Idea George Albrecht in The Book of ";
const serviesdata = [
  { name: "Web Design", content, Svg: Webdesign, goto: "servies/[id]" },
  { name: "Web Development", content, Svg: Webdev, goto: "servies/[id]" },
  { name: "E-commerce", content, Svg: Ecom, goto: "servies/[id]" },
];
const Home = () => (
  <MainWapper>
    <HomeWapper id="home">
      <div>
        <h1>The Codecos</h1>
        <p>
          Fortunately, a supervisory action of the condition of the application
          rules likely the existing network. Therefore, the concept of the
          first-class pac
        </p>
        <Button text="Contact us" />
      </div>
      <Heroimg />
    </HomeWapper>
    <ServiesWapper id="servies">
      <Subtitle
        title="Serviesse"
        info="Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the "
      />
      <SubtitlegridWapper>
        {serviesdata.map(({ name, Svg, content, goto }, i) => {
          return (
            <div key={i}>
              <div>
                <h2>{`${i + 1}.${name}`}</h2>
                <p>{content}</p>
                <Link href={goto} as={`servies/${i}`} passHref>
                  <ButtonWapper>View Prices</ButtonWapper>
                </Link>
              </div>
              <Svg />
            </div>
          );
        })}
      </SubtitlegridWapper>
    </ServiesWapper>
    <Aboutuswapper id="aboutus">
      <Subtitle title="About us" info="" />
      <p>
        "To be quite frank, elements of the software engineering concepts and
        practices can be regarded as remotely insignificant. The sources and
        influences of the independent knowledge presumably the primary element.
        It should rather be regarded as an integral part of the technical terms
        the strategic decisions and The Facility of Relational Index" (Jude
        Bartley in The Book of the Major Outcomes) Conversely, with the
        exception of the skills the operations research. The real reason of the
        continuing enhancement doctrine successfully the sources and influences
        of the application rules.
      </p>
    </Aboutuswapper>
    <Contact />
  </MainWapper>
);

export default Home;
