import {
  FooterWrapper,
  FooterGrid,
  Brand,
  Column,
  Socials,
  BottomBar,
} from "./Footer.styles";
import { Container } from "../../styles/Layout.styles";

export default function Footer({ data }) {
  if (!data) return null;

  const {
    navigation = [],
    copyright,
    privacy_policy,
    terms_and_conditions,
  } = data;

  return (
    <FooterWrapper>
      <FooterGrid>
        {/* BRAND COLUMN (Hardcoded logo only) */}
        <Brand>
          <img
            src="https://cielorestaurant.staging.zopping.com/favicon.ico"
            alt="Cielo Restaurant"
          />

          {/* Description from first navigation */}
          {navigation[0]?.description && (
            <p>{navigation[0].description}</p>
          )}

          <Socials>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" />
          </Socials>
        </Brand>

        {/* ALL NAVIGATION COLUMNS */}
        {navigation.map((section, index) => (
          <Column key={index}>
            <h4>{section.text}</h4>

            {section.items?.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
            ))}
          </Column>
        ))}
      </FooterGrid>

      <BottomBar>
        <span>{copyright}</span>

        <span>
          <a href={privacy_policy}>Privacy Policy</a>
          {" · "}
          <a href={terms_and_conditions}>
            Terms & Conditions
          </a>
        </span>
      </BottomBar>
    </FooterWrapper>
  );
}
