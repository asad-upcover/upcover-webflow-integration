import { upcoverLogoBusiness, upcoverLogoTech, upcoverLogoMotor, arrowDownIcon } from "../../assets/svgicons";
import { ThemeManager } from "../../themes/theme";

interface MenuItem {
  label: string;
  href: string;
  dropdown?: {
    title: string;
    items: string[];
  }[];
  boxComponent?: {
    firstDiv: {
      image: string;
      heading: string;
      paragraph: string;
      buttons: {
        label: string;
        href: string;
      }[];
    };
    secondDiv?: {
      heading: string;
      paragraph: string;
      button: {
        label: string;
        href: string;
      };
    };
  };
}

export interface NavbarConfig {
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
          { label: "Solutions", href: "#" },
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

    this.target = document.createElement("nav");
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
      
      // Add hover event listener to change color
      li.addEventListener('mouseenter', () => {
        const currentTheme = this.themeManager.getCurrentTheme();
        const hoverColor = currentTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
        a.style.color = hoverColor;
        
        // Update SVG color
        const svgPath = a.querySelector('svg path');
        if (svgPath) {
          svgPath.setAttribute('stroke', hoverColor);
        }
      });
      
      li.addEventListener('mouseleave', () => {
        a.style.color = '#242826';
        
        // Reset SVG color
        const svgPath = a.querySelector('svg path');
        if (svgPath) {
          svgPath.setAttribute('stroke', '#242826');
        }
      });
      
      li.appendChild(a);

      if (item.dropdown || item.boxComponent) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu three-column';
        
