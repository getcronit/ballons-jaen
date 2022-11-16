import { useIsEditing, useWidget } from "@jaenjs/jaen";
import { extractUrlsFromMarkdown } from "./BottomNav";

export const useJaenNavigation = () => {
  const isEditing = useIsEditing();

  const menuWidget = useWidget<{
    markdown: string;
  }>("menu");

  const markdown = menuWidget?.data?.markdown ||
    `
  [Home](/)
  `;

  const navLinks: {
    label: string;
    to: string;
  }[] = extractUrlsFromMarkdown(markdown);

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => menuWidget.writeData({ markdown }),
  };
};
