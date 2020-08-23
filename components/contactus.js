import styled from "styled-components";
import Spports from "../images/spport.svg";
import Subtitle from "./subtitle";
const ContactusWapper = styled.div`
  margin: 5rem;
`;
const Contactuscontiner = styled.div`
  display: flex;
  align-items: center;
  & > form {
    flex: 1;
  }
`;
const Contact = () => {
  return (
    <ContactusWapper id="contactus">
      <Subtitle title="Contact us" info="Feel free Contact us" />
      <Contactuscontiner>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" />
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
            <textarea cols="30" id="detiles" rows="10"></textarea>
          </div>
        </form>
        <Spports />
      </Contactuscontiner>
    </ContactusWapper>
  );
};

export default Contact;
