import {
  FooterWrapper,
  FooterGrid,
  Brand,
  Column,
  Socials,
  BottomBar,
} from "./Footer.styles";
import { Container } from "../../styles/Layout.styles";

import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import TwitterIcon from "@/lib/icons/TwitterIcon";
import YoutubeIcon from "@/lib/icons/YoutubeIcon";

export default function Footer({ data, organization }) {
  if (!data || !organization) return null;

  const {
    navigation = [],
    copyright,
    privacy_policy,
    terms_and_conditions,
  } = data;

  const logo = organization?.logo;
  const orgName = organization?.name;
  const social = organization?.config?.social;

  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>

          {/* BRAND COLUMN */}
          <Brand>
            {logo && <img src={logo} alt={orgName} />}

            {navigation[0]?.description && (
              <p>{navigation[0].description}</p>
            )}

            <Socials>
              {social?.facebookHandle && (
                <a
                  href={`https://facebook.com/${social.facebookHandle}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              )}

              {social?.instagramHandle && (
                <a
                  href={`https://instagram.com/${social.instagramHandle}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}

              {social?.twitterHandle && (
                <a
                  href={`https://twitter.com/${social.twitterHandle}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
              )}

              {social?.youtubeHandle && (
                <a
                  href={`https://youtube.com/${social.youtubeHandle}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </a>
              )}
            </Socials>
          </Brand>

          {/* NAVIGATION COLUMNS */}
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
            {privacy_policy && (
              <a href={privacy_policy}>Privacy Policy</a>
            )}
            {" · "}
            {terms_and_conditions && (
              <a href={terms_and_conditions}>
                Terms & Conditions
              </a>
            )}
          </span>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}