        // Add dropdown columns if they exist
        if (item.dropdown) {
          item.dropdown.forEach(section => {
            const column = document.createElement('div');
            column.className = 'dropdown-column';
            
            const title = document.createElement('h4');
            title.textContent = section.title;
            
            const list = document.createElement('ul');
            section.items.forEach(listItem => {
              const li = document.createElement('li');
              li.textContent = listItem;
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
        }

        // Add box component if it exists
        if (item.boxComponent) {
          const boxContainer = document.createElement('div');
          boxContainer.className = 'dropdown-box-container';

          // First Div
          const firstDiv = document.createElement('div');
          firstDiv.className = 'box-first-div';
          
          const image = document.createElement('img');
          image.src = item.boxComponent.firstDiv.image;
          image.alt = item.boxComponent.firstDiv.heading;
          
          const heading1 = document.createElement('h3');
          heading1.textContent = item.boxComponent.firstDiv.heading;
          
          const paragraph1 = document.createElement('p');
          paragraph1.innerHTML = item.boxComponent.firstDiv.paragraph;
          
          const buttonContainer1 = document.createElement('div');
          buttonContainer1.className = 'button-container';
          item.boxComponent.firstDiv.buttons.forEach((button, index) => {
            const btn = document.createElement('a');
            btn.href = button.href;
            btn.className = 'box-button';
            btn.textContent = button.label;
            
            // Apply different background color for second button based on theme
            if (index === 1) {
              const currentTheme = this.themeManager.getCurrentTheme();
              const themeColor = this.themeManager.getCurrentColor();
              if (currentTheme === 'business') {
                btn.style.cssText = `
                  background-color: #FFCFC5;
                  color: ${themeColor};
                `;
              } else if (currentTheme === 'motor') {
                btn.style.cssText = `
                  background-color: #F8FFAF;
                  color: #000000;
                `;
              }
            } else {
              const currentTheme = this.themeManager.getCurrentTheme();
              btn.style.cssText = `
                background-color: ${this.themeManager.getCurrentColor()};
                color: ${currentTheme === 'motor' ? '#000000' : 'white'};
              `;
            }
            
            buttonContainer1.appendChild(btn);
          });

          firstDiv.appendChild(image);
          firstDiv.appendChild(heading1);
          firstDiv.appendChild(paragraph1);
          firstDiv.appendChild(buttonContainer1);

          boxContainer.appendChild(firstDiv);

          // Second Div (only if it exists)
          if (item.boxComponent.secondDiv) {
            const secondDiv = document.createElement('div');
            secondDiv.className = 'box-second-div';
            
            const heading2 = document.createElement('h3');
            heading2.textContent = item.boxComponent.secondDiv.heading;
            
            const paragraph2 = document.createElement('p');
            paragraph2.innerHTML = item.boxComponent.secondDiv.paragraph;
            
            const button2 = document.createElement('a');
            button2.href = item.boxComponent.secondDiv.button.href;
            button2.className = 'box-button';
            button2.textContent = item.boxComponent.secondDiv.button.label;
            const currentTheme = this.themeManager.getCurrentTheme();
            button2.style.cssText = `
              background-color: ${this.themeManager.getCurrentColor()};
              color: ${currentTheme === 'motor' ? '#000000' : 'white'};
            `;

            secondDiv.appendChild(heading2);
            secondDiv.appendChild(paragraph2);
            secondDiv.appendChild(button2);

            boxContainer.appendChild(secondDiv);
          }

          dropdownMenu.appendChild(boxContainer);
        }
        
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
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px 0 60px;
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
        transition: color 0.3s ease;
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

      .menu-item:hover .box-button {
        text-decoration: none !important;
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
        position: absolute;
        margin-top: 58px;
        left: 0;
        right: 0;
        width: 100%;
        padding: 40px 60px;
        transition: 0.4s ease all;
        background-color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        flex-direction: row;
        max-height: calc(100vh - 170px);
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        justify-content: space-between;
      }

      .dropdown-menu.three-column::-webkit-scrollbar {
        width: 8px;
      }

      .dropdown-menu.three-column::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      .dropdown-menu.three-column::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
      }

      .dropdown-menu.three-column::-webkit-scrollbar-thumb:hover {
        background: #555;
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
        color: #ffffff;
      }

      .dropdown-box-container {
        flex: 0 0 490px;
        margin-left: auto;
      }

      .box-first-div {
        margin-bottom: 20px;
        background: #F7F6F3;
        padding: 20px;
        border-radius: 20px;
        width: 490px;
        border: 1px solid rgba(206, 210, 217, 0.50);
      }

      .box-first-div img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        object-position: 20% 30%;
        border-radius: 10px;
        margin-bottom: 30px;
      }

      .box-second-div {
        background: #F7F6F3;
        padding: 20px;
        border-radius: 20px;
        width: 490px;
        border: 1px solid rgba(206, 210, 217, 0.50);
      }

      .box-first-div h3,
      .box-second-div h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #242826;
      }

      .box-first-div p,
      .box-second-div p {
        font-size: 14px;
        line-height: 25px;
        color: #555;
        margin-bottom: 30px;
        font-weight: 400;
      }

      .button-container {
        display: flex;
        gap: 10px;
        justify-content: center;
        width: 100%;
      }

      .box-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 19px 20px;
        background-color: ${this.themeManager.getCurrentColor()};
        color: white;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        transition: background-color 0.3s ease;
        box-sizing: border-box;
      }

      .box-button:hover {
        opacity: 0.9;
      }

      @media screen and (max-width: 1500px) {
        .dropdown-menu.three-column {
          flex-wrap: wrap;
          justify-content: start;
        }

        .dropdown-box-container {
          flex: 0 0 100%;
          margin-left: 0;
          margin-top: 40px;
        }

        .box-first-div,
        .box-second-div {
          width: 100%;
        }
      }

