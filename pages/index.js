import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import { getHomeLayout } from "@/lib/repositories/homeRepository";
import { getNavigation } from "@/lib/repositories/navigationRepository";
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
  const [footer, setFooter] = useState(null);

 useEffect(() => {
  async function fetchData() {
    const homeRes = await getHomeLayout();
    const navRes = await getNavigation();

    // Extract page
    const pageData =
      homeRes?.data?.data?.page ??
      homeRes?.data?.page ??
      homeRes?.page;

    // Extract footer from navigation API
    const navigationData =
      navRes?.data?.data ??
      navRes?.data;

    setPage(pageData);
    setFooter(navigationData?.footer);
  }

  fetchData();
}, []);


  if (!page) return null;

  const layouts = page.layouts || [];


  const categoryLayouts = layouts.filter(
    (l) => l.name === "CategoryCollection" && l.status !== "DISABLED"
  );

  const brandLayouts = layouts.filter(
    (l) => l.name === "BrandCollection" && l.status !== "DISABLED"
  );

  const productLayouts = layouts.filter(
    (l) => l.name === "ProductCollection" && l.status !== "DISABLED"
  );

  return (
    <PageWrapper>
      <Header />

      <Main>
       {layouts
       .filter((layout) => layout.status !== "DISABLED")
       .map(renderLayout)} 
      </Main>


      <Footer data={footer} />
    </PageWrapper>
  );
}
