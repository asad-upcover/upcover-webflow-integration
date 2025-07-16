import { upcoverLogoBusiness, upcoverLogoTech, upcoverLogoMotor, arrowDownIcon, arrowIcon } from "../../assets/svgicons";
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
  themeColors?: Record<string, string>;
  defaultTheme?: 'business' | 'tech' | 'motor';
}


function detectInitialTheme(): string {
  const currentPath = window.location.pathname;
  if (currentPath.includes("tech")) return "tech";
  if (currentPath.includes("motor")) return "motor";
  return "business";
}

export class NavbarWidget {
  private config: NavbarConfig;
  private target: HTMLElement;
  private themeManager: ThemeManager;

  constructor(config: NavbarConfig = {}) {
    const initialTheme = config.defaultTheme || detectInitialTheme();
    this.config = {
      ...config,
      logo:
        initialTheme === "tech"
          ? upcoverLogoTech
          : initialTheme === "motor"
            ? upcoverLogoMotor
            : upcoverLogoBusiness,
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

      // Set dynamic color based on theme
      const currentTheme = this.themeManager.getCurrentTheme();
      const themeColor = this.themeManager.getCurrentColor();
      if (window.location.pathname.includes(item.label.toLowerCase())) {
        a.style.color = themeColor;
      } else {
        a.style.color = '#242826';
      }

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
        // Set color based on active tab
        if (window.location.pathname.includes(item.label.toLowerCase())) {
          a.style.color = themeColor;
        } else {
          a.style.color = '#242826';
        }

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
              // Add theme-aware hover event listeners
              li.addEventListener('mouseenter', () => {
                const currentTheme = this.themeManager.getCurrentTheme();
                const hoverColor = currentTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
                li.style.color = hoverColor;
                li.style.textDecoration = 'underline';
                li.style.textUnderlineOffset = '4px';
              });
              li.addEventListener('mouseleave', () => {
                if (listItem.toLowerCase().includes('view all')) {
                  li.style.color = this.themeManager.getCurrentColor();
                } else {
                  li.style.color = '#555';
                }
                li.style.textDecoration = 'none';
              });
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
            // Add no-hover-effect class for call buttons or pure phone numbers
            const label = button.label ? button.label.trim() : '';
            const isCall = label.toUpperCase().startsWith('CALL ');
            const isPhoneNumber = /^\+?\d[\d\s-]*\d$/.test(label.replace(/[^\d\s\+\-]/g, '')) && label.replace(/[^\d]/g, '').length >= 6;
            if (isCall || isPhoneNumber) {
              btn.classList.add('no-hover-effect');
            }
            // Insert arrow and text spans for animation
            btn.innerHTML = `
              <span class="box-btn-inner">
                <span class="box-btn-arrow" aria-hidden="true" style="display:flex;">${arrowIcon}</span>
                <span class="box-btn-text">${button.label}</span>
              </span>
            `;
            // Apply different background color for second button based on theme
            const currentTheme = this.themeManager.getCurrentTheme();
            if (index === 1) {
              const themeColor = this.themeManager.getCurrentColor();
              if (currentTheme === 'business') {
                btn.style.cssText = `
                  background-color: #FFCFC5;
                  color: ${themeColor};
                `;
                btn.classList.remove('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#fff');
              } else if (currentTheme === 'motor') {
                btn.style.cssText = `
                  background-color: #F8FFAF;
                  color: #000000;
                `;
                btn.classList.add('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#3B4125');
              } else {
                btn.classList.remove('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.cssText = `
                  background-color: #EAF2FF;
                  color: ${themeColor};
                `;
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#fff');
              }
            } else {
              btn.style.cssText = `
                background-color: ${this.themeManager.getCurrentColor()};
                color: ${currentTheme === 'motor' ? '#000000' : 'white'};
              `;
              if (currentTheme === 'motor') {
                btn.classList.add('motor-theme');
              } else {
                btn.classList.remove('motor-theme');
              }
              btn.classList.remove('secondary-btn');
              btn.style.removeProperty('--secondary-btn-hover-bg');
              btn.style.removeProperty('--secondary-btn-hover-color');
            }
            buttonContainer1.appendChild(btn);
          });

          // After all buttons are appended to buttonContainer1
          if (buttonContainer1.childElementCount === 2) {
            buttonContainer1.classList.add('multi-btn-row');
            Array.from(buttonContainer1.children).forEach(btn => btn.classList.add('multi-btn'));
          }

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
            button2.innerHTML = `
              <span class="box-btn-inner">
                <span class="box-btn-arrow" aria-hidden="true" style="display:flex;">${arrowIcon}</span>
                <span class="box-btn-text">${item.boxComponent.secondDiv.button.label}</span>
              </span>
            `;
            const currentTheme = this.themeManager.getCurrentTheme();
            button2.style.cssText = `
              background-color: ${this.themeManager.getCurrentColor()};
              color: ${currentTheme === 'motor' ? '#000000' : 'white'};
            `;
            if (currentTheme === 'motor') {
              button2.classList.add('motor-theme');
            } else {
              button2.classList.remove('motor-theme');
            }

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
        max-height: 70px;
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
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
      }

      .login:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
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

      .brand-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-top: 8px;
      }

      #upcover-logo path {
        pointer-events: none;
        transition: all 0.3s ease;
      }

      /* Menu item */
      .menu-item {
        margin-left: 20px;
        padding: 28px 0px 30px 0px;
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
        /* No transition for color, so color changes immediately on hover */
      }

      .menu-icon {
        display: flex;
        align-items: center;
        transition: transform 0.2s ease;
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

      @media (max-width: 900px) {
        #navbar {
          display: none !important;
        }
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
        margin-top: 46px;
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
        position: relative;
        background-color: ${this.themeManager.getCurrentColor()};
        color: white;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        transition: background-color 0.3s ease, width 160ms ease-out, border-radius 160ms ease-out;
        box-sizing: border-box;
        overflow: hidden;
        min-width: 120px;
        max-width: 100%;
        max-height: 50px;
      }
      .box-btn-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        transition: width 160ms ease-out;
        gap: 0;
      }
      .box-btn-arrow {
        opacity: 0;
        width: 0;
        height: 24px;
        margin-right: 0;
        margin-left: 0;
        transition: opacity 160ms ease-out, width 160ms ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        overflow: hidden;
      }
      .box-btn-text {
        display: inline-block;
        transition: transform 160ms ease-out;
        margin-left: 0;
        width: auto;
        text-align: center;
        vertical-align: middle;
      }
      .box-button:hover {
        border-radius: 0 !important;
        width: 110%;
      }
      .multi-btn-row .box-button:hover,
      .box-button.multi-btn:hover {
        width: 100%;
      }
      .box-button:hover .box-btn-arrow {
        opacity: 1;
        width: 24px;
        margin-right: 8px;
        margin-left: 0;
      }

      .box-button:hover .box-btn-text {
        transform: translateX(0);
      }
            .box-button:hover .box-btn-arrow svg path {
        stroke: #fff;
      }
      .box-button.motor-theme:hover {
        color: #3B4125 !important;
      }
      .box-button.motor-theme:hover .box-btn-arrow svg path {
        stroke: #3B4125 !important;
      }
      .box-button .box-btn-arrow svg path {
        stroke: #fff !important;
      }
      .box-button.motor-theme .box-btn-arrow svg path {
        stroke: #3B4125;
      }

      .upcover-quote-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 22px 20px 22px 0;
        background: inherit;
        color: inherit;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: background 0.2s, color 0.2s, border-radius 160ms ease-out;
        --upcover-quote-btn-bg: inherit;
        max-height: 50px;
      }
      .upcover-quote-btn-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        gap: 0;
      }
      .upcover-quote-btn-arrow {
        opacity: 0;
        width: 24px;
        height: 24px;
        margin-right: 0;
        margin-left: 0;
        transition: opacity 160ms ease-out, margin-right 160ms ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        position: static;
      }
      .upcover-quote-btn-text {
        display: inline-block;
        transition: transform 160ms ease-out;
        margin-left: 0;
        width: auto;
        text-align: center;
      }
      .upcover-quote-btn:hover {
        background: var(--upcover-quote-btn-bg) !important;
        border-radius: 0 !important;
      }
      .upcover-quote-btn:hover .upcover-quote-btn-arrow {
        opacity: 1;
        transform: translateX(7px);
      }
      .upcover-quote-btn .upcover-quote-btn-arrow svg path {
        stroke: #fff;
      }
      .upcover-quote-btn:hover .upcover-quote-btn-text {
        transform: translateX(0.5625rem);
      }
      .upcover-quote-btn.motor-theme:hover {
        color: #3B4125 !important;
      }
      .upcover-quote-btn.motor-theme:hover .upcover-quote-btn-arrow svg path {
        stroke: #3B4125 !important;
      }
      .secondary-btn .box-btn-arrow svg path {
        stroke: currentColor !important;
      }
      .secondary-btn:hover {
        background-color: var(--secondary-btn-hover-bg, #005DFF) !important;
        color: var(--secondary-btn-hover-color, #fff) !important;
      }
      .secondary-btn:hover .box-btn-arrow svg path {
        stroke: var(--secondary-btn-hover-color, #fff) !important;
      }
      .box-button.no-hover-effect:hover,
      .box-button.no-hover-effect:hover .box-btn-arrow,
      .box-button.no-hover-effect:hover .box-btn-text {
        border-radius: 10px !important;
        width: 100%;
        opacity: 1;
        margin-right: 0;
        margin-left: 0;
        transform: none;
        color: inherit;
        background: inherit;
        text-decoration: none;
      }
      .box-button.no-hover-effect:hover .box-btn-arrow {
        opacity: 0 !important;
        width: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
      }
      .box-button.no-hover-effect .box-btn-arrow {
        opacity: 0 !important;
        width: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
      }
      .box-button.no-hover-effect:hover .box-btn-text {
        transform: none !important;
      }
      .box-button.no-hover-effect {
        transition: border-radius 160ms ease-out;
      }
      .box-button.no-hover-effect:hover {
        border-radius: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  private createLogo(): HTMLElement {
    const logoDiv = document.createElement("div");
    logoDiv.className = "brand-logo";
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
    quoteButton.className = "quote upcover-quote-btn";
    const motorArrowIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.0625 13H21.9375" stroke="#3B4125" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.625 5.6875L21.9375 13L14.625 20.3125" stroke="#3B4125" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const isMotor = this.themeManager.getCurrentTheme() === 'motor';
    const arrow = isMotor ? motorArrowIcon : arrowIcon;
    quoteButton.innerHTML = `
      <span class="upcover-quote-btn-inner">
        <span class="upcover-quote-btn-arrow" aria-hidden="true">${arrow}</span>
        <span class="upcover-quote-btn-text">${this.config.quoteText || "GET A QUOTE"}</span>
      </span>
    `;
    if (isMotor) {
      quoteButton.style.color = '#3B4125';
      quoteButton.classList.add('motor-theme');
    } else {
      quoteButton.classList.remove('motor-theme');
    }

    // Set CSS variable for hover background color from config.themeColors
    let themeColor = this.themeManager.getCurrentColor();
    if (this.config.themeColors) {
      const theme = this.themeManager.getCurrentTheme();
      if (this.config.themeColors[theme]) {
        themeColor = this.config.themeColors[theme];
      }
    }
    quoteButton.style.setProperty('--upcover-quote-btn-bg', themeColor);

    // Set initial text color based on theme
    const currentTheme = this.themeManager.getCurrentTheme();
    if (currentTheme === 'motor') {
      loginLink.style.color = '#3B4125';
      quoteButton.style.color = '#3B4125';
    } else {
      loginLink.style.color = this.themeManager.getCurrentColor();
      quoteButton.style.color = 'white';
    }

    // Add hover underline with theme color
    loginLink.addEventListener('mouseenter', () => {
      const currentTheme = this.themeManager.getCurrentTheme();
      const underlineColor = currentTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
      loginLink.classList.add('underline');
      loginLink.style.textDecorationColor = underlineColor;
    });
    loginLink.addEventListener('mouseleave', () => {
      loginLink.classList.remove('underline');
      loginLink.style.textDecorationColor = '';
    });

    // Subscribe to theme changes
    this.themeManager.subscribe((theme) => {
      const newColor = this.themeManager.getCurrentColor();
      loginLink.style.color = theme === 'motor' ? '#3B4125' : newColor;
      quoteButton.style.backgroundColor = newColor;
      quoteButton.style.color = theme === 'motor' ? '#3B4125' : 'white';
      // Update underline color if hovered
      if (loginLink.classList.contains('underline')) {
        loginLink.style.textDecorationColor = theme === 'motor' ? '#3B4125' : newColor;
      }
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

      // Set dynamic color based on theme
      const themeColor = this.themeManager.getCurrentColor();
      if (window.location.pathname.includes(item.label.toLowerCase())) {
        a.style.color = themeColor;
      } else {
        a.style.color = '#242826';
      }

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
        // Set color based on active tab
        if (window.location.pathname.includes(item.label.toLowerCase())) {
          a.style.color = themeColor;
        } else {
          a.style.color = '#242826';
        }

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
              // Add theme-aware hover event listeners
              li.addEventListener('mouseenter', () => {
                const currentTheme = this.themeManager.getCurrentTheme();
                const hoverColor = currentTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
                li.style.color = hoverColor;
                li.style.textDecoration = 'underline';
                li.style.textUnderlineOffset = '4px';
              });
              li.addEventListener('mouseleave', () => {
                if (listItem.toLowerCase().includes('view all')) {
                  li.style.color = this.themeManager.getCurrentColor();
                } else {
                  li.style.color = '#555';
                }
                li.style.textDecoration = 'none';
              });
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
            // Add no-hover-effect class for call buttons or pure phone numbers
            const label = button.label ? button.label.trim() : '';
            const isCall = label.toUpperCase().startsWith('CALL ');
            const isPhoneNumber = /^\+?\d[\d\s-]*\d$/.test(label.replace(/[^\d\s\+\-]/g, '')) && label.replace(/[^\d]/g, '').length >= 6;
            if (isCall || isPhoneNumber) {
              btn.classList.add('no-hover-effect');
            }
            // Insert arrow and text spans for animation
            btn.innerHTML = `
              <span class="box-btn-inner">
                <span class="box-btn-arrow" aria-hidden="true" style="display:flex;">${arrowIcon}</span>
                <span class="box-btn-text">${button.label}</span>
              </span>
            `;
            // Apply different background color for second button based on theme
            const currentTheme = this.themeManager.getCurrentTheme();
            if (index === 1) {
              const themeColor = this.themeManager.getCurrentColor();
              if (currentTheme === 'business') {
                btn.style.cssText = `
                  background-color: #FFCFC5;
                  color: ${themeColor};
                `;
                btn.classList.remove('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#fff');
              } else if (currentTheme === 'motor') {
                btn.style.cssText = `
                  background-color: #F8FFAF;
                  color: #000000;
                `;
                btn.classList.add('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#3B4125');
              } else {
                btn.classList.remove('motor-theme');
                btn.classList.add('secondary-btn');
                btn.style.cssText = `
                  background-color: #EAF2FF;
                  color: ${themeColor};
                `;
                btn.style.setProperty('--secondary-btn-hover-bg', themeColor);
                btn.style.setProperty('--secondary-btn-hover-color', '#fff');
              }
            } else {
              btn.style.cssText = `
                background-color: ${this.themeManager.getCurrentColor()};
                color: ${currentTheme === 'motor' ? '#000000' : 'white'};
              `;
              if (currentTheme === 'motor') {
                btn.classList.add('motor-theme');
              } else {
                btn.classList.remove('motor-theme');
              }
              btn.classList.remove('secondary-btn');
              btn.style.removeProperty('--secondary-btn-hover-bg');
              btn.style.removeProperty('--secondary-btn-hover-color');
            }
            buttonContainer1.appendChild(btn);
          });

          // After all buttons are appended to buttonContainer1
          if (buttonContainer1.childElementCount === 2) {
            buttonContainer1.classList.add('multi-btn-row');
            Array.from(buttonContainer1.children).forEach(btn => btn.classList.add('multi-btn'));
          }

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
            button2.innerHTML = `
              <span class="box-btn-inner">
                <span class="box-btn-arrow" aria-hidden="true" style="display:flex;">${arrowIcon}</span>
                <span class="box-btn-text">${item.boxComponent.secondDiv.button.label}</span>
              </span>
            `;
            const currentTheme = this.themeManager.getCurrentTheme();
            button2.style.cssText = `
              background-color: ${this.themeManager.getCurrentColor()};
              color: ${currentTheme === 'motor' ? '#000000' : 'white'};
            `;
            if (currentTheme === 'motor') {
              button2.classList.add('motor-theme');
            } else {
              button2.classList.remove('motor-theme');
            }

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
