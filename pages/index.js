import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Header />

      <Main>
        {/* Your page content / product sections go here */}
      </Main>

      <Footer />
    </PageWrapper>
  );
}
