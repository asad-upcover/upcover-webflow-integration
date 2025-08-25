import { upcoverLogoBusiness, upcoverLogoTech, upcoverLogoMotor, arrowDownIcon, arrowIcon, plusIcon, minusIcon } from "../../assets/svgicons";
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

      /* Remove mobile tap highlight within navbar only */
      #navbar, #navbar * {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }

      .navbar-left {
        display: flex;
        align-items: center;
        max-height: 70px;
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
        width: 161.576px;
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
        line-height: 12px;
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
          // display: none !important;
          position: relative;
        }
        
        /* Show mobile menu toggle */
        .mobile-menu-toggle {
          display: flex !important;
        }
        
        /* Hide desktop menu on mobile */
        #menu-items {
          display: none !important;
        }
        
        /* Hide login and quote buttons on mobile */
        .login,
        .quote {
          display: none !important;
        }
        
        /* Adjust navbar for mobile */
        #navbar {
          padding: 1rem;
          max-height: 60px;
        }
        
        .navbar-left {
          max-height: 60px;
        }
        
        #upcover-logo {
          width: 120px;
        }
      }

      /* Mobile quick links under the menu list */
.mobile-quick-links {
  margin-top: 10px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 22px;
}

.mobile-quick-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #242826;
  font-size: 14px;
  font-weight: 400;
}

.mobile-quick-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mobile-quick-call svg {
  width: 18px;
  height: 18px;
}

.mobile-locale-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #242826;
  font-size: 14px;
}

.mobile-locale-link {
  text-decoration: none;
  color: inherit;
}

.mobile-locale-au {
  font-weight: 900; /* default active */
}

.mobile-locale-nz {
  font-weight: 600;
}

/* put this inside your existing @media (max-width: 900px) block */

/* Make the moved dropdown render with mobile styles */
.mobile-active-panel .dropdown-menu.three-column {
  display: block !important;
  width: 100%;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 1000 !important;
  animation: slideUp 0.25s ease-out;
}

