"use client";

import { useRef, useState } from "react";
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
  ActiveVariant,
  PriceRow,
  Price,
  Strike,
  Button,
  QuantityWrapper,
  QtyButton,
  QtyValue,
} from "./ProductCollection.styles";

import { Container } from "../../styles/Layout.styles";
import { useCart } from "@/context/CartContext";

function ProductCard({ product }) {
  const variants = product.variants || [];
  const { items, addItem, decreaseItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    variants.length ? variants[0] : null
  );

  const pricing =
    selectedVariant?.storeSpecificData?.[0] ||
    product.storeSpecificData?.[0];

  const mrp = pricing?.mrp ? Number(pricing.mrp) : 0;
  const discount = pricing?.discount ? Number(pricing.discount) : 0;
  const finalPrice = mrp - discount;

  const discountPercent =
    discount > 0 && mrp > 0
      ? Math.round((discount / mrp) * 100)
      : 0;

  const image =
    selectedVariant?.images?.[0] ||
    product.images?.[0] ||
    "";

  const displayName =
    selectedVariant?.fullName || product.name;

  const variantId = selectedVariant?.id || product.id;

  const existingItem = items.find(
    (item) =>
      item.productId === product.id &&
      item.variantId === variantId
  );

  const quantity = existingItem ? existingItem.quantity : 0;

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

const handleAdd = () => {
  addItem({
    productId: product.id,
    variantId: variantId,
    name: displayName,
    variantName: selectedVariant?.name || "Regular",
    price: finalPrice,
    mrp: mrp,
    discount: discount,
    image: image,
  });
};

  const handleDecrease = () => {
    decreaseItem(product.id, variantId);
  };

  return (
    <Card>
      <ImageWrapper>
        {discountPercent > 0 && (
          <DiscountBadge>{discountPercent}% OFF</DiscountBadge>
        )}
        {image && <Image src={image} alt={displayName} />}
      </ImageWrapper>

      <ProductName title={displayName}>
        {displayName}
      </ProductName>

      <VariantRow>
        {variants.length ? (
          variants.map((variant) =>
            selectedVariant?.id === variant.id ? (
              <ActiveVariant
                key={variant.id}
                onClick={() => handleVariantChange(variant)}
              >
                {variant.name}
              </ActiveVariant>
            ) : (
              <Variant
                key={variant.id}
                onClick={() => handleVariantChange(variant)}
              >
                {variant.name}
              </Variant>
            )
          )
        ) : (
          <Variant>Regular</Variant>
        )}
      </VariantRow>

      <PriceRow>
        <Price>₹{finalPrice}</Price>
        {discount > 0 && <Strike>₹{mrp}</Strike>}
      </PriceRow>

      {quantity === 0 ? (
        <Button onClick={handleAdd}>
          Add to cart
        </Button>
      ) : (
        <QuantityWrapper>
          <QtyButton onClick={handleDecrease}>−</QtyButton>
          <QtyValue>{quantity}</QtyValue>
          <QtyButton onClick={handleAdd}>+</QtyButton>
        </QuantityWrapper>
      )}
    </Card>
  );
}

export default function ProductCollection({ data, config }) {
  const products = data?.collection?.product ?? [];

  const title = config?.title;
  const subtitle = config?.subtitle;
  const layoutType = config?.layoutType;

  const scrollRef = useRef(null);

  if (!products.length) return null;

  const scrollLeft = () => {
    const width = scrollRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const width = scrollRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({
      left: width,
      behavior: "smooth",
    });
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
                  <ProductCard product={product} />
                </ScrollerItem>
              ))}
            </Scroller>

            <RightButton onClick={scrollRight}>›</RightButton>
          </ScrollerWrapper>
        ) : (
          <Grid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </Grid>
        )}
      </Container>
    </Section>
  );
}