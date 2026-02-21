import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #f4c64e;
  padding: 60px 80px 30px;
  border-radius: 40px 40px 0 0;

  @media (max-width: 1024px) {
    padding: 50px 40px 25px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Brand = styled.div`
  img {
    width: 90px;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    max-width: 280px;
    color: #1a1a1a;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #1a1a1a;
  }

  a {
    font-size: 14px;
    color: #1a1a1a;
    text-decoration: none;
    transition: 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 20px;

  img {
    width: 18px;
    cursor: pointer;
  }
`;

export const BottomBar = styled.div`
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #1a1a1a;

  a {
    color: #1a1a1a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;
