import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import ProductCollection from "@/components/ProductCollection/ProductCollection";
import { Container } from "@/styles/Layout.styles";
import {
  DetailWrapper,
  ImageSection,
  ProductImage,
  InfoSection,
  ProductTitle,
  Price,
  VariantRow,
  VariantButton,
  Description,
  ButtonRow,
  AddToCartButton,
  BuyNowButton,
  OfferCard,
  OfferHeading,
  OfferItem,
  OfferTitle,
  QtyButton,
  QtyValue,
  QuantityWrapper,
  Button,
} from "./ProductDetails.styles";

export default function ProductDetail({ pageData }) {
  const { addItem, decreaseItem, items} = useCart();

  const productDetailLayout = pageData?.layouts?.find(
    (layout) => layout.name === "ProductDetail"
  );

  const recommendedLayout = pageData?.layouts?.find(
    (layout) => layout.name === "ProductCollection"
  );

  const product = productDetailLayout?.value;

  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) return null;

  const pricing = selectedVariant?.storeSpecificData?.[0];

  const price = pricing?.mrp ? Number(pricing.mrp) : 0;
 
  const existingItem = items.find(
  (item) =>
    item.productId === product.id &&
    item.variantId === selectedVariant?.id
);

const quantity = existingItem ? existingItem.quantity : 0;
 
  const image =
    selectedVariant?.images?.[0] ||
    product?.variants?.[0]?.images?.[0] ||
    product?.images?.[0] ||
    "/placeholder.png";

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      variantName: selectedVariant.name,
      price: price,
      mrp: Number(pricing?.mrp || 0),
      discount: Number(pricing?.discount || 0),
      image: image,
    });
  };

  return (
    <Container>
      <DetailWrapper>
        <ImageSection>
          <ProductImage src={image} alt={product.name} />
        </ImageSection>

        <InfoSection>
          <ProductTitle>
            {product.name}
            {selectedVariant && ` - ${selectedVariant.name}`}
          </ProductTitle>

          <Price>₹{price}</Price>

          <VariantRow>
            {product?.variants?.map((variant) => (
              <VariantButton
                key={variant.id}
                active={selectedVariant?.id === variant.id}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant.name}
              </VariantButton>
            ))}
          </VariantRow>

          {product.description && (
            <Description
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          )}

          {selectedVariant?.offers?.length > 0 && (
            <OfferCard>
              <OfferHeading>Offers</OfferHeading>

              {selectedVariant.offers.map((offer, index) => (
                <OfferItem key={index}>
                  <OfferTitle>
                    {offer.title || "Offer"}
                  </OfferTitle>
                  <p>{offer.description}</p>
                </OfferItem>
              ))}
            </OfferCard>
          )}

  <ButtonRow>  
   
  {quantity === 0 ? (
    <AddToCartButton onClick={handleAddToCart}>
      Add to cart
    </AddToCartButton>
  ) : (
    <QuantityWrapper>
      <QtyButton
        onClick={() =>
          decreaseItem(product.id, selectedVariant.id)
        }
      >
        −
      </QtyButton>

      <QtyValue>{quantity}</QtyValue>

      <QtyButton onClick={handleAddToCart}>
        +
      </QtyButton>
    </QuantityWrapper>
  )}

  <BuyNowButton>
    Buy Now
  </BuyNowButton>
</ButtonRow>
        </InfoSection>
      </DetailWrapper>

      {recommendedLayout && (
        <div style={{ marginTop: "60px" }}>
          <ProductCollection
            data={recommendedLayout.value}
            config={{
              title: recommendedLayout.value.title,
              layoutType: "SCROLLER",
            }}
          />
        </div>
      )}
    </Container>
  );
}