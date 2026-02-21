import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const SectionSubtitle = styled.p`
  color: #666;
  font-size: 14px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ScrollerWrapper = styled.div`
  position: relative;
`;

export const Scroller = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollerItem = styled.div`
  min-width: 280px;
  flex-shrink: 0;
`;

const ScrollButtonBase = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 22px;
  z-index: 10;

  &:hover {
    background: #f5f5f5;
  }
`;

export const LeftButton = styled(ScrollButtonBase)`
  left: -10px;
`;

export const RightButton = styled(ScrollButtonBase)`
  right: -10px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 14px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin: 14px 0 8px;
  font-weight: 600;
`;

export const VariantRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Variant = styled.span`
  background: #e6f4ef;
  color: #1e7e5f;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const Strike = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
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
