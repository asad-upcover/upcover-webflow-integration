import { tabs } from "../config";

export function setActiveTab(tabId: string) {
  const selectedTab = tabs.find((tab) => tab.id === tabId);
  if (!selectedTab) return;

  // Update active tab styling
  document.querySelectorAll(".tabs button").forEach((btn) => {
    const button = btn as HTMLButtonElement;
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  const colors = selectedTab?.themeSecondaryColor ?? selectedTab.themeColor;
  if (!colors) return;

  const logo = document?.querySelector("#upcover-logo") as HTMLElement;
  const login = document.querySelector(".login") as HTMLElement;
  const quote = document.querySelector(".quote") as HTMLButtonElement;

  if (logo) {
    const allPaths = logo.querySelectorAll("path");
    const pathsToColor = Array.from(allPaths).filter((path) => {
      const fillAttr = path.getAttribute("fill");
      return (
        fillAttr !== "white" && fillAttr !== "#fff" && fillAttr !== "#ffffff"
      );
    });

    pathsToColor.forEach((path) => {
      path.style.fill =  colors;
    });
  }

  if (login)
    login.style.color = selectedTab?.themeSecondaryColor ?? selectedTab.themeColor;

  if (quote) {
    quote.style.backgroundColor = selectedTab.themeColor;
    quote.style.color = selectedTab?.themeSecondaryColor ?? "#FFFFFF";
  }

  document.body.style.backgroundColor = "white";
}