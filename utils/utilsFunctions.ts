import { tabs } from "./config";

export function menu(tabId: string) {
  const selectedTab = tabs.find((tab) => tab.id === tabId);
  if (!selectedTab) return;

  const menu = document.getElementById("menu-items");
  if (!menu) return;

  menu.innerHTML = Object.keys(selectedTab.dropdown || {})
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
            .map((section) => {
              if (section.type === "box" && section.boxContent) {
                const left = section.boxContent.left;
                const right = section.boxContent.right;

                return `
                          <div class="dropdown-column full-width box-column">
                            <div class="box-left">
                              <img src="${left.imgSrc}" />
                              <h4>${left.heading}</h4>
                              <p>${left.text}</p>
                              <div class="inline-buttons ${left.secondaryButton ? "two-buttons" : "single-button"
                  }">
                                <button class="button1"><a href="#">${left.primaryButton}</a></button>
                                ${left.secondaryButton
                    ? `<button class="button2"><a href="tel:1300872683" >${left.secondaryButton}</a></button>`
                    : ""
                  }
                              </div>
                            </div>
                            ${right
                    ? `
                              <div class="box-right">
                                <h4>${right.heading}</h4>
                                <p>${right.text}</p>
                                <button class="button">${right.button}</button>
                              </div>`
                    : ""
                  }
                          </div>
                        `;
              } else {
                return `
                <div class="main-dropdown">
                          <div class="dropdown-column">
                            <h4>${section.title}</h4>
<ul>
  ${section.items
                    ?.map(
                      (li) => `
        <li class="${li.includes("View all") ? "view-all-link" : ""}">
          ${li.includes("View all")
                          ? `<a href="#" class="view-all-link">${li}</a>`
                          : li}
        </li>`
                    )
                    .join("")}
</ul>
                          </div>
                    </div>
                        `;
              }
            })
            .join("")}
                </div>`
          : ""
        }
        </li>
      `;
    })
    .join("");

  // Hover styling (unchanged)
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

    .view-all-link {
    color: ${selectedTab.themeColor} !important;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
    }

    .button1 {
      background-color: ${selectedTab.themeColor};
      color: ${selectedTab.themeSecondaryColor ?? "#FFFFFF"};
    }

    .button1 a {
      text-decoration: none;
      background-color: ${selectedTab.themeColor};
      color: ${selectedTab.themeSecondaryColor ?? "#FFFFFF"};
    }



    .button2 a {
      text-decoration: none;
      color: ${selectedTab.themeSecondaryColor ?? selectedTab.themeColor};
    }

    .box-right button {
      background-color: ${selectedTab.themeSecondaryColor ?? selectedTab.themeColor};
      color: white;
    }

    .button1, .button2, .box-right button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s;
    }

    .button1:hover,
    .box-right button:hover {
      filter: brightness(1.1);
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

  const colors = selectedTab.themeSecondaryColor ?? selectedTab.themeColor;
  if (!colors) return;

  const logo = document.querySelector("#upcover-logo") as HTMLElement;
  const login = document.querySelector(".login") as HTMLElement;
  const quote = document.querySelector(".quote") as HTMLButtonElement;

  if (logo) {
    const allPaths = logo.querySelectorAll("path");
    const pathsToColor = Array.from(allPaths).filter((path) => {
      const fillAttr = path.getAttribute("fill");
      return fillAttr !== "white" && fillAttr !== "#fff" && fillAttr !== "#ffffff";
    });

    pathsToColor.forEach((path) => {
      path.style.fill = colors;
    });
  }

  if (login) {
    login.style.color = selectedTab.themeSecondaryColor ?? selectedTab.themeColor;
  }

  if (quote) {
    quote.style.backgroundColor = selectedTab.themeColor;
    quote.style.color = selectedTab.themeSecondaryColor ?? "#FFFFFF";
  }

  document.body.style.backgroundColor = "white";

  document.dispatchEvent(new CustomEvent("activeTabChanged", {
    detail: { tabId }
  }));
}


export function renderHeroBottomImage(imageUrl: string) {
  const existing = document.querySelector(".hero-bottom-image");
  if (existing) existing.remove();

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Hero Bottom";
  img.className = "hero-bottom-image";

  document.body.appendChild(img);
}


