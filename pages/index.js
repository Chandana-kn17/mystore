import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import { getHomeLayout } from "@/lib/repositories/homeRepository";
import { renderLayout } from "@/utils/layoutMapper";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Home() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    async function fetchHome() {
      const res = await getHomeLayout();
      setPage(res.data.data.page);
    }
    fetchHome();
  }, []);

  return (
    <PageWrapper>
      <Header />

      <Main>
        {page?.layouts?.map((layout, index) =>
          renderLayout(layout, index)
        )}
      </Main>

      <Footer />
    </PageWrapper>
  );
}
