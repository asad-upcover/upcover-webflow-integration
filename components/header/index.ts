import "./style.css";
import "../appbar/style.css";
import "../navbar/style.css";

import { defaultTab, branding, tabs } from "../../utils/config";
import { menu, setActiveTab } from "../../utils/utilsFunctions";
import { upcoverLogo } from "../../assets/svgicons";

function renderHeader() {
  const header = document.getElementById("header");

  if (!header) return;

  // Add styles to header via class
  header.classList.add("header");

  // Create and append appbar
  const appbar = document.createElement("div");
  appbar.id = "appbar";
  header.appendChild(appbar);

  // Create and append navbar
  const navbar = document.createElement("nav");
  navbar.id = "navbar";
  header.appendChild(navbar);
}

function renderNavBar() {
  const target = document.getElementById("navbar");
  if (!target) return;

  const leftNavbar = document.createElement("div");
  leftNavbar.className = "navbar-left";

  // Create upcover logo container
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.id = "upcover-logo";
  logoDiv.innerHTML = upcoverLogo;
  leftNavbar.appendChild(logoDiv);

  // 2. Render the menu after the logo
  const menuComponent = document.createElement("ul");
  menuComponent.id = "menu-items";
  if (Array.isArray(menuComponent)) {
    menuComponent.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.innerText = item.label;
      li.appendChild(a);
      menuComponent.appendChild(li);
    });
  }
  leftNavbar.appendChild(menuComponent);

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  // Create login link
  const loginLink = document.createElement("a");
  loginLink.href = "#";
  if (defaultTab?.themeColor) loginLink.style.color = defaultTab.themeColor; // Default themeColor
  loginLink.className = "login";
  loginLink.innerText = "LOGIN";

  // Create quote button
  const quoteButton = document.createElement("button");
  if (defaultTab?.themeColor)
    quoteButton.style.backgroundColor = defaultTab.themeColor; // Default themeColor
  quoteButton.className = "quote";
  quoteButton.innerText = "GET A QUOTE";

  // Append elements
  actionsDiv.appendChild(loginLink);
  actionsDiv.appendChild(quoteButton);
  target.appendChild(leftNavbar);
  target.appendChild(actionsDiv);
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
      if (tabId) {
        setActiveTab(tabId);
        menu(tabId);
      }
    });
  });

  if (tabs.length > 0) setActiveTab(tabs[0].id);

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact";

  // --- Region Switcher ---
  let activeRegion =
    localStorage.getItem("activeRegion") || branding.contactRegion[0].code;

  const renderRegionSwitcher = () => {
    regionSwitcher.innerHTML = "";
    branding.contactRegion.forEach((region, idx) => {
      const regionLink = document.createElement("a");
      regionLink.href = region.url;
      regionLink.textContent = region.label;
      regionLink.style.fontWeight =
        activeRegion === region.code ? "900" : "600";
      regionLink.style.textDecoration = "none";
      regionLink.style.color = "inherit";
      regionLink.target = "";
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

// document.addEventListener("DOMContentLoaded", );

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderAppBar();
  renderNavBar();

  // // Wait until DOM is ready, then activate default tab
  requestAnimationFrame(() => {
    if (tabs.length > 0) menu(tabs[0].id);
  });
});
