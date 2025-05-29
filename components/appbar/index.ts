import "./style.css";
import { branding, tabs } from "../config";

function setActiveTab(tabId: string) {
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
            ${item}
            <span class="menu-icon">${selectedTab.svg}</span>
            ${hasDropdown
            ? `<div class="dropdown-menu three-column">
                    ${dropdownSections
              .map(
                (section) => `
                      <div class="dropdown-column">
                        <h4>${section.title}</h4>
                        <ul>
                          ${section.items
                    .map((li) => `<li>${li}</li>`)
                    .join("")}
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

  const hoverColor =
    selectedTab.id === "motor" ? "black" : selectedTab.themeColor;

  styleTag.innerHTML = `
    .menu-item:hover {
      color: ${hoverColor} !important;
    }

    .menu-item:hover .menu-icon path {
      stroke: ${hoverColor} !important;
    }
  `;

  // Update active tab styling
  document.querySelectorAll(".tabs button").forEach((btn) => {
    const button = btn as HTMLButtonElement;
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  const colors = selectedTab.themeColor;
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
      path.style.fill = selectedTab.id === "motor" ? "#3B4125" : colors;
    });
  }

  if (login)
    login.style.color =
      selectedTab.id === "motor" ? "black" : selectedTab.themeColor;

  if (quote) {
    quote.style.backgroundColor = selectedTab.themeColor;
    quote.style.color = selectedTab.id === "motor" ? "black" : "white";
  }

  document.body.style.backgroundColor = "white";
}

function renderAppBar() {
  const appbar = document.getElementById("appbar");
  if (!appbar) return;

  const tabContainer = document.createElement("div");
  tabContainer.className = "tabs";

  if (tabContainer) {
    tabContainer.innerHTML = tabs
      .map((tab) => `<button data-tab="${tab.id}">${tab.label}</button>`)
      .join("");
  }

  appbar.appendChild(tabContainer);

  tabContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = (button as HTMLButtonElement).dataset.tab;
      if (tabId) setActiveTab(tabId);
    });
  });

  if (tabs.length > 0) setActiveTab(tabs[0].id);

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact";

  // --- Region Switcher ---
  let activeRegion = localStorage.getItem("activeRegion") || branding.contactRegion[0].code;

  const renderRegionSwitcher = () => {
    regionSwitcher.innerHTML = "";
    branding.contactRegion.forEach((region, idx) => {
      const regionLink = document.createElement("a");
      regionLink.href = region.url;
      regionLink.textContent = region.label;
      regionLink.style.fontWeight = activeRegion === region.code ? "900" : "100";
      regionLink.style.textDecoration = "none";
      regionLink.style.color = "inherit";
      regionLink.target = "_blank";
      regionLink.rel = "noopener noreferrer";
      regionLink.addEventListener("click", (e) => {
        localStorage.setItem("activeRegion", region.code);
        activeRegion = region.code;
        renderRegionSwitcher(); // Re-render to update font weight
        // Let the link open in new tab
      });
      regionSwitcher.appendChild(regionLink);
      if (idx < branding.contactRegion.length - 1) {
        regionSwitcher.appendChild(document.createTextNode(" | "));
      }
    });
  };

  const regionSwitcher = document.createElement("span");
  regionSwitcher.className = "contact-region-switcher";
  renderRegionSwitcher();

  // --- Phone ---
  const phoneContainer = document.createElement("span");
  phoneContainer.className = "contact-phone-container";
  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${branding.contactPhone.replace(/\s+/g, "")}`;
  phoneLink.innerHTML = branding.svg;
  phoneLink.className = "contact-phone-svg";
  const phoneText = document.createTextNode(branding.contactPhone);
  phoneContainer.appendChild(phoneLink);
  phoneContainer.appendChild(phoneText);

  contactContainer.appendChild(regionSwitcher);
  contactContainer.appendChild(phoneContainer);
  appbar.appendChild(contactContainer);
}

document.addEventListener("DOMContentLoaded", () => {
  renderAppBar();

  // Wait until DOM is ready, then activate default tab
  requestAnimationFrame(() => {
    if (tabs.length > 0) setActiveTab(tabs[0].id);
  });
});
