import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;

export const Main = styled.main`
  padding-top: 140px;
  flex: 1;
`;

export const DetailWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const InfoSection = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  margin: 10px 0;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const VariantRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const VariantButton = styled.button`
  padding: 9px 25px;
  border-radius: 20px;
  border: 1px solid #1e7e5f;
  cursor: pointer;
  background: ${({ active }) =>
    active ? "#1e7e5f" : "#fff"};
  color: ${({ active }) =>
    active ? "#fff" : "#1e7e5f"};
  transition: 0.2s;

  &:hover {
    background: #1e7e5f;
    color: #fff;
  }
`;
export const Description = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const AddToCartButton = styled.button`
  width: 50%;
  height: 48px;                 
  border-radius: 8px;
  border: 1px solid #e2b93b;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export const BuyNowButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  background: #e2b93b;
  border: none;
  cursor: pointer;
  width: 50%;
  font-size: 16px;
  font-weight: 800px;
`;

export const OfferCard = styled.div`
  background: #f6f1e8;
  border-radius: 12px;
  padding: 20px;
  margin-top: 25px;
  border: 1px solid #e2b93b;
`;

export const OfferHeading = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const OfferItem = styled.div`
  margin-bottom: 12px;

  p {
    margin-top: 4px;
    font-size: 14px;
  }
`;

export const OfferTitle = styled.span`
  font-weight: 600;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #e2b93b;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const QuantityWrapper = styled.div`
  width: 50%;
  height: 48px;                
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid #e2b93b;
  border-radius: 8px;
  padding: 0 16px;            
  background: #fff;
`;

export const QtyButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #e2b93b;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const QtyValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #e2b93b;
`;