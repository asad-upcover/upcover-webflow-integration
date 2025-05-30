import "./style.css";
import { branding, tabs } from "../../utils/config";
import { menu, setActiveTab } from "../../utils/utilsFunctions";

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
  let activeRegion = localStorage.getItem("activeRegion") || branding.contactRegion[0].code;

  const renderRegionSwitcher = () => {
    regionSwitcher.innerHTML = "";
    branding.contactRegion.forEach((region, idx) => {
      const regionLink = document.createElement("a");
      regionLink.href = region.url;
      regionLink.textContent = region.label;
      regionLink.style.fontWeight = activeRegion === region.code ? "900" : "600";
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
    if (tabs.length > 0) menu(tabs[0].id);
  });
});
