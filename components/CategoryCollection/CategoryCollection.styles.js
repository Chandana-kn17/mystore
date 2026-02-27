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
`;

export const Item = styled.a`
  text-align: center;
  text-decoration: none;
  color: #111;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
