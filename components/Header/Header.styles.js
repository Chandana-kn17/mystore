import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;


export const IconImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const NavIcon = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
`;


export const Logo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;


export const LocationTitle = styled.span`
  font-weight: 600;
`;

export const LocationSub = styled.span`
  color: #666;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const NavItem = styled.div`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #f59e0b;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;


export const Icon = styled.span`
  font-size: 18px;
  cursor: pointer;
`;
