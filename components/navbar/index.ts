import "./style.css";

import { defaultTab } from "../../utils/config";
import { upcoverLogo } from "../assets/svgicons";

function renderNavBar() {
  const target = document.getElementById("navbar");
  if (!target) return;


  const leftNavbar = document.createElement("div");
  leftNavbar.className = "navbar-left";

  // Create upcover logo container
  const logoDiv = document.createElement("div");
  logoDiv.className = "UPCOVER-LOGO";
  logoDiv.id = "upcover-logo";
  logoDiv.innerHTML = upcoverLogo;
  leftNavbar.appendChild(logoDiv);

    // 2. Render the menu after the logo
  const menuComponent = document.createElement('ul');
  menuComponent.id = "menu-items";
  if (Array.isArray(menuComponent)) {
    menuComponent.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
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
  if (defaultTab?.themeColor) quoteButton.style.backgroundColor = defaultTab.themeColor; // Default themeColor
  quoteButton.className = "quote";
  quoteButton.innerText = "GET A QUOTE";

  // Append elements
  actionsDiv.appendChild(loginLink);
  actionsDiv.appendChild(quoteButton);
  target.appendChild(leftNavbar);
  target.appendChild(actionsDiv);
}

// Auto-run on load
document.addEventListener("DOMContentLoaded", renderNavBar);
