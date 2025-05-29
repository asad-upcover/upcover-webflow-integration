import "./style.css";

import { defaultTab } from "../config";

function renderNavBar() {
  const target = document.getElementById("navbar");
  if (!target) return;


  const leftNavbar = document.createElement("div");
  leftNavbar.className = "navbar-left";

  // Create upcover logo container
  const logoDiv = document.createElement("div");
  logoDiv.className = "UPCOVER-LOGO";
  logoDiv.id = "upcover-logo";
  logoDiv.innerHTML = `
    <!-- Insert your full SVG here -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="162"
      height="28"
      viewBox="0 0 162 28"
    >
      <g clip-path="url(#clip0_3711_13164)">
        <mask
          id="mask0_3711_13164"
          style="mask-type: luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="162"
          height="28"
        >
          <path d="M161.576 0H0V28H161.576V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_3711_13164)">
          <path
            d="M161.576 10.4706V4.75834C158.926 4.79016 156.691 6.70623 155.766 10.0259V5.23654H150.498V22.2526H156.117V13.002C156.117 11.6 157.253 10.4641 158.655 10.4641H161.459C161.499 10.4641 161.537 10.4682 161.576 10.4698V10.4706ZM137.931 14.0481H148.882C148.882 8.04616 145.53 4.75752 140.741 4.75752C135.665 4.75752 131.994 8.36524 131.994 13.7609C131.994 19.1566 135.505 22.7316 140.773 22.7316C145.019 22.7316 148.244 20.3055 149.074 16.1233H146.105C145.562 18.1349 143.998 19.3157 142.145 19.3157C139.719 19.3157 138.091 17.6559 137.931 14.0481ZM137.996 11.3985C138.315 8.71695 139.272 7.56715 140.614 7.56715C141.955 7.56715 142.88 8.71613 143.072 11.3985H137.996ZM126.875 22.2534L132.844 5.23735H128.695L125.151 17.5922L121.383 5.23735H115.285L121.192 22.2534H126.875ZM115.982 13.6018C115.982 8.17428 112.375 4.75834 107.298 4.75834C102.221 4.75834 98.3591 8.23793 98.3591 13.8254C98.3591 19.4128 101.967 22.7325 107.074 22.7325C112.182 22.7325 115.982 19.221 115.982 13.6018ZM109.98 13.8254C109.98 18.2948 108.799 19.8592 107.234 19.8592C105.574 19.8592 104.329 18.1031 104.329 13.6018C104.329 9.10049 105.511 7.63162 107.139 7.63162C108.767 7.63162 109.98 9.35591 109.98 13.8254ZM86.462 13.5373C86.462 9.22698 87.6428 7.6308 89.0799 7.6308C90.2925 7.6308 91.2187 8.81161 91.4741 11.8767H96.9016C96.4226 7.59897 93.3257 4.75752 89.0154 4.75752C84.195 4.75752 80.4918 8.33341 80.4918 13.8246C80.4918 19.3157 84.0351 22.7316 89.0154 22.7316C93.3257 22.7316 96.5181 20.0183 97.2525 15.708H94.4747C93.9639 18.0704 92.4313 19.3157 90.5161 19.3157C88.09 19.3157 86.462 17.5277 86.462 13.5373ZM79.2082 13.5055C79.2082 7.98251 76.4304 4.75752 72.6636 4.75752C70.2693 4.75752 68.3532 5.97097 67.5233 8.07799V5.23654H62.3831V27.9992H68.0023V20.1456C68.9604 21.8054 70.6202 22.7316 72.5999 22.7316C76.2713 22.7316 79.2082 19.2202 79.2082 13.5055ZM73.2062 13.889C73.2062 18.0394 72.1209 19.6038 70.5247 19.6038C69.024 19.6038 68.0023 18.263 68.0023 15.7724V11.6857C68.0023 9.09967 69.0877 7.88622 70.3648 7.88622C71.9928 7.88622 73.2062 9.45057 73.2062 13.8882V13.889ZM55.3635 22.2534H60.5037V5.23735H54.8845V15.3897C54.8845 17.784 53.8628 19.1574 52.4266 19.1574C50.9903 19.1574 50.2232 18.1675 50.2232 16.1886V5.23735H44.604V16.7623C44.604 20.37 46.7747 22.7325 50.0315 22.7325C52.4894 22.7325 54.4691 21.3599 55.3627 19.0611V22.2534H55.3635ZM35.3697 10.3156V0H30.1592V10.3156C30.1592 17.194 24.5637 22.7896 17.6852 22.7896C10.8068 22.7896 5.21042 17.194 5.21042 10.3156V0H0V10.3156C0 20.0673 7.93355 28 17.6844 28C27.4353 28 35.3689 20.0665 35.3689 10.3156H35.3697ZM28 10.3156H22.7896C22.7896 13.1301 20.4998 15.4199 17.6844 15.4199C14.8691 15.4199 12.5801 13.1301 12.5801 10.3156C12.5801 7.50105 14.8699 5.21124 17.6844 5.21124V0C11.9966 0 7.36967 4.62777 7.36967 10.3156C7.36967 16.0034 11.9974 20.6312 17.6852 20.6312C23.373 20.6312 28.0008 16.0034 28.0008 10.3156H28Z"
            fill="${defaultTab.themeColor}"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3711_13164">
          <rect width="161.576" height="28" />
        </clipPath>
      </defs>
    </svg>
  `;
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
