import Webdesignsvg from "../images/webdesign.svg";
import Respdesign from "../images/respdesign.svg";
import Colorpatter from "../images/colorpatter.svg";
import Logodesign from "../images/logodesign.svg";
import styled from "styled-components";
import Button from "../components/button";
import Contact from "../components/contactus";
import Subtitle from "../components/subtitle";

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
    & > h1 {
      font-size: 7rem;
      font-weight: 500;
    }
    & > p {
      font-family: ${(props) => props.theme.fonts.second};
    }
  }
  & > svg {
    height: 100%;
    width: 100%;
    padding: 4rem;
  }
`;

const ApprochWapper = styled.section`
  margin: 0 4rem;
`;
const ApprochgridWapper = styled.div`
  & > div:nth-child(even) {
    & > div {
      order: 2;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    & > svg {
      width: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      font-size: 2.5rem;
      width: 60%;
      margin: 0 3rem;
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

const PriceingWapper = styled.section`
  margin: 0 4rem;
`;
const PriceinggridWapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2.8rem;
  & > div {
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 1px 2px 20px -10px black;
    margin: 2rem;
    & > h2 {
      text-align: center;
      font-weight: 500;
      font-size: 5rem;
    }
    & > ul {
      font-size: 2.5rem;
      list-style: none;
      font-family: ${(props) => props.theme.fonts.second};
      & > li {
        margin: 2rem 0;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      font-family: ${(props) => props.theme.fonts.second};
      & > h2 {
        font-size: 5rem;
        padding: 0 3rem;
        border-right: 1px solid;
      }
      & > p {
        font-size: 1.7rem;
        margin: 0 1rem;
      }
    }
  }
`;
const content =
  "It should not be neglected that the accurate predictions of the operational system will require a vast knowledge. To be more specific, any part of the deep analysis makes no difference to The Assistance of Technology-Driven Idea George Albrecht in The Book of ";
const Approchdata = [
  { name: "Good Color Pattren", content, Svg: Colorpatter, goto: "#contactus" },
  { name: "Responsive Design", content, Svg: Respdesign, goto: "#contactus" },
  { name: "Logo Design", content, Svg: Logodesign, goto: "#contactus" },
];
const Webdesign = () => {
  return (
    <MainWapper>
      <HomeWapper id="home">
        <div>
          <h1>Web Design</h1>
          <p>
            Fortunately, a supervisory action of the condition of the
            application rules likely the existing network. Therefore, the
            concept of the first-class pac
          </p>
          <Button text="View plans" />
        </div>
        <Webdesignsvg />
      </HomeWapper>
      <ApprochWapper>
        <Subtitle
          title="Approch"
          info="Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the "
        />

        <ApprochgridWapper>
          {Approchdata.map(({ name, Svg, content, goto }, i) => {
            return (
              <div key={i}>
                <div>
                  <h2>{`${name}`}</h2>
                  <p>{content}</p>
                  <Button text="Contact us" goto={goto} />
                </div>
                <Svg />
              </div>
            );
          })}
        </ApprochgridWapper>
      </ApprochWapper>
      <PriceingWapper>
        <Subtitle
          title="Priceing"
          info="Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the "
        />
        <PriceinggridWapper>
          <div>
            <h2>BRONZE</h2>
            <ul>
              <li>Coustem Design</li>
              <li>Mobile Responsive</li>
              <li>2 pages</li>
              <li>Icons Integration</li>
              <li>Photo Sourcing</li>
              <li>2 Rounds of Revisions</li>
            </ul>
            <div>
              <h2>$54</h2>
              <p>($6 per additional website page)</p>
            </div>
          </div>
          <div>
            <h2>SILVER</h2>
            <ul>
              <li>Coustem Design</li>
              <li>Mobile Responsive</li>
              <li>4 pages</li>
              <li>Icons Integration</li>
              <li>Photo Sourcing</li>
              <li>Contact Form</li>
              <li>3 Rounds of Revisions</li>
            </ul>
            <div>
              <h2>$94</h2>
              <p>($6 per additional website page)</p>
            </div>
          </div>
          <div>
            <h2>GOLD</h2>
            <ul>
              <li>Coustem Design</li>
              <li>Mobile Responsive</li>
              <li>6 pages</li>
              <li>single page application</li>
              <li>Icons Integration</li>
              <li>Google Maps</li>
              <li>404 Redirect</li>
              <li>Photo Sourcing</li>
              <li>Contact Form</li>
              <li>4 Rounds of Revisions</li>
            </ul>
            <div>
              <h2>$120</h2>
              <p>($6 per additional website page)</p>
            </div>
          </div>
        </PriceinggridWapper>
      </PriceingWapper>
      <Contact />
    </MainWapper>
  );
};
export default Webdesign;
