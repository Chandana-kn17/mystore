import { useRef } from "react";
import {
  Section,
  HeaderWrapper,
  SectionTitle,
  SectionSubtitle,
  Grid,
  ScrollerWrapper,
  Scroller,
  ScrollerItem,
  LeftButton,
  RightButton,
  Card,
  ImageWrapper,
  Image,
  DiscountBadge,
  ProductName,
  VariantRow,
  Variant,
  PriceRow,
  Price,
  Strike,
  Button,
} from "./ProductCollection.styles";

import { Container } from "../../styles/Layout.styles";

export default function ProductCollection({ data, config }) {
  const products = data?.collection?.product ?? [];

  const title = config?.title;
  const subtitle = config?.subtitle;
  const layoutType = config?.layoutType;

  const scrollRef = useRef(null);

  if (!products.length) return null;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const getPricing = (product) => {
    let pricing;

    if (product.variants?.length) {
      pricing = product.variants[0]?.storeSpecificData?.[0];
    } else if (product.storeSpecificData?.length) {
      pricing = product.storeSpecificData[0];
    }

    const mrp = pricing?.mrp ? Number(pricing.mrp) : 0;
    const discount = pricing?.discount ? Number(pricing.discount) : 0;

    return {
      mrp,
      discount,
      finalPrice: mrp - discount,
    };
  };

  const renderCard = (product) => {
    const firstVariant = product.variants?.[0];

    const image =
      firstVariant?.images?.[0] ||
      product.images?.[0] ||
      "";

    const { mrp, discount, finalPrice } = getPricing(product);

    const discountPercent =
      discount > 0 && mrp > 0
        ? Math.round((discount / mrp) * 100)
        : 0;

    return (
      <Card key={product.id}>
        <ImageWrapper>
          {discountPercent > 0 && (
            <DiscountBadge>
              {discountPercent}% OFF
            </DiscountBadge>
          )}
          {image && <Image src={image} alt={product.name} />}
        </ImageWrapper>

        <ProductName title={product.name}>
          {product.name}
        </ProductName>

        <VariantRow>
          {product.variants?.length ? (
            product.variants.map((variant) => (
              <Variant key={variant.id}>
                {variant.name}
              </Variant>
            ))
          ) : (
            <Variant>Regular</Variant>
          )}
        </VariantRow>

        <PriceRow>
          <Price>₹{finalPrice}</Price>
          {discount > 0 && <Strike>₹{mrp}</Strike>}
        </PriceRow>

        <Button>Add to cart</Button>
      </Card>
    );
  };

  return (
    <Section>
      <Container>
        {(title || subtitle) && (
          <HeaderWrapper>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && (
              <SectionSubtitle>{subtitle}</SectionSubtitle>
            )}
          </HeaderWrapper>
        )}

        {layoutType === "SCROLLER" ? (
          <ScrollerWrapper>
            <LeftButton onClick={scrollLeft}>‹</LeftButton>

            <Scroller ref={scrollRef}>
              {products.map((product) => (
                <ScrollerItem key={product.id}>
                  {renderCard(product)}
                </ScrollerItem>
              ))}
            </Scroller>

            <RightButton onClick={scrollRight}>›</RightButton>
          </ScrollerWrapper>
        ) : (
          <Grid>
            {products.map((product) => (
              <div key={product.id}>
                {renderCard(product)}
              </div>
            ))}
          </Grid>
        )}
      </Container>
    </Section>
  );
}