      @media screen and (max-width: 1500px) {
        .dropdown-box-container {
          padding: 0;
        }

        .box-first-div img {
          height: 240px;
        }

        .box-first-div h3,
        .box-second-div h3 {
          font-size: 18px;
        }


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

      // Add hover event listener to change color
      li.addEventListener('mouseenter', () => {
        const currentTheme = this.themeManager.getCurrentTheme();
        const hoverColor = currentTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
        a.style.color = hoverColor;
        
        // Update SVG color
        const svgPath = a.querySelector('svg path');
        if (svgPath) {
          svgPath.setAttribute('stroke', hoverColor);
        }
      });
      
      li.addEventListener('mouseleave', () => {
        a.style.color = '#242826';
        
        // Reset SVG color
        const svgPath = a.querySelector('svg path');
        if (svgPath) {
          svgPath.setAttribute('stroke', '#242826');
        }
      });
      
      li.appendChild(a);

      if (item.dropdown || item.boxComponent) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu three-column';
        
        // Add dropdown columns if they exist
        if (item.dropdown) {
          item.dropdown.forEach(section => {
            const column = document.createElement('div');
            column.className = 'dropdown-column';
            
            const title = document.createElement('h4');
            title.textContent = section.title;
            
            const list = document.createElement('ul');
            section.items.forEach(listItem => {
              const li = document.createElement('li');
              li.textContent = listItem;
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
        }

        // Add box component if it exists
        if (item.boxComponent) {
          const boxContainer = document.createElement('div');
          boxContainer.className = 'dropdown-box-container';

          // First Div
          const firstDiv = document.createElement('div');
          firstDiv.className = 'box-first-div';
          
          const image = document.createElement('img');
          image.src = item.boxComponent.firstDiv.image;
          image.alt = item.boxComponent.firstDiv.heading;
          
          const heading1 = document.createElement('h3');
          heading1.textContent = item.boxComponent.firstDiv.heading;
          
          const paragraph1 = document.createElement('p');
          paragraph1.innerHTML = item.boxComponent.firstDiv.paragraph;
          
          const buttonContainer1 = document.createElement('div');
          buttonContainer1.className = 'button-container';
          item.boxComponent.firstDiv.buttons.forEach((button, index) => {
            const btn = document.createElement('a');
            btn.href = button.href;
            btn.className = 'box-button';
            btn.textContent = button.label;
            
            // Apply different background color for second button based on theme
            if (index === 1) {
              const currentTheme = this.themeManager.getCurrentTheme();
              const themeColor = this.themeManager.getCurrentColor();
              if (currentTheme === 'business') {
                btn.style.cssText = `
                  background-color: #FFCFC5;
                  color: ${themeColor};
                `;
              } else if (currentTheme === 'motor') {
                btn.style.cssText = `
                  background-color: #F8FFAF;
                  color: #000000;
                `;
              }
            } else {
              const currentTheme = this.themeManager.getCurrentTheme();
              btn.style.cssText = `
                background-color: ${this.themeManager.getCurrentColor()};
                color: ${currentTheme === 'motor' ? '#000000' : 'white'};
              `;
            }
            
            buttonContainer1.appendChild(btn);
          });

          firstDiv.appendChild(image);
          firstDiv.appendChild(heading1);
          firstDiv.appendChild(paragraph1);
          firstDiv.appendChild(buttonContainer1);

          boxContainer.appendChild(firstDiv);

          // Second Div (only if it exists)
          if (item.boxComponent.secondDiv) {
            const secondDiv = document.createElement('div');
            secondDiv.className = 'box-second-div';
            
            const heading2 = document.createElement('h3');
            heading2.textContent = item.boxComponent.secondDiv.heading;
            
            const paragraph2 = document.createElement('p');
            paragraph2.innerHTML = item.boxComponent.secondDiv.paragraph;
            
            const button2 = document.createElement('a');
            button2.href = item.boxComponent.secondDiv.button.href;
            button2.className = 'box-button';
            button2.textContent = item.boxComponent.secondDiv.button.label;
            const currentTheme = this.themeManager.getCurrentTheme();
            button2.style.cssText = `
              background-color: ${this.themeManager.getCurrentColor()};
              color: ${currentTheme === 'motor' ? '#000000' : 'white'};
            `;

            secondDiv.appendChild(heading2);
            secondDiv.appendChild(paragraph2);
            secondDiv.appendChild(button2);

            boxContainer.appendChild(secondDiv);
          }

          dropdownMenu.appendChild(boxContainer);
        }
        
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
