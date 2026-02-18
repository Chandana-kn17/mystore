import { useEffect, useState } from "react";
import { Header, Footer } from "@/components";

import { getHomeLayout } from "@/lib/repositories/homeRepository";
import { renderLayout } from "@/utils/layoutMapper";

export default function Home() {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHome() {
      try {
        const res = await getHomeLayout();
        setPage(res.data.data.page);
      } catch (err) {
        setError("Failed to load home page");
      }
    }

    fetchHome();
  }, []);

  if (error) return <div>{error}</div>;
  if (!page) return <div>Loading...</div>;

  return (
    <>
      <Header />

      {page.layouts?.map((layout, index) =>
        renderLayout(layout, index)
      )}

      <Footer />
    </>
  );
}
