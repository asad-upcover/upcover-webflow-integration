// import "./style.css";
import { upcoverLogoBusiness, upcoverLogoTech, upcoverLogoMotor, arrowDownIcon } from "../../assets/svgicons";
import { ThemeManager } from "../../utils/theme";

interface MenuItem {
  label: string;
  href: string;
  dropdown?: {
    title: string;
    items: string[];
  }[];
}

interface NavbarConfig {
  logo?: string;
  menuItems?: {
    business: MenuItem[];
    tech: MenuItem[];
    motor: MenuItem[];
  };
  themeColor?: string;
  loginText?: string;
  quoteText?: string;
}

export class NavbarWidget {
  private config: NavbarConfig;
  private target: HTMLElement;
  private themeManager: ThemeManager;

  constructor(config: NavbarConfig = {}) {
    this.config = {
      logo: upcoverLogoBusiness,
      menuItems: config.menuItems || {
        business: [
          { label: "Coverages", href: "#" },
          { label: "Company", href: "#" },
          { label: "Resources", href: "#" },
        ],
        tech: [
          { label: "Coverages", href: "#" },
          { label: "Company", href: "#" },
          { label: "Resources", href: "#" },
        ],
        motor: [
          { label: "Coverages", href: "#" },
          { label: "Company", href: "#" },
          { label: "Resources", href: "#" },
        ]
      } as NavbarConfig['menuItems'],
      themeColor: config.themeColor || "#FF522D",
      loginText: config.loginText || "LOGIN",
      quoteText: config.quoteText || "GET A QUOTE"
    };

    this.target = document.createElement("div");
    this.target.id = "navbar";
    this.themeManager = ThemeManager.getInstance();
    this.createStyles();

    // Subscribe to theme changes
    this.themeManager.subscribe((theme) => {
      this.updateLogo(theme);
      this.updateMenuItems(theme);
    });

    this.render();
  }

  private getMenuItemsForTheme(theme: string): MenuItem[] {
    if (!this.config.menuItems) return [];
    return this.config.menuItems[theme as keyof typeof this.config.menuItems] || [];
  }

  private updateLogo(theme: string) {
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

  private updateMenuItems(theme: string) {
    const menuComponent = document.getElementById("menu-items");
    if (!menuComponent) return;

    const menuItems = this.getMenuItemsForTheme(theme);
    menuComponent.innerHTML = '';

    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.className = item.dropdown ? "menu-item dropdown" : "menu-item";

      const a = document.createElement('a');
      a.href = item.href;
      a.innerHTML = `
        ${item.label}
        <span class="menu-icon">${arrowDownIcon}</span>
      `;

      li.appendChild(a);

      if (item.dropdown) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu three-column';

        item.dropdown.forEach(section => {
          const column = document.createElement('div');
          column.className = 'dropdown-column';

          const title = document.createElement('h4');
          title.textContent = section.title;

          const list = document.createElement('ul');
          section.items.forEach(listItem => {
            const li = document.createElement('li');
            li.textContent = listItem;
            // Style "View all" items with theme color
            if (listItem.toLowerCase().includes('view all')) {
              li.style.cssText = `
                color: ${this.themeManager.getCurrentColor()};
                text-decoration: underline;
                font-weight: 700;
                text-underline-offset: 4px;
              `;
            }
            list.appendChild(li);
          });

          column.appendChild(title);
          column.appendChild(list);
          dropdownMenu.appendChild(column);
        });

        li.appendChild(dropdownMenu);
      }

      menuComponent.appendChild(li);
    });
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

      @media screen and (max-width: 1010px) {
        .login {
          font-size: 13px;
        }
        .quote {
          padding: 15px;
          font-size: 13px;
        }
        #menu-items {
          margin-left: 0px;
        } 
        #upcover-logo {
          width: 150px;
        }
        .menu-item {
          padding: 40px 0px;
        }
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
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        flex-direction: row;
      }

      /* Show on hover of menu item */
      .menu-item.dropdown:hover .dropdown-menu.three-column {
        display: flex;
      }

      .dropdown-column {
        flex: 1;
        min-width: 150px;
        max-width: 285px;
        margin-right: 60px;
      }

      .dropdown-column h4 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 30px;
        color: #242826;
      }

      .dropdown-column ul {
        font-weight: 400;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .dropdown-column ul li {
        margin-bottom: 30px;
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

  private createActions(): HTMLElement {
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const loginLink = document.createElement("a");
    loginLink.href = "#";
    loginLink.style.color = this.themeManager.getCurrentColor();
    loginLink.className = "login";
    loginLink.innerText = this.config.loginText || "LOGIN";

    const quoteButton = document.createElement("button");
    quoteButton.style.backgroundColor = this.themeManager.getCurrentColor();
    quoteButton.className = "quote";
    quoteButton.innerText = this.config.quoteText || "GET A QUOTE";

    // Set initial text color based on theme
    const currentTheme = this.themeManager.getCurrentTheme();
    if (currentTheme === 'motor') {
      loginLink.style.color = '#3B4125';
      quoteButton.style.color = '#3B4125';
    } else {
      loginLink.style.color = this.themeManager.getCurrentColor();
      quoteButton.style.color = 'white';
    }

    // Subscribe to theme changes
    this.themeManager.subscribe((theme) => {
      const newColor = this.themeManager.getCurrentColor();
      loginLink.style.color = theme === 'motor' ? '#3B4125' : newColor;
      quoteButton.style.backgroundColor = newColor;
      quoteButton.style.color = theme === 'motor' ? '#3B4125' : 'white';
    });

    actionsDiv.appendChild(loginLink);
    actionsDiv.appendChild(quoteButton);

    return actionsDiv;
  }

  public render(): void {
    this.target.innerHTML = "";

    const leftNavbar = document.createElement("div");
    leftNavbar.className = "navbar-left";

    leftNavbar.appendChild(this.createLogo());

    // Create menu container and items
    const menuComponent = document.createElement('ul');
    menuComponent.id = "menu-items";

    // Get current theme and create menu items
    const currentTheme = this.themeManager.getCurrentTheme();
    const menuItems = this.getMenuItemsForTheme(currentTheme);

    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.className = item.dropdown ? "menu-item dropdown" : "menu-item";

      const a = document.createElement('a');
      a.href = item.href;
      a.innerHTML = `
        ${item.label}
        <span class="menu-icon">${arrowDownIcon}</span>
      `;

      li.appendChild(a);

      if (item.dropdown) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu three-column';

        item.dropdown.forEach(section => {
          const column = document.createElement('div');
          column.className = 'dropdown-column';

          const title = document.createElement('h4');
          title.textContent = section.title;

          const list = document.createElement('ul');
          section.items.forEach(listItem => {
            const li = document.createElement('li');
            li.textContent = listItem;
            // Style "View all" items with theme color
            if (listItem.toLowerCase().includes('view all')) {
              li.style.cssText = `
                color: ${this.themeManager.getCurrentColor()};
                text-decoration: underline;
                font-weight: 700;
                text-underline-offset: 4px;
              `;
            }
            list.appendChild(li);
          });

          column.appendChild(title);
          column.appendChild(list);
          dropdownMenu.appendChild(column);
        });

        li.appendChild(dropdownMenu);
      }

      menuComponent.appendChild(li);
    });

    leftNavbar.appendChild(menuComponent);
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
