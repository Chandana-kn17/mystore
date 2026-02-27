import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 32px;
  align-items: center;
`;

export const Card = styled.a`
  text-align: center;
  text-decoration: none;
  color: #111;
`;

export const LogoWrapper = styled.div`
  height: 100px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 50px;
  object-fit: contain;
`;

export const Name = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
`;

