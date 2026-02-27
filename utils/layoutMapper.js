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
          config={layout.data}
        />
      );

    case "BrandCollection":
      return (
        <BrandCollection
          key={layout.id ?? index}
          data={layout.value}
          config={layout.data}
        />
      );

    case "ProductCollection":
      return (
        <ProductCollection
          key={layout.id ?? index}
          data={layout.value}
          config={layout.data}
        />
      );

    default:
      return null;
  }
}
