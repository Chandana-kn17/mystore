import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 12px 16px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    padding: 7px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

   @media (max-width: 768px) {
    display: none;   
  }
`;

export const LocationTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const LocationSub = styled.span`
  color: #666;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #1a1a1a;
  transition: 0.2s;

  &:hover {
    color: #f4c64e;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    position: absolute;
    right: 16px;
    top: 35px;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const BagIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: #e53935;
  color: #fff;
  border-radius: 50%;
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  font-weight: 600;
`;