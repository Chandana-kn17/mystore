import {
  Section,
  Title,
  Subtitle,
  Grid,
  Item,
  ImageWrapper,
  Image,
  Name,
} from "./CategoryCollection.styles";
import { Container } from "../../styles/Layout.styles";


export default function CategoryCollection({ data,config }) {
  if (!data&& !config) return null;

  const { title,subtitle } = config;
  const {collection} = data;

  return (
    
    <Section>
      <Container>
      {title && <Title>{title}</Title>}
      <Subtitle>{subtitle}</Subtitle>

      <Grid>
        {collection.map(({ category }) => (
          <Item key={category.id} href={category.url}>
            <ImageWrapper>
              <Image src={category.image} alt={category.name} />
            </ImageWrapper>
            <Name>{category.name}</Name>
          </Item>
        ))}
      </Grid>
      </Container>
    </Section>
    
  );
}
