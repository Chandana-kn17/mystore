import {
  FooterWrapper,
  FooterGrid,
  Brand,
  Column,
  Contact,
  Socials,
  BottomBar,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        {/* Brand */}
        <Brand>
          <img
            src="https://cielorestaurant.staging.zopping.com/favicon.ico"
            alt="Cielo Restaurant"
          />
          <p>
            Zopping is a no-code platform enabling rapid creation of customizable
            online stores and mobile apps.
          </p>

          <Socials>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" />
          </Socials>
        </Brand>

        {/* Column 1 */}
        <Column>
          <h4>Reservation Inquiry</h4>
          <a href="#">Get In Touch</a>
          <a href="#">Party Hall</a>
          <a href="#">Join Our Newsletter</a>
          <a href="#">Media Coverage</a>
        </Column>

        {/* Column 2 */}
        <Column>
          <h4>Location & Hours</h4>
          <a href="#">Our Branches</a>
          <a href="#">Catering Services</a>
          <a href="#">Special Offers</a>
          {/* <a href="#">FAQ's</a> */}
        </Column>

        {/* Column 3 */}
        <Column>
          <h4>Join Us In Every Way</h4>
          <a href="#">Cloud Kitchen</a>
          <a href="#">Partnership</a>
          <a href="#">Community</a>
          <a href="#">Cooking Classes</a>
        </Column>

        {/* Column 4 */}
        <Column>
          <h4>Customer Support</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Service</a>
          <a href="#">Connect With Us</a>
          <a href="#">Feedback</a>
        </Column>

        {/* Contact */}
        <Contact>
          <h4>Contact Us</h4>
          <p>abc123@gmail.com</p>
          <p>+91 9876054321</p>
        </Contact>
      </FooterGrid>

      <BottomBar>
        <span>© Cielo Restaurant 2026. All rights reserved</span>
        <span>Privacy Policy · Terms & Conditions</span>
      </BottomBar>
    </FooterWrapper>
  );
}
