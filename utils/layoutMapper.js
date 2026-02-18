import {
  BrandCollection,
  CategoryCollection,
  ProductCollection,
} from "@/components";

export function renderLayout(layout, index) {
  if (layout.status === "DISABLED") return null;

  switch (layout.name) {
    case "CategoryCollection":
      return <CategoryCollection key={layout.id ?? index} />;

    case "BrandCollection":
      return <BrandCollection key={layout.id ?? index} />;

    case "ProductCollection":
      return <ProductCollection key={layout.id ?? index} />;

    default:
      return null;
  }
}
