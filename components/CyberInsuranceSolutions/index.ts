import { arrowIcon } from '../../assets/svgicons';

// Default config for fallback/demo
const DEFAULT_CONFIG = {
  tabs: [
    {
      key: 'healthcare',
      label: 'Healthcare & Medical',
      image: '',
      risks: [
        'Patient data breaches (PH/PII)',
        'Ransomware targeting medical systems',
        'HIPAA compliance violations',
      ],
      coverage: [
        'Regulatory defense & penalties coverage',
        'Patient notification services',
        'Medical systems recovery',
      ],
      lossExample: {
        title: 'Real Loss Examples',
        text: 'A metropolitan hospital paid $4.5M in ransom and spent $8.2M on system recovery after ransomware encrypted patient records and disabled appointment system for 11 days.'
      },
      button: {
        label: 'GET A QUOTE',
        href: '#',
      },
    },
    {
      key: 'financial',
      label: 'Financial Services',
      image: '',
      risks: ['Dummy risk 1', 'Dummy risk 2'],
      coverage: ['Dummy coverage 1', 'Dummy coverage 2'],
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
    {
      key: 'retail',
      label: 'Retail & E-commerce',
      image: '',
      risks: ['Dummy risk 1', 'Dummy risk 2'],
      coverage: ['Dummy coverage 1', 'Dummy coverage 2'],
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
    {
      key: 'technology',
      label: 'Technology & SaaS',
      image: '',
      risks: ['Dummy risk 1', 'Dummy risk 2'],
      coverage: ['Dummy coverage 1', 'Dummy coverage 2'],
      lossExample: { title: 'Real Loss Examples', text: 'Dummy loss example.' },
      button: { label: 'GET A QUOTE', href: '#' },
    },
  ]
};

function injectStyles() {
  if (document.getElementById('cyber-insurance-solutions-styles')) return;
  const style = document.createElement('style');
  style.id = 'cyber-insurance-solutions-styles';
  style.textContent = `
.cyber-insurance-solutions {
  max-width: 1194px;
  margin: 0 auto;
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
  padding: 22px 0px;
  background: #F8F7F7;
  border: none;
  border-radius: 10px 10px 0 0;
  color: #242826;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  min-width: 160px;
}
.cis-tab-btn.active {
  background: #005DFF;
  color: #fff;
  
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
  margin: 0 0 18px 0;
  font-weight: 600;
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
  margin-top: 59px;
  padding: 22px 60px 22px 22px;
  background: #e3f0ff;
  color: #005DFF;
  border: none;
  border-radius: 6px;
  font-weight: 600 !important;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s, color 0.2s, border-radius 160ms ease-out;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
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
  .cyber-insurance-solutions {
    max-width: 100%;
    margin: 24px 0;
    padding: 0 20px;
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

  .cyber-insurance-solutions {
    margin: 12px 0;
    padding: 0 2vw;
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

export function mountCyberInsuranceSolutions(target: HTMLElement, configArg?: any) {
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
    content.innerHTML = `
      <div class="cis-main-box">
        <div class="cis-image-box">
          <img src="${tab.image}" alt="${tab.label}" class="cis-image" />
        </div>
        <div class="cis-info-box">
          <div class="cis-section">
            <h3>Primary Cyber Risks</h3>
            <ul>${tab.risks.map((risk: string) => `<li>${risk}</li>`).join('')}</ul>
          </div>
          <div class="cis-divider"></div>
          <div class="cis-section">
            <h3>Key Coverage Components</h3>
            <ul>${tab.coverage.map((cov: string) => `<li>${cov}</li>`).join('')}</ul>
          </div>
          <div class="cis-divider"></div>
          <div class="cis-section">
            <h3>${tab.lossExample.title}</h3>
            <p>${tab.lossExample.text}</p>
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
    target.className = 'cyber-insurance-solutions';
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