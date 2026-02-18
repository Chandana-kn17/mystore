import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #f7cf57;
  padding: 48px 64px 24px;
  border-radius: 32px 32px 0 0;

  @media (max-width: 768px) {
    padding: 32px 20px 20px;
  }
`;


export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr) 1.5fr;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;


export const Brand = styled.div`
  img {
    width: 80px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    max-width: 220px;
  }
`;

export const Column = styled.div`
  h4 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  a {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #111;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Contact = styled.div`
  font-size: 14px;

  p {
    margin-bottom: 10px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 13px;
  opacity: 0.8;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

