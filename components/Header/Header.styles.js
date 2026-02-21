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
`;

/* LEFT SECTION (Logo + Location) */
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

/* LOGO */
export const Logo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  object-fit: cover;
`;

/* LOCATION */
export const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

export const LocationTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const LocationSub = styled.span`
  color: #666;
  font-size: 13px;
`;

/* NAVIGATION (CENTER) */
export const Nav = styled.nav`
  display: flex;
  align-items: center;     
  gap: 40px;
  font-weight: 500;
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

/* RIGHT ICONS */
export const Icons = styled.div`
  display: flex;
  align-items: center;      
  gap: 18px;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* OPTIONAL (if used somewhere) */
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
