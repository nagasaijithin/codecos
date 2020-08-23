import styled from "styled-components";
import Spports from "../images/spport.svg";
import Subtitle from "./subtitle";
import Button from "./button";
const ContactusWapper = styled.div`
  margin: 5rem;
`;
const Contactuscontiner = styled.div`
  display: flex;
  align-items: center;
  & > form {
    flex: 1;
    font-size: 2.5rem;
    margin: 0 4rem;

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
        background-color: #fff2f2;
        border: none;
        border-bottom: 2px solid #ffa3c8;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactusWapper id="contactus">
      <Subtitle title="Contact us" info="Feel free Contact us" />
      <Contactuscontiner>
        <form autoComplete="off">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Type you'r Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Type you'r Email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Type you'r Phone" />
          </div>
          <div>
            <label htmlFor="serviestype">Servies Type</label>
            <select id="serviestype">
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
              placeholder="Type you'r detiles"
            ></textarea>
          </div>
          <Button text="Send" />
        </form>
        <Spports />
      </Contactuscontiner>
    </ContactusWapper>
  );
};

export default Contact;
