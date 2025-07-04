import { callIcon } from "../../assets/svgicons";
import { ThemeManager } from "../../themes/theme";
import { upcoverLogoBusiness, upcoverLogoTech, upcoverLogoMotor } from "../../assets/svgicons";

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
  defaultTab?: 'business' | 'tech' | 'motor';
}

export class AppBarWidget {
  tabs: Tab[];
  branding: Branding;
  private themeManager: ThemeManager;
  private defaultTab: 'business' | 'tech' | 'motor';

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

    // Subscribe to theme changes for logo updates
    this.themeManager.subscribe((theme) => {
      this.updateLogo(theme);
    });

    // Store defaultTab from config
    this.defaultTab = config.defaultTab || 'business';
  }

  mount(target: HTMLElement) {
    const style = document.createElement("style");
    style.innerHTML = `
        #appbar {
          display: flex;
          justify-content: space-between;
          align-content: center;
          background-color: #F8F7F7;
          font-size: 0.9rem;
          padding: 0 60px;
        }
        .tabs button {
          background: none;
          border: none;
          font-weight: 700;
          cursor: pointer;
          padding: 31px 20px 27px 20px;
          color: #545464;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease, background-color 0.3s ease;
          // max-height: 70px;
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
          color: #242826;
          font-size: 16px;
        }
        .contact a {
          text-decoration: none;
          color: #242826;
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
          color: #242826;
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

    const appbar = document.createElement("div");
    appbar.id = "appbar";

    // Create a div for tabs
    const tabsDiv = document.createElement("div");
    tabsDiv.className = "tabs";
    tabsDiv.innerHTML = this.tabs
      .map((tab) => `<button data-tab="${tab.id}">${tab.label}</button>`)
      .join("");

    appbar.appendChild(tabsDiv);

    // Set active tab based on current URL or default to business
    const currentPath = window.location.pathname;
    const pathToTab = {
      "/business-sole-traders": "business",
      "/tech-startups-enterprises": "tech",
      "/motor-fleet": "motor"
    };
    let activeTabId = pathToTab[currentPath as keyof typeof pathToTab] || this.defaultTab;

    // Set the active tab and theme
    tabsDiv.querySelectorAll("button").forEach((button) => {
      if (button.dataset.tab === activeTabId) {
        button.classList.add("active");
        this.themeManager.setTheme(activeTabId as any);
        this.updateLogo(activeTabId);
      }
      button.addEventListener("click", () => {
        tabsDiv
          .querySelectorAll("button")
          .forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        const tabId = button.dataset.tab;
        if (tabId) {
          this.themeManager.setTheme(tabId as any);
          // Add page navigation based on tab (without '/tabs' in the URL)
          const routes = {
            business: "/business-sole-traders",
            tech: "/tech-startups-enterprises",
            motor: "/motor-fleet"
          };
          window.location.href = routes[tabId as keyof typeof routes] || "/";
        }
      });
    });

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
          activeRegion === region.code ? "900" : "700";
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
    const phoneText = document.createElement("span");
    phoneText.textContent = this.branding.contactPhone;
    phoneText.style.fontWeight = "600";
    phoneText.style.color = "#242826";
    phoneContainer.appendChild(phoneLink);
    phoneContainer.appendChild(phoneText);

    contactContainer.appendChild(regionSwitcher);
    contactContainer.appendChild(phoneContainer);

    appbar.appendChild(contactContainer);
    target.appendChild(appbar);
    document.body.insertBefore(target, document.body.firstChild);
  }

  updateLogo(theme: string) {
    const logoDiv = document.querySelector("#upcover-logo") as HTMLElement;
    if (!logoDiv) return;

    switch (theme) {
      case "business":
        logoDiv.innerHTML = upcoverLogoBusiness;
        break;
      case "tech":
        logoDiv.innerHTML = upcoverLogoTech;
        break;
      case "motor":
        logoDiv.innerHTML = upcoverLogoMotor;
        break;
      default:
        logoDiv.innerHTML = upcoverLogoBusiness;
    }
  }
}
