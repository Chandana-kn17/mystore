import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import CartDrawer from "@/components/CartDrawer/CartDrawer";

import {
  PageWrapper,
  Main,
} from "@/components/ProductDetails/ProductDetails.styles";

import { getProductLayout } from "@/lib/repositories/productRepository";
import { getOrganization } from "@/lib/repositories/organizationRepository";
import { getNavigation } from "@/lib/repositories/navigationRepository";

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [pageData, setPageData] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        const productRes = await getProductLayout(slug);
        const orgRes = await getOrganization();
        const navRes = await getNavigation();

        const productPage =
          productRes?.data?.data?.page ??
          productRes?.data?.page ??
          null;

        const navigationData =
          navRes?.data?.data ??
          navRes?.data;

        setPageData(productPage);
        setOrganization(orgRes);
        setFooter(navigationData?.footer);
      } catch (error) {
        console.error("Product page error:", error);
      }
    }

    fetchData();
  }, [slug]);

  if (!organization) return null;

  return (
    <PageWrapper>
      <Header organization={organization} />

      <Main>
        {pageData ? (
          <ProductDetails pageData={pageData} />
        ) : (
          <div>Loading...</div>
        )}
      </Main>

      <Footer data={footer} organization={organization} />
      <CartDrawer />
    </PageWrapper>
  );
}