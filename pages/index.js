import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

import { getHomeLayout } from "@/lib/repositories/homeRepository";
import { getNavigation } from "@/lib/repositories/navigationRepository";
import { getOrganization } from "@/lib/repositories/organizationRepository";

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
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const homeRes = await getHomeLayout();
      const navRes = await getNavigation();
      const orgRes = await getOrganization(); 

      const pageData =
        homeRes?.data?.data?.page ??
        homeRes?.data?.page ??
        homeRes?.page;

      const navigationData =
        navRes?.data?.data ??
        navRes?.data;

      setPage(pageData);
      setFooter(navigationData?.footer);
      setOrganization(orgRes); 
    }

    fetchData();
  }, []);

  if (!page || !organization) return null;

  const layouts = page.layouts || [];

  return (
    <PageWrapper>
      <Header organization={organization} />

      <Main>
        {layouts
          .filter((layout) => layout.status !== "DISABLED")
          .map(renderLayout)}
      </Main>

      <Footer data={footer} organization={organization} />
    </PageWrapper>
  );
}