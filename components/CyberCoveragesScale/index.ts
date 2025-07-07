import { arrowIcon, checkmarkIcon } from '../../assets/svgicons';

// Default config for fallback/demo
const DEFAULT_CONFIG = {
  tabs: [
    {
      key: 'earlyDev',
      label: 'Idea & Early Development',
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/686baebeec98bec0062f7e23_Rectangle%201354.png',
      lossExample: {
        title: 'Pre-seed & Early Seed',
        points: [
          'Basic general liability coverage',
          'Starter tech E&O protection',
          'MVP cyber security coverage',
          'Founder personal protection',
        ]
      },
      button: {
        label: 'GET A QUOTE',
        href: '#',
      },
    },
    {
      key: 'growth',
      label: 'Growth & Scaling',
      image: '',
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
    {
      key: 'expansion',
      label: 'Expansion & Maturity',
      image: '',
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
    {
      key: 'preExit',
      label: 'Pre-Exit',
      image: '',
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
  ]
};

function injectStyles() {
  if (document.getElementById('cyber-coverages-scale-styles')) return;
  const style = document.createElement('style');
  style.id = 'cyber-coverages-scale-styles';
  style.textContent = `
.cyber-coverages-scale {
  padding: 0 123px;
  // max-width: 1194px;
  // margin: auto;
  font-family: 'Inter', Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
}
.cis-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 0;
  flex-wrap: wrap;
}
.cis-content-wrapper {
  border: 1.5px solid #005DFF;
  border-radius: 0px 0px 10px 10px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}
.cis-tab-btn {
  flex: 1;
  padding: 22px 40px;
  background: #F8F7F7;
  border: none;
  border-radius: 10px 10px 0 0;
  color: #242826;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  line-height: normal;
}
.cis-tab-btn.active {
  background: #005DFF;
  color: #fff;
  font-weight: 700;
}

.cis-main-box {
  display: flex;
  gap: 24px;
  align-items: stretch;
}
.cis-image-box {
  flex: 1 1 320px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-width: 0;
}
.cis-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
  height: 100%;
}
.cis-info-box {
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px;
  min-width: 0;
}

.cis-section h3 {
  color: #005DFF;
  font-size: 24px;
  margin: 0 0 30px 0;
  font-weight: 700;
}
.cis-section ul {
  margin: 0 0 0 18px;
  padding: 0;
  color: #494949;
  font-size: 20px;
  line-height: 35px;
}
.cis-section li {
  margin-bottom: 5px;
  list-style: disc;
  line-height: 35px;
}
.cis-section li:last-child {
  margin-bottom: 0;
}
.cis-section li::marker {
  color: #005DFF;
}
.cis-section p {
  color: #494949;
  font-size: 20px;
  margin: 0;
  line-height: 35px;
}
.cis-quote-btn {
  display: block;
  margin-top: 80px;
  padding: 22px 60px 22px 22px;
  background: #e3f0ff;
  color: #005DFF;
  border: none;
  border-radius: 10px;
  font-weight: 700 !important;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s, color 0.2s, border-radius 160ms ease-out;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  // line-height: normal;
}
.cis-quote-btn-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: transform 160ms ease-out;
}
.cis-quote-btn .cis-quote-btn-arrow {
  opacity: 0;
  width: 24px;
  height: 24px;
  margin-right: 0;
  margin-left: 0;
  transition: opacity 160ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cis-quote-btn .cis-quote-btn-text {
  display: inline-block;
  transition: transform 160ms ease-out;
  margin-left: 0;
}
.cis-quote-btn:hover .cis-quote-btn-arrow {
  opacity: 1;
}
.cis-quote-btn:hover .cis-quote-btn-arrow svg path {
  stroke: #fff;
}
.cis-quote-btn:hover .cis-quote-btn-inner {
  transform: translateX(12px);
}
.cis-quote-btn:hover .cis-quote-btn-text {
  transform: none;
}
.cis-quote-btn:hover {
  background: #005DFF;
  color: #fff;
  border-radius: 0;
}
.cis-divider {
  border: none;
  border-top: 1.5px solid #494949;
  margin:  0;
  width: 100%;
}
@media (max-width: 1200px) {
.cis-tab-btn{
  font-size: 16px
}
  .cyber-coverages-scale {
    // max-width: 100%;
    padding: 0 50px;
  }
  .cis-main-box {
    flex-direction: column;
    gap: 18px;
  }
  .cis-image-box {
    justify-content: flex-start;
    margin-bottom: 12px;
  }
  .cis-info-box {
    padding: 0;
    margin-right: 0;
  }
  .cis-tab-btn {
    padding: 24px 0;
    min-width: 120px;
  }
  .cis-section h3 {
    font-size: 20px;
  }
  .cis-section ul, .cis-section p {
    font-size: 18px;
    line-height: 30px;
  }
}
@media (max-width: 700px) {

  .cyber-coverages-scale {
    margin: 12px 0;
    padding: 0 20vw;
  }
  .cis-content-wrapper {
    padding: 10px;
  }
  .cis-tab-btn {
    font-size: 16px;
    padding: 14px 0;
    min-width: 90px;
  }
  .cis-section h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .cis-section ul, .cis-section p {
    font-size: 15px;
    line-height: 22px;
  }
  .cis-image {
    max-width: 100%;
    min-width: 0;
    height: auto;
  }
}

@media (max-width: 700px) {
  .cis-tab-btn{
    font-size: 13px;
  }
}
`;
  document.head.appendChild(style);
}

export function mountCyberCoveragesScale(target: HTMLElement, configArg?: any) {
  injectStyles();
  const config = configArg || DEFAULT_CONFIG;
  const TABS = config.tabs;
  let activeTab = TABS[0].key;

  function renderTabs() {
    const tabList = document.createElement('div');
    tabList.className = 'cis-tabs';
    TABS.forEach((tab: any) => {
      const btn = document.createElement('button');
      btn.className = 'cis-tab-btn' + (tab.key === activeTab ? ' active' : '');
      btn.textContent = tab.label;
      btn.onclick = () => {
        if (activeTab !== tab.key) {
          activeTab = tab.key;
          render();
        }
      };
      tabList.appendChild(btn);
    });
    return tabList;
  }

  function renderContent() {
    const tab = TABS.find((t: any) => t.key === activeTab)!;
    const content = document.createElement('div');
    content.className = 'cis-content';
    let pointsList = '';
    if (tab.lossExample.points && Array.isArray(tab.lossExample.points)) {
      pointsList = `<ul style="list-style:none;padding:0;margin:0;">
        ${tab.lossExample.points.map((pt: string) => `<li style="display:flex;align-items:center;gap:20px;margin-bottom:20px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;">${checkmarkIcon}</span><span>${pt}</span></li>`).join('')}
      </ul>`;
    }
    content.innerHTML = `
      <div class="cis-main-box">
        <div class="cis-image-box">
          <img src="${tab.image}" alt="${tab.label}" class="cis-image" />
        </div>
        <div class="cis-info-box">
          <div class="cis-section">
            <h3>${tab.lossExample.title}</h3>
            ${pointsList}
          </div>
          <a href="${tab.button.href}" class="cis-quote-btn" title="INDUSTRY-SPECIFIC CYBER INSURANCE SOLUTIONS">
            <span class="cis-quote-btn-inner"><span class="cis-quote-btn-arrow" aria-hidden="true" style="display:flex;">${arrowIcon}</span><span class="cis-quote-btn-text">${tab.button.label}</span></span>
          </a>
        </div>
      </div>
    `;
    return content;
  }

  function render() {
    target.innerHTML = '';
    target.className = 'cyber-coverages-scale';
    target.appendChild(renderTabs());
    const wrapper = document.createElement('div');
    wrapper.className = 'cis-content-wrapper';
    const content = renderContent();
    content.style.opacity = '0';
    wrapper.appendChild(content);
    target.appendChild(wrapper);
    setTimeout(() => {
      content.style.transition = 'opacity 0.3s';
      content.style.opacity = '1';
    }, 10);
  }

  render();
} 