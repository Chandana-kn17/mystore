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

export default function CategoryCollection({ data }) {
  if (!data) return null;

  const { title, collection } = data;

  return (
    <Section>
      {title && <Title>{title}</Title>}
      <Subtitle>Browse All Sections In One Place.</Subtitle>

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
    </Section>
  );
}
