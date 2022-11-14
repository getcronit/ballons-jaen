import { useJaenPageIndex } from "@jaenjs/jaen";

export const useContentPages = () => {
  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /",
  });

  const templates = ["ContentPage1", "ContentPage2"]


  const children = index.children.filter(
    (child) => templates.includes(child.template!) && !child.deleted
  );

  index.children = children;

  return index;
};
