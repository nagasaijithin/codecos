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

  box-shadow: 1px 2px 15px -5px black;
  transition: all 0.4s ease-out;
  &:hover {
    color: #0081a7;
    background-color: white;
    box-shadow: 1px 2px 20px -5px black;
    transform: scale(1.02);
  }
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
    height: 80%;
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
      margin: 7rem 3rem;
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
const serviesdata = [
  {
    name: "Web Design",
    content:
      "We are a creative web design company known to build the most user engaging and beautiful UI designs for any type of business need. Our design experts, offer the balance of great experience and creativeness with their result oriented innovation, that attracts more traffic to your website. Use of high-end technologies makes websites more user friendly and attractive.",
    Svg: Webdesign,
    goto: "servies/[id]",
  },
  {
    name: "Web Development",
    content:
      "A highly experienced web development team that takes care of each and every part of a website so that it is always effortless for the end users. We specialize in custom web programming as well as in CMS developement. Our technical team understands the requirements of today's business needs and delivers the satisfaction to our clients.",
    Svg: Webdev,
    goto: "servies/[id]",
  },
  {
    name: "E-commerce",
    content:
      "No matter what kind of product you wish to market and sell, you’ve got a home here with codecos. Our specialized designs will help you draw in new customers and spread the word about your growing and expanding business, no matter what phase of the process you’re in. Marketing digitally helps you reach infinitely more customers than any other advertising method, and you’ll soon find your business booming. Easy-to-navigate site designs help you meet your ambitious sales goals and solidify your place in your industry.",
    Svg: Ecom,
    goto: "servies/[id]",
  },
];
const Home = () => (
  <MainWapper>
    <HomeWapper id="home">
      <div>
        <h1>No, Drag And Drop Websites</h1>
        <p>
          Codecos is an IT services provider focussed on providing highly
          scalable business with innovative approaches &amp; advanced
          Technologys. Get The Good Services From Us
        </p>
        <Button text="Speak With Us" goto="contactus" />
      </div>
      <Heroimg />
    </HomeWapper>
    <Aboutuswapper id="aboutus">
      <Subtitle title="About us" />
      <p>
        We at codecos are passionate and obsessed about helping organizations
        transform and realize the power of modern technologies. We can arm you
        with the right tools, knowledge, and technology at the best prices
      </p>
    </Aboutuswapper>
    <ServiesWapper id="servies">
      <Subtitle
        title="Serviesse"
        info="at codecos, we focus on bringing your ideas to life."
      />
      <SubtitlegridWapper>
        {serviesdata.map(({ name, Svg, content, goto }, i) => {
          return (
            <div key={i}>
              <div>
                <h2>{`${i + 1}.${name}`}</h2>
                <p>{content}</p>
                <Link href={goto} as={`servies/${i}`} passHref>
                  <ButtonWapper>View Plans</ButtonWapper>
                </Link>
              </div>
              <Svg />
            </div>
          );
        })}
      </SubtitlegridWapper>
    </ServiesWapper>
    <Contact />
  </MainWapper>
);

export default Home;
