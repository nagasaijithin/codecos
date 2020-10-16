import styled from "styled-components";
import Head from "next/head";
import Button from "../../components/button";
import Contact from "../../components/contactus";
import Subtitle from "../../components/subtitle";
import data from "../../data";
import { useRouter } from "next/router";

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
      @media ${(props) => props.theme.media.mbM} {
        font-size: 7rem;
      }
    }
    & > p {
      font-family: ${(props) => props.theme.fonts.second};
    }
  }
  & > svg {
    height: 80%;
    width: 80%;
    padding: 4rem;
    @media ${(props) => props.theme.media.tabM} {
      display: none;
    }
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
    margin: 8rem 0;
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

const PriceingWapper = styled.section`
  margin: 0 4rem;
`;
const PriceinggridWapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
const Webdesign = () => {
  const router = useRouter();
  const { id } = router.query;
  if (id) {
    const rdata = data.filter((dt, i) => {
      let cleanid = id.replace('-', " ")
      let cleantitle = dt.title.replace('-', " ")
      return cleantitle === cleanid});
    const {
      title,
      headcontent,
      Headimg,
      approchcontent,
      approchdata,
      priceingcontent,
      priceingdata,
    } = rdata[0];

    return (
      <MainWapper>
        <Head>
    <title>{title}</title>
    <meta
            name="description"
            content={headcontent}
          />
          <meta name="keywords" content="web design in nellore, codecos in nellore, codecos in ap, codecos in andhra pradesh, CODECOS, web development company in nellore, lost cost web design company, nellore, webdesign agency in nellore, e-commerce web desgin company in nellore,web development in nellore, web design in nellore, digital marketing agency in nellore" />
          {/* og tags */}
          <meta
            name="og:title"
            property="og:title"
            content={headcontent}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://codecos.tk/servies/${id}`} />
          <meta property="og:description" content={headcontent} />
          <meta property="og:image" content="/static/logo.svg" />
          {/* og tags end*/}
          {/* twitter tags*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://codecos.tk/servies/${id}`} />
          <meta property="twitter:title" content={id} />
          <meta property="twitter:image" content="/static/logo.svg" />
          <meta property="twitter:description" content={headcontent} />
          {/* twitter tags end*/}
          <meta name="robots" content="index, follow" />
          <link href="URL" rel="canonical" />
        </Head>
        <HomeWapper id="home">
          <div>
            <h1>{title}</h1>
            <p>{headcontent}</p>
            <Button text="View plans" goto={`/servies/${id}/#priceing`} />
          </div>
          <Headimg />
        </HomeWapper>
        <ApprochWapper id="approche">
          <Subtitle title="Approch" info={approchcontent} />

          <ApprochgridWapper>
            {approchdata.map(({ name, Svg, content, goto }, i) => {
              return (
                <div key={i}>
                  <div>
                    <h2>{`${name}`}</h2>
                    <p>{content}</p>
                    <Button text="Contact us" goto={`/servies/${id}/${goto}`} />
                  </div>
                  <Svg />
                </div>
              );
            })}
          </ApprochgridWapper>
        </ApprochWapper>
        <PriceingWapper id="priceing">
          <Subtitle title="Priceing" info={priceingcontent} />
          <PriceinggridWapper>
            {priceingdata.map(({ cost, extrfutr, ptitle, futrsoffer }, i) => {
              return (
                <div key={i}>
                  <h2>{ptitle}</h2>
                  <ul>
                    {futrsoffer.map((info, i) => {
                      return <li key={info}>{info}</li>;
                    })}
                  </ul>
                  <div>
                    <h2>${cost}</h2>
                    <p>{extrfutr}</p>
                  </div>
                </div>
              );
            })}
          </PriceinggridWapper>
        </PriceingWapper>
        <Contact />
      </MainWapper>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default Webdesign;
