import styled from "styled-components";
import { useState, useEffect } from 'react';

import Spports from "../images/spport.svg";
import Subtitle from "./subtitle";

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
      cursor: pointer;
      font-size: 2.5rem;
      box-shadow: 1px 2px 15px -5px black;
      transition: all 0.4s ease-out;
      &:hover {
        color: #0081a7;
        background-color: white;
        box-shadow: 1px 2px 20px -5px black;
        transform: scale(1.02);
      }
      @media ${(props) => props.theme.media.mbM} {
        width: 100%;
      }
    }
  }
`;
const Contact = () => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
    {success && (
  <p style={{ color: 'green'}}>
    Successfully submitted form!
  </p>
)}
    <ContactusWapper id="contactus">
      <Subtitle
        title="Contact us"
        info="Have a project? Contact us and let's work together!"
      />
      <Contactuscontiner>
        <form
          name="contact"
          method="POST"
          action="/?success=true"
          data-netlify="true"
          autoComplete="off"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type you are Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type you are Email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Type you are Phone"
              required
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
              placeholder="Type you are project details"
              required
            ></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>

          <input type="submit" value="let's talk" />
        </form>
        <Spports />
      </Contactuscontiner>
    </ContactusWapper>
    </>
  );
};

export default Contact;