/* Mirror mobile column + content tweaks */
.mobile-active-panel .dropdown-column { margin-bottom: 20px; max-width: none; }
.mobile-active-panel .dropdown-column h4 { font-size: 16px; font-weight: 700; margin-bottom: 15px; color: #242826; }
.mobile-active-panel .dropdown-column ul { list-style: none; padding: 0; margin: 0; border-top: 1px solid #F0F0F0; }
.mobile-active-panel .dropdown-column ul li { margin-bottom: 12px; font-size: 14px; color: #555; cursor: pointer; transition: color 0.3s; }

/* Box component mobile look */
.mobile-active-panel .dropdown-box-container { margin-top: 20px; background-color: #f8f9fa; border-radius: 8px; }
.mobile-active-panel .box-first-div,
.mobile-active-panel .box-second-div {
  background: #FFFFFF;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
  width: auto;
}
.mobile-active-panel .box-first-div img { width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 15px; }
.mobile-active-panel .button-container { display: flex; flex-direction: column; gap: 10px; }
.mobile-active-panel .box-button { padding: 12px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; }


@media (max-width: 900px) {
  .mobile-quick-links {
    padding-bottom: 24px;
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
        margin-top: 42px;
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
        padding: 22px 22px 22px 0;
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

      /* Mobile menu styles */
      .mobile-menu-toggle {
        display: none; /* Hidden by default */
        background: transparent;
        border: none;
        cursor: pointer;
        // padding: 8px;
        box-sizing: border-box;
        color: #242826;
        transition: color 0.2s ease;
      }

      .mobile-menu-toggle:hover {
        color: #666;
      }

      .mobile-menu-toggle svg {
        width: 24px;
        height: 24px;
        transition: transform 0.3s ease;
      }

      .mobile-menu-toggle.open svg {
        transform: rotate(90deg);
      }

      /* Mobile menu overlay and content */
      .mobile-menu-overlay {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #FFFFFF;
        z-index: 1001;
        /* Always in flow for smoother animation */
        opacity: 0;
        transform: translateY(-12px);
        pointer-events: none;
        max-height: 0;
        overflow: hidden;
        transition: opacity 0.25s ease, transform 0.25s ease, max-height 0.35s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      
        @media (max-width: 900px) {
          .mobile-menu-overlay.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
            max-height: 100vh;
            background-color: #FFFFFF;
          }
        }

      .mobile-menu-content {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        min-height: 100vh;
      }
       
       .mobile-menu-items {
        //  flex-grow: 1;
       }

       /* Businesses section (inside navbar mobile overlay) */
       .mobile-business-section {
         background-color: #f8f7f7;
         margin: 0 -20px;
         padding: 0 20px;
       }
       .mobile-business-toggle {
         display: flex;
         width: 100%;
         background: none;
         border: none;
         padding: 16px 0;
         cursor: pointer;
         align-items: center;
         justify-content: space-between;
         font-weight: 700;
         color: #242826;
         font-size: 18px;
         -webkit-tap-highlight-color: transparent;
       }
       .mobile-business-toggle .mb-arrow svg {
         width: 1rem;
         height: 1rem;
         transition: transform 0.2s ease;
       }
       .mb-arrow svg {
         width: 1rem;
         height: 1rem;
       }

       .mobile-business-dropdown {
         display: block;
         width: 100%;
         border-top: 1px solid #E6E6E6;
         padding: 0;
         max-height: 0;
         overflow: hidden;
         opacity: 0;
         transform: translateY(-6px);
         transition: max-height 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), padding 0.3s ease;
       }
       .mobile-business-dropdown.open {
         max-height: 500px;
         opacity: 1;
         transform: translateY(0);
         padding: 0;
       }
       .mobile-business-item {
         width: 100%;
         background: none;
         border: none;
         text-align: left;
         padding: 14px 0px;
         color: #242826;
         font-weight: 500;
         font-size: 14px;
         cursor: pointer;
         border-bottom: 1px solid #F0F0F0;
       }
       
      .mobile-menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #F0F0F0;
        position: relative;
        cursor: pointer;
      }
      
      .mobile-menu-item:last-child {
        border-bottom: none;
      }
      
      .mobile-menu-item.active {
        border-bottom: none;
      }
      
      .mobile-menu-item.active + .dropdown-menu {
        border-top: 1px solid #F0F0F0;
        margin-top: 0;
      }
      
      .mobile-menu-link {
        text-decoration: none;
        color: #242826;
        font-size: 18px;
        font-weight: 600;
        flex-grow: 1;
        -webkit-tap-highlight-color: transparent;
      }
      
      .mobile-menu-arrow {
        display: flex;
        align-items: center;
        margin-left: 15px;
      }
       
       .mobile-menu-arrow svg {
         width: 16px;
         height: 16px;
         color: #000000;
       }
       
       /* Mobile dropdown styles */
       .mobile-menu-items .dropdown-menu.three-column {
         display: none;
         width: 100%;
         background-color: #f8f9fa;
         border-radius: 8px;
         margin: 10px 0;
         padding: 10px 20px;
         box-sizing: border-box;
         animation: slideUp 0.25s ease-out;
       }
       
       @keyframes slideUp {
         from {
           opacity: 0;
           transform: translateY(100px);
         }
         to {
           opacity: 1;
           transform: translateY(0);
         }
       }
       
       .mobile-menu-items .dropdown-menu.three-column.active {
         display: block;
         margin-top: 10px;
       }
       
       /* Ensure main menu items are properly hidden when dropdown is active */
       .mobile-menu-item.active {
         display: none !important;
       }
       
       .mobile-menu-items .dropdown-column {
         margin-bottom: 20px;
       }
       
       .mobile-menu-items .dropdown-column h4 {
         font-size: 16px;
         font-weight: 700;
         margin-bottom: 15px;
         color: #242826;
       }
       
       .mobile-menu-items .dropdown-column ul {
         list-style: none;
         padding: 0;
         margin: 0;
  border-top: 1px solid #F0F0F0;
       }
       
       .mobile-menu-items .dropdown-column ul li {
         margin-bottom: 12px;
         font-size: 14px;
         color: #555;
         cursor: pointer;
         transition: color 0.3s;
       }
       
       .mobile-menu-items .dropdown-column ul li:hover {
         color: #FF6B6B;
         text-decoration: underline;
         text-underline-offset: 4px;
       }
       
       .mobile-menu-items .dropdown-box-container {
         margin-top: 20px;
        //  padding: 20px;
         background-color: #f8f9fa;
         border-radius: 8px;
       }
       
       .mobile-menu-items .box-first-div,
       .mobile-menu-items .box-second-div {
         background: #FFFFFF;
         padding: 15px;
         border-radius: 8px;
         margin-bottom: 15px;
         border: 1px solid #e9ecef;
         width: auto;
       }
       
       .mobile-menu-items .box-first-div img {
         width: 100%;
         height: 120px;
         object-fit: cover;
         border-radius: 6px;
         margin-bottom: 15px;
       }
       
       .mobile-menu-items .box-first-div h3,
       .mobile-menu-items .box-second-div h3 {
         font-size: 18px;
         font-weight: 700;
         margin-bottom: 10px;
         color: #242826;
       }
       
       .mobile-menu-items .box-first-div p,
       .mobile-menu-items .box-second-div p {
         font-size: 14px;
         line-height: 1.5;
         color: #555;
         margin-bottom: 15px;
       }
       
       .mobile-menu-items .button-container {
         display: flex;
         flex-direction: column;
         gap: 10px;
       }
       
       .mobile-menu-items .box-button {
         padding: 12px 16px;
         border-radius: 6px;
         font-size: 14px;
         font-weight: 600;
         text-decoration: none;
         text-align: center;
         transition: all 0.2s ease;
       }
       
       /* Back navigation header styles */
       .mobile-back-header {
         display: flex;
         align-items: center;
         padding: 20px 0;
         border-bottom: 1px solid #E0E0E0;
         cursor: pointer;
       }
       
       .mobile-back-arrow {
         margin-right: 10px;
         display: flex;
         align-items: center;
       }
       
       .mobile-back-arrow svg {
         width: 1rem;
         height: 1rem;
         color: #000000;
       }
       
       .mobile-back-text {
         font-size: 18px;
         font-weight: 600;
         color: #242826;
       }

      /* Kill any leftover SVG inside the toggle, just in case */
      .mobile-menu-toggle svg { display: none !important; }

      /* Animated hamburger -> cross */
      .burger {
        position: relative;
        width: 24px;
        display: inline-block;
      }

      .burger .line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: currentColor;   /* picks up theme color */
        border-radius: 2px;
        transform: translateY(0) rotate(0deg);
        transition: transform 200ms cubic-bezier(.22,1,.36,1),
                    opacity 150ms ease;
        will-change: transform, opacity;
      }

      /* Initial positions (three bars) */
      .burger .line:nth-of-type(1) { transform: translateY(-6px); }
      .burger .line:nth-of-type(2) { transform: translateY( 0px); }
      .burger .line:nth-of-type(3) { transform: translateY( 6px); }

      /* OPEN: merge then rotate to cross, and remove the middle bar */
      .mobile-menu-toggle.open .burger .line:nth-of-type(1) {
        transform: translateY(0) rotate(45deg);
      }
      .mobile-menu-toggle.open .burger .line:nth-of-type(3) {
        transform: translateY(0) rotate(-45deg);
      }

      /* HARD HIDE the middle bar — no more asterisk */
      .mobile-menu-toggle.open .burger .line:nth-of-type(2) {
        opacity: 0 !important;
        pointer-events: none !important;
        /* If something else still paints it, nuke it: */
        background: transparent !important;
      }

      /* Better tap target on mobile */
      @media (max-width: 900px) {
        .mobile-menu-toggle { display: flex !important; }
      }

      /* Respect reduced motion (optional) */
      @media (prefers-reduced-motion: reduce) {
        .burger .line { transition: none !important; }
      }

      .mobile-active-panel .dropdown-menu.three-column {
  display: block !important;   /* ensure it shows when moved to the top panel */
  margin-top: 10px;
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

    // Add mobile hamburger menu button
    const mobileMenuButton = document.createElement("button");
    mobileMenuButton.className = "mobile-menu-toggle";
    mobileMenuButton.innerHTML = `
        <span class="burger" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </span>
      `;
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Menu');

    mobileMenuButton.addEventListener("click", () => {
      this.toggleMobileMenu();
    });

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

    actionsDiv.appendChild(mobileMenuButton);
    actionsDiv.appendChild(loginLink);
    actionsDiv.appendChild(quoteButton);

    return actionsDiv;
  }

  private toggleMobileMenu(): void {
    const mobileMenu = document.querySelector('.mobile-menu-overlay') as HTMLElement | null;
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement | null;
  
    if (!mobileMenu || !mobileMenuButton) return;
  
    const willOpen = !mobileMenu.classList.contains('active');
  
    if (!willOpen) {
      this.closeMobileMenu();
      return;
    }
  
    // Open
    mobileMenu.classList.add('active');
    mobileMenuButton.classList.add('open');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
    mobileMenuButton.setAttribute('aria-label', 'Close');
  
    // Add click-outside listener
    setTimeout(() => {
      const handleClickOutside = (event: Event) => {
        const target = event.target as HTMLElement;
  
        // Check if clicking on dropdown content or mobile menu items
        const isClickingDropdown = !!target.closest('.dropdown-menu');
        const isClickingMobileMenu = !!target.closest('.mobile-menu-overlay');
        const isClickingHamburger = !!mobileMenuButton.contains(target);
        const isClickingBizToggle = !!target.closest('.mobile-business-toggle');
  
        // Only close if clicking completely outside the mobile menu system
        if (!isClickingMobileMenu && !isClickingHamburger && !isClickingBizToggle) {
          this.closeMobileMenu();
          document.removeEventListener('click', handleClickOutside);
        }
      };
      document.addEventListener('click', handleClickOutside);
    }, 100);
  }
  

  private closeMobileMenu(): void {
    const mobileMenu = document.querySelector('.mobile-menu-overlay') as HTMLElement | null;
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement | null;
  
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
    if (mobileMenuButton) {
      mobileMenuButton.classList.remove('open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Menu');
    }
  
    // Reset businesses section visibility and state when closing overlay
    const bizSection = document.querySelector('.mobile-business-section') as HTMLElement | null;
    const bizDropdown = document.querySelector('.mobile-business-dropdown');
    const bizToggle = document.querySelector('.mobile-business-toggle');
    if (bizSection) bizSection.style.display = '';
    bizDropdown?.classList.remove('open');
    bizToggle?.classList.remove('open');
    const bizArrowWrap = document.querySelector('.mobile-business-toggle .mb-arrow') as HTMLElement | null;
    if (bizArrowWrap) bizArrowWrap.innerHTML = `${plusIcon}`;
  
    // Restore quick links visibility when overlay closes
    const quickLinks = document.querySelector('.mobile-quick-links') as HTMLElement | null;
    if (quickLinks) quickLinks.style.display = '';
  }
  

  private createMobileMenu(): HTMLElement {
    const mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu-overlay";

    const mobileMenuContent = document.createElement("div");
    mobileMenuContent.className = "mobile-menu-content";

    // Businesses section (toggle + list)
    const bizSection = document.createElement("div");
    bizSection.className = "mobile-business-section";

    const bizToggle = document.createElement("button");
    bizToggle.className = "mobile-business-toggle";
    bizToggle.innerHTML = `
      <span>Businesses</span>
      <span class="mb-arrow">${plusIcon}</span>
    `;

    const bizDropdown = document.createElement("div");
    bizDropdown.className = "mobile-business-dropdown";

    type MobileItem = { id: 'business' | 'tech' | 'motor'; label: string };
    const mobileItemsList: MobileItem[] = [
      { id: 'business', label: 'Business & Sole Traders' },
      { id: 'tech', label: 'Tech Startup & Enterprises' },
      { id: 'motor', label: 'Motor & Fleet' },
    ];

    const routesMap: Record<string, string> = {
      business: "/business-sole-traders",
      tech: "/tech-startups-enterprises",
      motor: "/motor-fleet",
    };

    const bizButtonsById: Record<string, HTMLButtonElement> = {};

    mobileItemsList.forEach((item) => {
      const btn = document.createElement('button');
      btn.className = 'mobile-business-item';
      btn.textContent = item.label;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.themeManager.setTheme(item.id as any);
        window.location.href = routesMap[item.id];
      });
      bizButtonsById[item.id] = btn as HTMLButtonElement;
      bizDropdown.appendChild(btn);
    });

    // Set initial active based on current theme and apply colors
    const currentBizTheme = this.themeManager.getCurrentTheme();
    const activeColorInit = currentBizTheme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
    for (const id in bizButtonsById) {
      const button: HTMLButtonElement = bizButtonsById[id];
      if (!button) continue;
      const isActive = id === currentBizTheme;
      if (isActive) {
        button.classList.add('active');
        button.style.color = activeColorInit;
        button.style.fontWeight = '700';
      } else {
        button.classList.remove('active');
        button.style.color = '#242826';
        button.style.fontWeight = '500';
      }
    }

    // Update active state when theme changes
    this.themeManager.subscribe((theme: string) => {
      const activeColor = theme === 'motor' ? '#3B4125' : this.themeManager.getCurrentColor();
      for (const id in bizButtonsById) {
        const button: HTMLButtonElement = bizButtonsById[id];
        if (!button) continue;
        const isActive = id === theme;
        if (isActive) {
          button.classList.add('active');
          button.style.color = activeColor;
          button.style.fontWeight = '700';
        } else {
          button.classList.remove('active');
          button.style.color = '#242826';
          button.style.fontWeight = '500';
        }
      }
    });

    bizToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = bizDropdown.classList.contains('open');
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const arrowWrap = bizToggle.querySelector('.mb-arrow') as HTMLElement | null;

      if (isOpen) {
        // Close with smooth height animation
        const startHeight = bizDropdown.scrollHeight;
        bizDropdown.style.maxHeight = `${startHeight}px`; // set current height as start
        // next frame: set to 0 to animate
        requestAnimationFrame(() => {
          bizDropdown.classList.remove('open');
          bizDropdown.style.maxHeight = '0px';
        });
        if (!prefersReduced && 'animate' in bizDropdown) {
          bizDropdown.animate(
            [
              { opacity: 1, transform: 'translateY(0)' },
              { opacity: 0, transform: 'translateY(-6px)' }
            ],
            { duration: 250, easing: 'ease-in', fill: 'forwards' }
          );
        }
        bizToggle.classList.remove('open');
        if (arrowWrap) arrowWrap.innerHTML = `${plusIcon}`;
        // Clean the inline style after transition so CSS can control future opens
        const onTransitionEnd = (ev: TransitionEvent) => {
          if (ev.propertyName === 'max-height') {
            bizDropdown.style.removeProperty('max-height');
            bizDropdown.removeEventListener('transitionend', onTransitionEnd as any);
          }
        };
        bizDropdown.addEventListener('transitionend', onTransitionEnd as any);
      } else {
        // Open with smooth height animation
        bizDropdown.classList.add('open');
        // Temporarily set max-height to content height to allow transition
        const targetHeight = bizDropdown.scrollHeight;
        bizDropdown.style.maxHeight = '0px';
        requestAnimationFrame(() => {
          bizDropdown.style.maxHeight = `${targetHeight}px`;
        });
        if (!prefersReduced && 'animate' in bizDropdown) {
          bizDropdown.animate(
            [
              { opacity: 0, transform: 'translateY(-6px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ],
            { duration: 320, easing: 'ease-out', fill: 'forwards' }
          );
        }
        bizToggle.classList.add('open');
        if (arrowWrap) arrowWrap.innerHTML = `${minusIcon}`;
        // After transition completes, clear inline height so CSS class can handle
        const onTransitionEnd = (ev: TransitionEvent) => {
          if (ev.propertyName === 'max-height') {
            bizDropdown.style.removeProperty('max-height');
            bizDropdown.removeEventListener('transitionend', onTransitionEnd as any);
          }
        };
        bizDropdown.addEventListener('transitionend', onTransitionEnd as any);
      }
    });

    bizSection.appendChild(bizToggle);
    bizSection.appendChild(bizDropdown);
    mobileMenuContent.appendChild(bizSection);

    // Mobile menu items only (no close button needed)
    const mobileMenuItems = document.createElement("div");
    mobileMenuItems.className = "mobile-menu-items";

    // Get current theme and create mobile menu items
    const currentTheme = this.themeManager.getCurrentTheme();
    const menuItems = this.getMenuItemsForTheme(currentTheme);

    menuItems.forEach(item => {
      const mobileMenuItem = document.createElement("div");
      mobileMenuItem.className = "mobile-menu-item";

      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      link.className = "mobile-menu-link";

      // Add arrow icon
      const arrowIconWrap = document.createElement("span");
      arrowIconWrap.className = "mobile-menu-arrow";
      arrowIconWrap.innerHTML = `
        <svg data-v-0c3b2dd6="" xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="currentColor" class="inline-block align-baseline w-4 h-4 text-pink-500" svg="arrow-right" scale="">
          <path d="M5.156.703l10.05 10.05a.702.702 0 010 .994l-10.05 10.05" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        </svg>
      `;
      (arrowIconWrap as HTMLElement).style.color = "#FF6B6B";

      // Add click handlers so the WHOLE item opens the dropdown if available
      if (item.dropdown || item.boxComponent) {
        arrowIconWrap.style.cursor = "pointer";
        // after
        arrowIconWrap.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMobileDropdown(mobileMenuItem, item, e);
        });
        link.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMobileDropdown(mobileMenuItem, item, e);
        });
        mobileMenuItem.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMobileDropdown(mobileMenuItem, item, e);
        });

      }

      mobileMenuItem.appendChild(link);
      mobileMenuItem.appendChild(arrowIconWrap);
      mobileMenuItems.appendChild(mobileMenuItem);

      // Add dropdown content if item has dropdown or boxComponent
      if (item.dropdown || item.boxComponent) {
        const mobileDropdown = this.createMobileDropdown(item);
        mobileMenuItems.appendChild(mobileDropdown);
      }
    });

    mobileMenuContent.appendChild(mobileMenuItems);

    // ---------------------------
    // Quick links under the items
    // ---------------------------
    const quickLinks = document.createElement("div");
    quickLinks.className = "mobile-quick-links";

    // 1) Login
    const qlLogin = document.createElement("a");
    qlLogin.href = "#";
    qlLogin.className = "mobile-quick-link";
    qlLogin.textContent = "Login";
    quickLinks.appendChild(qlLogin);

    // 2) Get a quote
    const qlQuote = document.createElement("a");
    qlQuote.href = "#";
    qlQuote.className = "mobile-quick-link";
    qlQuote.textContent = "Get a quote";
    quickLinks.appendChild(qlQuote);

    // 3) Call button (icon + number)
    const qlCall = document.createElement("a");
    qlCall.href = "tel:1300872683";
    qlCall.className = "mobile-quick-link mobile-quick-call";
    qlCall.innerHTML = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3082 15.275C18.3082 15.575 18.2415 15.8833 18.0998 16.1833C17.9582 16.4833 17.7748 16.7667 17.5332 17.0333C17.1248 17.4833 16.6748 17.8083 16.1665 18.0167C15.6665 18.225 15.1248 18.3333 14.5415 18.3333C13.6915 18.3333 12.7832 18.1333 11.8248 17.725C10.8665 17.3167 9.90817 16.7667 8.95817 16.075C7.99984 15.375 7.0915 14.6 6.22484 13.7417C5.3665 12.875 4.5915 11.9667 3.89984 11.0167C3.2165 10.0667 2.6665 9.11667 2.2665 8.175C1.8665 7.225 1.6665 6.31667 1.6665 5.45C1.6665 4.88333 1.7665 4.34167 1.9665 3.84167C2.1665 3.33333 2.48317 2.86667 2.92484 2.45C3.45817 1.925 4.0415 1.66667 4.65817 1.66667C4.8915 1.66667 5.12484 1.71667 5.33317 1.81667C5.54984 1.91667 5.7415 2.06667 5.8915 2.28333L7.82484 5.00833C7.97484 5.21667 8.08317 5.40833 8.15817 5.59167C8.23317 5.76667 8.27484 5.94167 8.27484 6.1C8.27484 6.3 8.2165 6.5 8.09984 6.69167C7.9915 6.88333 7.83317 7.08333 7.63317 7.28333L6.99984 7.94167C6.90817 8.03333 6.8665 8.14167 6.8665 8.275C6.8665 8.34167 6.87484 8.4 6.8915 8.46667C6.9165 8.53333 6.9415 8.58333 6.95817 8.63333C7.10817 8.90833 7.3665 9.26667 7.73317 9.7C8.10817 10.1333 8.50817 10.575 8.9415 11.0167C9.3915 11.4583 9.82484 11.8667 10.2665 12.2417C10.6998 12.6083 11.0582 12.8583 11.3415 13.0083C11.3832 13.025 11.4332 13.05 11.4915 13.075C11.5582 13.1 11.6248 13.1083 11.6998 13.1083C11.8415 13.1083 11.9498 13.0583 12.0415 12.9667L12.6748 12.3417C12.8832 12.1333 13.0832 11.975 13.2748 11.875C13.4665 11.7583 13.6582 11.7 13.8665 11.7C14.0248 11.7 14.1915 11.7333 14.3748 11.8083C14.5582 11.8833 14.7498 11.9917 14.9582 12.1333L17.7165 14.0917C17.9332 14.2417 18.0832 14.4167 18.1748 14.625C18.2582 14.8333 18.3082 15.0417 18.3082 15.275Z" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10"></path>
