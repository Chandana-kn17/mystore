import {
  Section,
  Title,
  Grid,
  Card,
  LogoWrapper,
  Subtitle,
  Logo,
  Name,
} from "./BrandCollection.styles";
import { Container } from "../../styles/Layout.styles";

export default function BrandCollection({ data,config }) {
  if (!data&&!config) return null;

  const {  collection } = data;
  const {title,subtitle}=config

  return (
    
    <Section>
      <Container>
      {title && <Title>{title}</Title>}
      <Subtitle>{subtitle}</Subtitle>

      <Grid>
        {collection.map(({ brand }) => (
          <Card key={brand.id} href={`/brand/${brand.slug}`}>
            <LogoWrapper>
              {brand.logo || brand.image ? (
                <Logo
                  src={brand.logo || brand.image}
                  alt={brand.name}
                />
              ) : (
                <Name>{brand.name}</Name>
              )}
            </LogoWrapper>

            <Name>{brand.name}</Name>
          </Card>
        ))}
      </Grid>
       </Container>
    </Section>
  );
}
