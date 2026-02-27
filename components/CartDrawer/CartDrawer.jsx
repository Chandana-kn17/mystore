import {
  DrawerOverlay,
  Drawer,
  DrawerHeader,
  CloseButton,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  VariantBadge,
  ItemPriceRow,
  FinalPrice,
  StrikePrice,
  QuantityWrapper,
  QtyButton,
  QtyValue,
  BillingContainer,
  BillingSection,
  BillingRow,
  TotalRow,
  CartValueBox,
  CheckoutButton,
  ItemsContainer,
} from "./CartDrawer.styles";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, decreaseItem, addItem, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.mrp * item.quantity,
    0,
  );

  const totalDiscount = items.reduce(
    (sum, item) => sum + item.discount * item.quantity,
    0,
  );

  const total = subtotal - totalDiscount;
  const delivery = 0;

  return (
  <DrawerOverlay onClick={() => setIsCartOpen(false)}>
  <Drawer onClick={(e) => e.stopPropagation()}>

    <DrawerHeader>
      <h2>My Cart</h2>
      <CloseButton onClick={() => setIsCartOpen(false)}>
        ✕
      </CloseButton>
    </DrawerHeader>

    <ItemsContainer>
      {items.map((item) => (
        <CartItem key={`${item.productId}-${item.variantId}`}>
          <ItemImage src={item.image} />

          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <VariantBadge>{item.variantName}</VariantBadge>

            <ItemPriceRow>
              <FinalPrice>₹{item.price}</FinalPrice>
              {item.discount > 0 && (
                <StrikePrice>₹{item.mrp}</StrikePrice>
              )}
            </ItemPriceRow>
          </ItemInfo>

          <QuantityWrapper>
            <QtyButton
              onClick={() =>
                decreaseItem(item.productId, item.variantId)
              }
            >
              −
            </QtyButton>

            <QtyValue>{item.quantity}</QtyValue>

            <QtyButton onClick={() => addItem(item)}>
              +
            </QtyButton>
          </QuantityWrapper>
        </CartItem>
      ))}
    </ItemsContainer>

    <BillingContainer>
  <BillingSection>
    <h4 style={{ marginBottom: "10px" }}>Billing Details</h4>

    <BillingRow>
      <span>Price</span>
      <span>₹{subtotal}</span>
    </BillingRow>

    <BillingRow>
      <span>Price Discount</span>
      <span style={{ color: "#e53935" }}>
        -₹{totalDiscount}
      </span>
    </BillingRow>

    <BillingRow>
      <span>Delivery Charges</span>
      <span>₹{delivery}</span>
    </BillingRow>

    <TotalRow>
      <span>Total</span>
      <span>₹{total}</span>
    </TotalRow>
  </BillingSection>

  <CartValueBox>
    <div>
      <strong>Cart Value</strong>
    </div>
    <div>
      ₹{total}
      <p>Payment inclusive of all taxes</p>
    </div>
  </CartValueBox>

  <CheckoutButton>
    Proceed to Checkout
  </CheckoutButton>
</BillingContainer>

  </Drawer>
</DrawerOverlay>
           
  );
}
