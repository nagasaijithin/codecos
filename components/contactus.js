import styled from "styled-components";
import Spports from "../images/spport.svg";
import Subtitle from "./subtitle";
import Button from "./button";
const ContactusWapper = styled.div`
  margin: 5rem;
  @media ${(props) => props.theme.media.mbS} {
    margin: 3rem;
  }
`;
const Contactuscontiner = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    @media ${(props) => props.theme.media.tabM} {
      display: none;
    }
  }
  & > form {
    flex: 1;
    font-size: 2.5rem;
    margin: 0 4rem;
    @media ${(props) => props.theme.media.mbS} {
      margin: 0;
    }
    & > div {
      display: flex;
      flex-direction: column;
      margin: 3rem 0;
      & > label {
        margin: 0.5rem 0;
      }
      & > select {
        font-size: 2.5rem;
        border: none;
        background: #fea2c7;
        color: white;
        padding: 1rem;
        & > * {
          padding: 1rem;
        }
      }
      & > textarea {
        resize: none;
        font-size: 3rem;
        background: transparent;
        border: none;
        border-bottom: 2px solid #ffa3c8;
      }
      & > input {
        font-size: 3rem;
        background: transparent;
        border: none;
        border-bottom: 2px solid #ffa3c8;
      }
    }
    & > input[type="submit"] {
      padding: 1.5rem 2rem;
      background-color: #0081a7;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      border: none;
      @media ${(props) => props.theme.media.mbM} {
        width: 100%;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactusWapper id="contactus">
      <Subtitle title="Contact us" info="Feel free Contact us" />
      <Contactuscontiner>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          autoComplete="off"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type you'r Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type you'r Email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Type you'r Phone"
            />
          </div>
          <div>
            <label htmlFor="serviestype">Servies Type</label>
            <select name="servies[]" id="serviestype">
              <option value="Web design" key="1">
                Web design
              </option>
              <option value="Web Development" key="2">
                Web development
              </option>
              <option value="E-commerce" key="3">
                E-commerce application
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="detiles">Detiles</label>
            <textarea
              cols="30"
              id="detiles"
              rows="5"
              name="project info"
              placeholder="Type you'r detiles"
            ></textarea>
          </div>
          <input type="submit" value="Send" />
        </form>
        <Spports />
      </Contactuscontiner>
    </ContactusWapper>
  );
};

export default Contact;
