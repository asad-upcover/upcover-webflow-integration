import { arrowDownIcon, crossIcon } from '../../assets/svgicons';

const DEFAULT_CONFIG = {
  title: "What it doesn't cover",
  items: [
    "Errors & Omissions resulting from your Technology Product or Service",
    "Bodily Injury or Property Damage claims",
    "Employment Practices claims",
    "Fiduciary liability claims",
    "Workplace injuries"
  ]
};

function injectStyles() {
  if (document.getElementById('cyber-covers-styles')) return;
  const style = document.createElement('style');
  style.id = 'cyber-covers-styles';
  style.textContent = `
.cyber-covers {
  z-index: -1000;
  // width: 100%;
  // max-width: 700px;
  // background: red;
  // margin: 40px 0 0px 0px;
  // background: transparent;
  font-family: 'Inter', Arial, sans-serif;
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .cyber-covers {
    margin: 32px 0 0 24px;
    max-width: 100%;
  }
}
@media (max-width: 700px) {
  .cyber-covers {
    margin: 24px 0 0 0;
    max-width: 100%;
    padding: 0 2vw;
  }
  .cyber-covers-toggle {
    font-size: 16px;
    padding: 0 0 6px 0;
  }
  .cyber-covers-list li {
    font-size: 15px;
    margin-bottom: 12px;
  }
  .cyber-covers-x {
    font-size: 16px;
    margin-right: 12px;
  }
}
.cyber-covers-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #005DFF;
  font-weight: 700;
  font-size: 20px;
  // margin-bottom: 35px;
  border: none;
  background: none;
  padding: 40px 0 70px 0;
  outline: none;
  position: relative;
  text-align: left;
}
.cyber-covers-toggle span {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.cyber-covers-toggle .cyber-covers-arrow {
  margin-left: 6px;
  font-size: 18px;
  transition: transform 0.2s;
  color: #005DFF;
  display: flex;
  align-items: center;
}
.cyber-covers-toggle.open .cyber-covers-arrow {
  transform: rotate(180deg);
}
.cyber-covers-list {
  margin: -40px 0 0 0;
  padding: 0 0 70px 0;
  list-style: none;
  animation: fadeIn 0.2s;
}
.cyber-covers-list li {
  display: flex;
  align-items: center;
  color: #494949;
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 1.5;
}
.cyber-covers-list li:last-child {
  margin-bottom: 0;
}
.cyber-covers-x {
  color: #A0A0A0;
  font-size: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: none; }
}
.cyber-covers-arrow svg path {
  stroke: #005DFF !important;
}
`;
  document.head.appendChild(style);
}

export function mountCyberCovers(target: HTMLElement, configArg?: any) {
  injectStyles();
  const config = configArg || DEFAULT_CONFIG;
  let open = false;

  function render() {
    target.innerHTML = '';
    target.className = 'cyber-covers';

    // Toggle button
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'cyber-covers-toggle' + (open ? ' open' : '');
    toggle.innerHTML = `<span>${config.title}</span> <span class="cyber-covers-arrow">${arrowDownIcon}</span>`;
    toggle.onclick = () => {
      open = !open;
      render();
    };
    target.appendChild(toggle);

    // List
    if (open) {
      const ul = document.createElement('ul');
      ul.className = 'cyber-covers-list';
      config.items.forEach((item: string) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="cyber-covers-x">${crossIcon}</span>${item}`;
        ul.appendChild(li);
      });
      target.appendChild(ul);
    }
  }

  render();
}
