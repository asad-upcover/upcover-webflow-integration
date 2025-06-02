import { tabs } from "./config";

export function menu(tabId: string) {
  const selectedTab = tabs.find((tab) => tab.id === tabId);
  if (!selectedTab) return;
  const menu = document.getElementById("menu-items");

  if (menu) {
    menu.innerHTML = selectedTab.menuItems
      .map((item) => {
        const dropdownSections = selectedTab.dropdown?.[item];
        const hasDropdown = dropdownSections && dropdownSections.length > 0;

        return `
          <li class="menu-item ${hasDropdown ? "dropdown" : ""}">
            <p class="menu-text">${item}</p>
            <span class="menu-icon">${selectedTab.svg}</span>
            ${
              hasDropdown
                ? `<div class="dropdown-menu three-column">
                    ${dropdownSections
                      .map(
                        (section) => `
                      <div class="dropdown-column">
                        <h4>${section.title}</h4>
                        <ul>
                          ${section.items.map((li) => `<li>${li}</li>`).join("")}
                        </ul>
                      </div>`
                      )
                      .join("")}
                  </div>`
                : ""
            }
          </li>
        `;
      })
      .join("");
  }

  // Set hover styles
  const hoverStyleId = "dynamic-hover-style";
  let styleTag = document.getElementById(hoverStyleId) as HTMLStyleElement;

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = hoverStyleId;
    document.head.appendChild(styleTag);
  }

  const hoverColor = selectedTab.themeSecondaryColor ?? selectedTab.themeColor;

  styleTag.innerHTML = `
    .menu-item:hover {
      color: ${hoverColor} !important;
    }

    .menu-item:hover .menu-icon path {
      stroke: ${hoverColor} !important;
    }
  `;
}

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
