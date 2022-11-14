import { useJaenPageIndex } from "@jaenjs/jaen";
import { useJaenPageContext } from "@jaenjs/jaen/src/internal-plugins/pages/internal/services/page";

export const useNewsPages = () => {
  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /news/",
  });

  // override index children to exclude a blog page if it is the current page
  const { jaenPage } = useJaenPageContext();

  const children = index.children.filter(
    (child) => child.id !== jaenPage.id && !child.deleted
  );

  index.children = children;

  return index;
};