<path d="M15.4167 7.5C15.4167 7 15.025 6.23333 14.4417 5.60833C13.9083 5.03333 13.2 4.58333 12.5 4.58333" stroke="#242826" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.3333 7.5C18.3333 4.275 15.725 1.66667 12.5 1.66667" stroke="#242826" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      <span>1300 872 683</span>
    `;
    quickLinks.appendChild(qlCall);

    // 4) AU | NZ switcher
    const localeWrap = document.createElement("div");
    localeWrap.className = "mobile-locale-switch";

    const auLink = document.createElement("a");
    auLink.href = "#";
    auLink.className = "mobile-locale-link mobile-locale-au";
    auLink.textContent = "AU";
    auLink.style.fontWeight = "900"; // default active

    const sep = document.createElement("span");
    sep.className = "mobile-locale-sep";
    sep.textContent = " | ";

    const nzLink = document.createElement("a");
    nzLink.href = "#";
    nzLink.className = "mobile-locale-link mobile-locale-nz";
    nzLink.textContent = "NZ";
    nzLink.style.fontWeight = "600";

    const applyLocaleWeights = (active: "AU" | "NZ") => {
      if (active === "AU") {
        auLink.style.fontWeight = "900";
        nzLink.style.fontWeight = "600";
      } else {
        auLink.style.fontWeight = "600";
        nzLink.style.fontWeight = "900";
      }
    };

    auLink.addEventListener("click", (e) => {
      e.preventDefault();
      applyLocaleWeights("AU");
      // Hook real locale switching here if needed
    });

    nzLink.addEventListener("click", (e) => {
      e.preventDefault();
      applyLocaleWeights("NZ");
      // Hook real locale switching here if needed
    });

    localeWrap.appendChild(auLink);
    localeWrap.appendChild(sep);
    localeWrap.appendChild(nzLink);
    quickLinks.appendChild(localeWrap);

    // Append quick links to the content
    mobileMenuContent.appendChild(quickLinks);

    mobileMenu.appendChild(mobileMenuContent);
    return mobileMenu;
  }

  // Smoothly animate the back header back to a target element's position (FLIP)
private animateBackHeaderReturn(backHeader: HTMLElement, targetElement: HTMLElement, onFinish: () => void) {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const firstRect = backHeader.getBoundingClientRect();

  const run = () => {
    // Ensure we can measure the target even if hidden
    const computed = getComputedStyle(targetElement);
    const wasHidden = computed.display === 'none';
    const prevDisplay = targetElement.style.display;
    const prevVisibility = targetElement.style.visibility;
    if (wasHidden) {
      targetElement.style.display = 'flex';
      targetElement.style.visibility = 'hidden';
    }

    const lastRect = targetElement.getBoundingClientRect();

    // Restore if we revealed for measurement
    if (wasHidden) {
      targetElement.style.display = prevDisplay;
      targetElement.style.visibility = prevVisibility;
    }

    const dx = lastRect.left - firstRect.left;
    const dy = lastRect.top  - firstRect.top;

    if (prefersReduced || !(backHeader as any).animate) {
      backHeader.remove();
      onFinish();
      return;
    }

    backHeader.style.willChange = 'transform, opacity';

    const anim = (backHeader as any).animate(
      [
        { transform: 'translate(0,0)',           opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px)`, opacity: 0.001 }
      ],
      { duration: 360, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }
    );

    anim.onfinish = () => {
      backHeader.remove();
      onFinish();
    };
  };

  // Wait a frame so any layout changes (revealed siblings) are applied before measuring
  requestAnimationFrame(() => run());
}


  // For first menu item: fade out the left arrow and slide the back-header text horizontally into the target slot
  private animateBackHeaderTextReturn(backHeader: HTMLElement, targetElement: HTMLElement, onFinish: () => void) {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const arrowEl = backHeader.querySelector('.mobile-back-arrow') as HTMLElement | null;
    const textEl = backHeader.querySelector('.mobile-back-text') as HTMLElement | null;
    if (!textEl) {
      backHeader.remove();
      onFinish();
      return;
    }

    // Measure current text position and target slot position
    const textRect = textEl.getBoundingClientRect();
    const wasHidden = getComputedStyle(targetElement).display === 'none';
    const prevDisplay = targetElement.style.display;
    const prevVisibility = targetElement.style.visibility;
    if (wasHidden) {
      targetElement.style.display = 'flex';
      targetElement.style.visibility = 'hidden';
    }
    const targetRect = targetElement.getBoundingClientRect();
    if (wasHidden) {
      targetElement.style.display = prevDisplay;
      targetElement.style.visibility = prevVisibility;
    }

    const dx = targetRect.left - textRect.left;

    if (prefersReduced || !(textEl as any).animate) {
      if (arrowEl) arrowEl.style.display = 'none';
      backHeader.remove();
      onFinish();
      return;
    }

    const animations: Animation[] = [] as any;
    if (arrowEl && (arrowEl as any).animate) {
      const a = (arrowEl as any).animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 180, easing: 'ease-out', fill: 'forwards' }
      );
      animations.push(a);
    }

    const t = (textEl as any).animate(
      [ { transform: 'translateX(0)' }, { transform: `translateX(${dx}px)` } ],
      { duration: 240, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }
    );
    animations.push(t);

    let finished = 0;
    const done = () => {
      finished += 1;
      if (finished >= animations.length) {
        backHeader.remove();
        onFinish();
      }
    };
    animations.forEach(a => a.onfinish = done);
  }



  private createMobileDropdown(item: MenuItem): HTMLElement {
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

    return dropdownMenu;
  }

