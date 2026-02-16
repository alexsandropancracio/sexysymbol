import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  padding: 120px 24px;
  background-color: #0b0b0b;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const Header = styled.div`
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #b5b5b5;
`;

export const Card = styled.div`
  background: #111111;
  border: 1px solid #1f1f1f;
  border-radius: 16px;
  padding: 48px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #cfcfcf;
  margin-bottom: 16px;

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #1f1f1f;
  margin: 32px 0;
`;

export const ContactBlock = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #9a9a9a;
  margin-bottom: 6px;
`;

export const Contact = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

export const FooterNote = styled.p`
  margin-top: 32px;
  font-size: 14px;
  line-height: 1.6;
  color: #8a8a8a;
`;
