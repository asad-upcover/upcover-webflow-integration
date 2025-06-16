// import "./style.css";
import { upcoverLogo, arrowDownIcon } from "../../assets/svgicons";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarConfig {
  logo?: string;
  menuItems?: MenuItem[];
  themeColor?: string;
  loginText?: string;
  quoteText?: string;
}

export class NavbarWidget {
  private config: NavbarConfig;
  private target: HTMLElement;

  constructor(config: NavbarConfig = {}) {
    this.config = {
      logo: upcoverLogo,
      menuItems: config.menuItems || [
        { label: "Coverages", href: "#" },
        { label: "Company", href: "#" },
        { label: "Resources", href: "#" },
      ],
      themeColor: config.themeColor || "#FF522D",
      loginText: config.loginText || "LOGIN",
      quoteText: config.quoteText || "GET A QUOTE"
    };

    this.target = document.createElement("div");
    this.target.id = "navbar";
    this.createStyles();
    this.render();
  }

  private createStyles(): void {
    const style = document.createElement("style");
    style.innerHTML = `
      .header,
      .navbar {
        position: relative;
        z-index: 100;
      }

      #navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 60px;
      }

      .navbar-left {
        display: flex;
        align-items: center;
      }

      .actions {
        display: flex;
        gap: 30px;
        align-items: center;
      }

      .login {
        font-weight: bold;
        text-decoration: none;
        font-size: 16px;
      }

      .quote {
        color: white;
        border: none;
        padding: 20px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
      }

      .UPCOVER-LOGO {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #upcover-logo path {
        pointer-events: none;
        transition: all 0.3s ease;
      }

      /* Menu item */
      .menu-item {
        margin-left: 20px;
        padding: 45px 0px 40px 0px;
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 6px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 600;
      }

      .menu-item a {
        text-decoration: none;
        color: #242826;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .menu-icon {
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
      }

      .menu-item:hover .menu-icon {
        transform: rotate(180deg);
      }

      .menu-item:hover a {
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      #menu-items {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        margin-left: 20px;
        list-style: none;
      }

      /* Initially hidden dropdown */
      .dropdown-menu.three-column {
        display: none;
        position: fixed;
        margin-top: 60px;
        left: 0;
        width: 100vw;
        padding: 40px 60px;
        transition: 0.4s ease all;
        background-color: white;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        flex-direction: row;
      }

      /* Show on hover of menu item */
      .menu-item.dropdown:hover .dropdown-menu.three-column {
        display: flex;
      }

      .dropdown-column {
        flex: 1;
        min-width: 150px;
      }

      .dropdown-column h4 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #242826;
      }

      .dropdown-column ul {
        font-weight: 400;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .dropdown-column ul li {
        margin-bottom: 20px;
        font-size: 14px;
        color: #555;
        cursor: pointer;
        transition: color 0.3s;
      }

      .dropdown-column ul li:hover {
        color: #000;
      }
    `;
    document.head.appendChild(style);
  }

  private createLogo(): HTMLElement {
    const logoDiv = document.createElement("div");
    logoDiv.className = "UPCOVER-LOGO";
    logoDiv.id = "upcover-logo";
    logoDiv.innerHTML = this.config.logo!;
    return logoDiv;
  }

  private createMenu(): HTMLElement {
    const menuComponent = document.createElement('ul');
    menuComponent.id = "menu-items";
    
    this.config.menuItems!.forEach(item => {
      const li = document.createElement('li');
      li.className = "menu-item";
      
      const a = document.createElement('a');
      a.href = item.href;
      a.innerHTML = `
        ${item.label}
        <span class="menu-icon">${arrowDownIcon}</span>
      `;
      
      li.appendChild(a);
      menuComponent.appendChild(li);
    });

    return menuComponent;
  }

  private createActions(): HTMLElement {
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const loginLink = document.createElement("a");
    loginLink.href = "#";
    loginLink.style.color = this.config.themeColor || "#FF522D";
    loginLink.className = "login";
    loginLink.innerText = this.config.loginText || "LOGIN";

    const quoteButton = document.createElement("button");
    quoteButton.style.backgroundColor = this.config.themeColor || "#FF522D";
    quoteButton.className = "quote";
    quoteButton.innerText = this.config.quoteText || "GET A QUOTE";

    actionsDiv.appendChild(loginLink);
    actionsDiv.appendChild(quoteButton);

    return actionsDiv;
  }

  public render(): void {
    this.target.innerHTML = "";

    const leftNavbar = document.createElement("div");
    leftNavbar.className = "navbar-left";

    leftNavbar.appendChild(this.createLogo());
    leftNavbar.appendChild(this.createMenu());

    this.target.appendChild(leftNavbar);
    this.target.appendChild(this.createActions());
  }

  public updateConfig(newConfig: Partial<NavbarConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.render();
  }

  public mount(container: HTMLElement): void {
    container.appendChild(this.target);
  }
}
