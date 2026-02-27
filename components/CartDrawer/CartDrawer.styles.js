import styled from "styled-components";


export const ItemPrice = styled.div`
  margin: 6px 0;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1.5px solid #e2b93b;
  border-radius: 8px;
  padding: 6px 10px;
  color: #e2b93b;
`;

export const QtyButton = styled.button`
  background: #fff;
  border: none;
  width: 20px;
  height: 22px;
  font-weight: 600;
  cursor: pointer;
  color:#e2b93b;
`;

export const QtyValue = styled.span`
  font-weight: 600;
`;


export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
`;

export const Drawer = styled.div`
  width: 420px;
  height: 100vh;
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-weight: 500;
  margin-bottom: 6px;
`;

export const VariantBadge = styled.div`
  display: inline-block;
  background: #1e7e5f;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 6px;
`;

export const ItemPriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const FinalPrice = styled.span`
  font-weight: 600;
`;

export const StrikePrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
`;

export const BillingContainer = styled.div`
  margin-top: auto;
`;

export const BillingSection = styled.div`
  background: #f6f1e8;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
`;

export const BillingRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TotalRow = styled(BillingRow)`
  font-weight: 600;
  margin-top: 10px;
`;

export const CartValueBox = styled.div`
  background: #f4f0e8;
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;

  p {
    font-size: 10px;
    color: #666;
    margin: 4px 0 0 0;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #e2b93b;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin: 20px 0;
`;

export const ItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
`;