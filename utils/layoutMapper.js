import {
  BrandCollection,
  CategoryCollection,
  ProductCollection,
} from "@/components";

export function renderLayout(layout, index) {
  if (layout.status === "DISABLED") return null;

  switch (layout.name) {
    case "CategoryCollection":
      return (
        <CategoryCollection
          key={layout.id ?? index}
          data={layout.value}
        />
      );

    case "BrandCollection":
      return (
        <BrandCollection
          key={layout.id ?? index}
          data={layout.value}
        />
      );

    case "ProductCollection":
      return (
        <ProductCollection
          key={layout.id ?? index}
          data={layout.value}
        />
      );

    default:
      return null;
  }
}
