import { callIcon } from "../../assets/svgicons";
import { ThemeManager } from "../../themes/theme";

interface Tab {
  id: string;
  label: string;
  themeColor?: string;
}

interface Branding {
  contactPhone: string;
  contactRegion: { label: string; code: string; url: string }[];
}

export interface AppBarWidgetConfig {
  tabs?: Tab[];
  branding?: Branding;
  themeColors?: {
    business?: string;
    tech?: string;
    motor?: string;
  };
}

export class AppBarWidget {
  tabs: Tab[];
  branding: Branding;
  private themeManager: ThemeManager;

  constructor(config: AppBarWidgetConfig = {}) {
    this.tabs = config.tabs || [
      { id: "business", label: "Business Sole" },
      { id: "tech", label: "Tech Industry" },
      { id: "motor", label: "Fleet Services" },
    ];

    this.branding = config.branding || {
      contactPhone: "1300 872 683",
      contactRegion: [
        { label: "AU", code: "AU", url: "#" },
        { label: "NZ", code: "NZ", url: "#" },
      ],
    };

    this.themeManager = ThemeManager.getInstance();

    // Set custom theme colors if provided
    if (config.themeColors) {
      this.themeManager.setCustomColors(config.themeColors);
    }
  }

  mount(target: HTMLElement) {
    const style = document.createElement("style");
    style.innerHTML = `
        #appbar {
          display: flex;
          justify-content: space-between;
          align-content: center;
          background-color: #f5f0eb;
          font-size: 0.9rem;
          padding: 0 60px;
        }
        .tabs button {
          background: none;
          border: none;
          font-weight: bold;
          cursor: pointer;
          padding: 30px 20px;
          color: #545464;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease, background-color 0.3s ease;
        }
          @media screen and (max-width: 1010px){
          .tabs button{
          font-size: 13px
          }
          }

        .tabs button.active {
          background-color: #ffffff;
          color: #242826;
        }
        .tabs button.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #242826;
          border-radius: 2px;
        }
        .contact {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-weight: 600;
          color: #333;
          font-size: 16px;
        }
        .contact a {
          text-decoration: none;
          color: #333;
        }
        .contact-phone-container {
          background-color: white;
          padding: 10px 14px;
          border-radius: 10px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          font-size: 16px;
          gap: 10px;
        }
        .contact-region-switcher {
          font-weight: 700;
        }
        .contact-phone-svg{
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `;
    document.head.appendChild(style);

    // if (!target) {
    //   appbar = document.createElement("div");
    //   appbar.id = "appbar";
    //   document.body.insertBefore(appbar, document.body.firstChild);
    // } else {
    //   appbar.innerHTML = ""; // Clear existing content
    // }

    const tabContainer = document.createElement("div");
    tabContainer.className = "tabs";
    tabContainer.innerHTML = this.tabs
      .map((tab) => `<button data-tab="${tab.id}">${tab.label}</button>`)
      .join("");

    tabContainer.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        tabContainer
          .querySelectorAll("button")
          .forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        const tabId = button.dataset.tab;
        if (tabId) {
          this.themeManager.setTheme(tabId as any);
        }
        console.log("Tab clicked:", tabId);
      });
    });

    // Set first tab as active by default
    if (this.tabs.length > 0) {
      const firstButton = tabContainer.querySelector("button");
      if (firstButton) {
        firstButton.classList.add("active");
      }
    }

    const contactContainer = document.createElement("div");
    contactContainer.className = "contact";

    const regionSwitcher = document.createElement("span");
    regionSwitcher.className = "contact-region-switcher";
    let activeRegion =
      localStorage.getItem("activeRegion") ||
      this.branding.contactRegion[0].code;

    const renderRegionSwitcher = () => {
      regionSwitcher.innerHTML = "";
      this.branding.contactRegion.forEach((region, idx) => {
        const regionLink = document.createElement("a");
        regionLink.href = region.url;
        regionLink.textContent = region.label;
        regionLink.style.fontWeight =
          activeRegion === region.code ? "900" : "600";
        regionLink.addEventListener("click", (e) => {
          localStorage.setItem("activeRegion", region.code);
          activeRegion = region.code;
          renderRegionSwitcher();
        });
        regionSwitcher.appendChild(regionLink);
        if (idx < this.branding.contactRegion.length - 1) {
          regionSwitcher.appendChild(document.createTextNode(" | "));
        }
      });
    };
    renderRegionSwitcher();

    const phoneContainer = document.createElement("span");
    phoneContainer.className = "contact-phone-container";
    const phoneLink = document.createElement("a");
    phoneLink.href = `tel:${this.branding.contactPhone.replace(/\s+/g, "")}`;
    phoneLink.innerHTML = callIcon;
    phoneLink.className = "contact-phone-svg";
    const phoneText = document.createTextNode(this.branding.contactPhone);
    phoneContainer.appendChild(phoneLink);
    phoneContainer.appendChild(phoneText);

    contactContainer.appendChild(regionSwitcher);
    contactContainer.appendChild(phoneContainer);

    target.appendChild(tabContainer);
    target.appendChild(contactContainer);
  }
}