private toggleMobileDropdown(
  mobileMenuItem: HTMLElement,
  item: MenuItem,
  ev?: Event
): void {
  ev?.stopPropagation();

  let dropdownMenu = mobileMenuItem.nextElementSibling as HTMLElement | null;
  if (!dropdownMenu || !dropdownMenu.classList.contains('dropdown-menu')) {
    dropdownMenu = this.target.querySelector('.mobile-active-panel .dropdown-menu') as HTMLElement | null;
  }
  if (!dropdownMenu) return;

  const allDropdowns = this.target.querySelectorAll('.mobile-menu-items .dropdown-menu');
  const allMenuItems = this.target.querySelectorAll('.mobile-menu-items .mobile-menu-item');
  const mobileMenuContent = this.target.querySelector('.mobile-menu-content') as HTMLElement | null;

  const ensureTopScaffold = () => {
    if (!mobileMenuContent) return { backHeader: null as HTMLElement | null, panel: null as HTMLElement | null };

    const oldHeader = mobileMenuContent.querySelector('.mobile-back-header');
    const oldPanel  = mobileMenuContent.querySelector('.mobile-active-panel');
    oldHeader?.remove();
    oldPanel?.remove();

    const backHeader = document.createElement('div');
    backHeader.className = 'mobile-back-header';
    backHeader.innerHTML = `
      <span class="mobile-back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="currentColor" width="16" height="16">
          <path d="M15.234 21.797l-10.05-10.05a.702.702 0 010-.994L15.234.703" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        </svg>
      </span>
      <span class="mobile-back-text">${item.label}</span>
    `;

    const bizSection = mobileMenuContent.querySelector('.mobile-business-section');
    if (bizSection && bizSection.parentNode) {
      bizSection.parentNode.insertBefore(backHeader, bizSection.nextSibling);
    } else {
      mobileMenuContent.insertBefore(backHeader, mobileMenuContent.firstChild);
    }

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced && backHeader.animate) {
      backHeader.animate(
        [{ opacity: 0, transform: 'translateY(100px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 250, easing: 'ease-out', fill: 'forwards' }
      );
    }

    const panel = document.createElement('div');
    panel.className = 'mobile-active-panel';
    mobileMenuContent.insertBefore(panel, backHeader.nextSibling);

    backHeader.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleMobileDropdown(mobileMenuItem, item);
    });

    return { backHeader, panel };
  };

  // Close other dropdowns
  allDropdowns.forEach(d => {
    if (d !== dropdownMenu) {
      d.classList.remove('active');
      (d as HTMLElement).style.opacity = '0';
      (d as HTMLElement).style.transform = 'translateY(20px)';
      (d as HTMLElement).style.pointerEvents = 'none';
    }
  });

  const existingHeader = this.target.querySelector('.mobile-back-header');
  const existingPanel  = this.target.querySelector('.mobile-active-panel');
  const isOpen = dropdownMenu.classList.contains('active');

  if (isOpen) {
    // 🔴 CLOSE
    const originId = dropdownMenu.dataset.originItemId;
    const originItem = originId
      ? this.target.querySelector<HTMLElement>(`#${originId}`)
      : mobileMenuItem;

    dropdownMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.transform = 'translateY(20px)';
    dropdownMenu.style.pointerEvents = 'none';

    // after animation completes, move back under its origin item
      setTimeout(() => {
        originItem?.insertAdjacentElement('afterend', dropdownMenu);
        dropdownMenu.classList.remove('active');
        dropdownMenu.style.opacity = '';
        dropdownMenu.style.transform = '';
        dropdownMenu.style.pointerEvents = '';
        dropdownMenu.style.transition = '';
        dropdownMenu.style.display = 'none';   // 👈 ensure it’s hidden when closed
      }, 300);


    // Fade items back
    allMenuItems.forEach(mi => {
      (mi as HTMLElement).style.transition = 'opacity 0.3s ease';
      (mi as HTMLElement).style.opacity = '1';
    });

    if (existingHeader) {
      existingHeader.remove();
    }
    existingPanel?.remove();

    const quickLinks = this.target.querySelector('.mobile-quick-links') as HTMLElement | null;
    if (quickLinks) quickLinks.style.display = '';

    const arrowElement = mobileMenuItem.querySelector('.mobile-menu-arrow');
    if (arrowElement) {
      arrowElement.classList.remove('open');
      arrowElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="currentColor" width="16" height="16">
          <path d="M5.156.703l10.05 10.05a.702.702 0 010 .994l-10.05 10.05"
            fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
      `;
    }

  } else {
    // 🟢 OPEN
    if (!mobileMenuItem.id) {
      mobileMenuItem.id = `mmi-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    }
    dropdownMenu.dataset.originItemId = mobileMenuItem.id;

    const { panel } = ensureTopScaffold();
    if (!panel) return;

    panel.appendChild(dropdownMenu);

    dropdownMenu.style.display = 'block';
    dropdownMenu.classList.add('active');
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.transform = 'translateY(100px)';
    dropdownMenu.style.pointerEvents = 'auto';
    dropdownMenu.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    requestAnimationFrame(() => {
      dropdownMenu.style.opacity = '1';
      dropdownMenu.style.transform = 'translateY(0)';
    });

    // Fade ALL items (keep layout)
    allMenuItems.forEach(mi => {
      (mi as HTMLElement).style.transition = 'opacity 0.1s ease';
      (mi as HTMLElement).style.opacity = '0';
    });

    const quickLinks = this.target.querySelector('.mobile-quick-links') as HTMLElement | null;
    if (quickLinks) quickLinks.style.display = 'none';

    // Reset other arrows, set this one to cross
    allMenuItems.forEach(mi => {
      if (mi !== mobileMenuItem) {
        const arr = mi.querySelector('.mobile-menu-arrow');
        if (arr) {
          arr.classList.remove('open');
          arr.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="currentColor" width="16" height="16">
              <path d="M5.156.703l10.05 10.05a.702.702 0 010 .994l-10.05 10.05"
                fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
          `;
        }
      }
    });
    const arrowElement = mobileMenuItem.querySelector('.mobile-menu-arrow');
    if (arrowElement) {
      arrowElement.classList.add('open');
      arrowElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6l12 12M6 18L18 6"/>
        </svg>
      `;
    }
  }
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

    // Add mobile menu to the navbar (below it) - only if it doesn't exist
    if (!this.target.querySelector('.mobile-menu-overlay')) {
      const mobileMenu = this.createMobileMenu();
      this.target.appendChild(mobileMenu);
    }
  }

  public updateConfig(newConfig: Partial<NavbarConfig>): void {
    this.config = { ...this.config, ...newConfig };
    // Don't call render() to avoid recreating mobile menu
    // Instead, just update the logo if needed
    this.updateLogo(this.themeManager.getCurrentTheme());
  }

  public mount(container: HTMLElement): void {
    container.appendChild(this.target);
  }
}