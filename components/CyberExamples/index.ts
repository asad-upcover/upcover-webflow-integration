import { checkmarkIcon, arrowIcon } from "../../assets/svgicons";

const DEFAULT_CONFIG = {
  title: 'WHO NEEDS CYBER INSURANCE',
  description:
    'Any business that stores, processes, or transmits sensitive data, relies on digital systems for operations, or has an online presence should consider cyber insurance. Today, that includes nearly every business, regardless of size or industry.',
  tabs: [
    {
      key: 'highrisk',
      label: 'High-Risk Industries',
      content: [
        'Healthcare providers and clinics',
        'Financial Services and fintech',
        'E-commerce and retails businesses',
        'Professional services firms',
      ],
    },
    {
      key: 'smb',
      label: 'Small & Medium Businesses',
      content: [],
    },
    {
      key: 'data',
      label: 'Data-Rich Organisations',
      content: [],
    },
    {
      key: 'tech',
      label: 'Technology-Dependent Business',
      content: [],
    },
  ],
};

function injectStyles() {
  if (document.getElementById('who-needs-cyber-styles')) return;
  const style = document.createElement('style');
  style.id = 'who-needs-cyber-styles';
  style.textContent = `
.who-needs-cyber-section {
  display: flex;
  flex-direction: column;
  gap: 0;
//   background: #fff;
  border-radius: 18px;
  padding: 220px 100px;
//   box-shadow: 0 4px 32px rgba(0,0,0,0.04);
  font-family: 'Inter', Arial, sans-serif;
  margin: 0px auto;
  max-width: 1200px;
  z-index: 1001;
}
.who-needs-cyber-header {
  width: 100%;
  margin-bottom: 3.75rem;
}
.who-needs-cyber-title {
  font-size: 2.125rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
  color: #242826;
  line-height: 40px;
}
.who-needs-cyber-desc {
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 0;
  line-height: 40px;
}
.who-needs-cyber-main-row {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
}
.who-needs-cyber-left {
  flex: 1 1 320px;
  min-width: 320px;
  max-width: 420px;
}
.who-needs-cyber-tabs {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.who-needs-cyber-tab {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 600;
  color: #494949;
  background: none;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 26px 0;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: color 0.2s, border-color 0.2s;
  position: relative;
  line-height: 60px;
}
.who-needs-cyber-tab.active {
  color: #005DFF;
  border-bottom: 1px solid #005DFF;
  line-height: 60px;
}
.who-needs-cyber-tab .arrow {
  display: flex;
  align-items: center;
  margin-left: 8px;
  vertical-align: middle;
  // height: 1.5em;
  max-height: 20px;
}
.who-needs-cyber-right {
  flex: 1 1 320px;
  min-width: 320px;
  background: #F8F7F7;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
//   gap: 40px;
  transition: opacity 0.4s;
}
.who-needs-cyber-list {
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
}
.who-needs-cyber-list-item:not(:last-child) {
  margin-bottom: 40px;
}
.who-needs-cyber-list-item {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #494949;
  gap: 20px;
  line-height: 20px;
}
.who-needs-cyber-list-item .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.who-needs-cyber-tab:not(:first-child) {
  padding-top: 40px;
}
.who-needs-cyber-single-paragraph {
  font-size: 1.5rem;
  color: #494949;
  margin: 0;
  line-height: 40px;
}
.who-needs-cyber-content-heading {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #242826;
}
.who-needs-cyber-content-paragraph {
  font-size: 24px;
  color: #494949;
  margin: 0 0 30px 0;
  line-height: 40px !important;
}
@media (max-width: 900px) {
  .who-needs-cyber-section {
    flex-direction: column;
    padding: 24px 8vw;
    gap: 24px;
  }
  .who-needs-cyber-right {
    padding: 24px 8vw;
  }
}
@media (max-width: 600px) {

  .who-needs-cyber-right {
    padding: 16px 2vw;
  }
  .who-needs-cyber-title {
    font-size: 1.3rem;
  }
  .who-needs-cyber-tab {
    font-size: 16px;
    padding: 12px 0;
  }
  .who-needs-cyber-list-item {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .who-needs-cyber-section {
    padding: 220px 164px;
  }
}
`;
  document.head.appendChild(style);
}

export function mountCyberExamples(target: HTMLElement, configArg?: any) {
  injectStyles();
  const config = { ...DEFAULT_CONFIG, ...configArg };
  let activeTab = config.tabs[0].key;
  const showCheckmark = typeof config.checkmarkIcon !== 'undefined' ? !!config.checkmarkIcon : true;
  const checkmarkSvg = config.checkmarkIcon || checkmarkIcon;

  function render() {
    target.innerHTML = '';
    target.className = 'who-needs-cyber-section';

    // Title and description (full width)
    const header = document.createElement('div');
    header.className = 'who-needs-cyber-header';
    header.innerHTML = `
      <div class="who-needs-cyber-title">${config.title}</div>
      <div class="who-needs-cyber-desc">${config.description}</div>
    `;
    target.appendChild(header);

    // Main content row (tabs + right panel)
    const mainRow = document.createElement('div');
    mainRow.className = 'who-needs-cyber-main-row';

    // Left side (tabs)
    const left = document.createElement('div');
    left.className = 'who-needs-cyber-left';
    const tabs = document.createElement('div');
    tabs.className = 'who-needs-cyber-tabs';
    config.tabs.forEach((tab: any) => {
      const btn = document.createElement('button');
      btn.className = 'who-needs-cyber-tab' + (tab.key === activeTab ? ' active' : '');
      btn.innerHTML = tab.label + (tab.key === activeTab ? ` <span class="arrow">${arrowIcon}</span>` : '');
      btn.onclick = () => {
        if (activeTab !== tab.key) {
          activeTab = tab.key;
          render();
        }
      };
      tabs.appendChild(btn);
    });
    left.appendChild(tabs);

    // Right side
    const right = document.createElement('div');
    right.className = 'who-needs-cyber-right';
    right.style.opacity = '0';
    right.style.transition = 'opacity 0.4s';
    setTimeout(() => {
      right.style.opacity = '1';
    }, 10);
    const activeTabObj = config.tabs.find((t: any) => t.key === activeTab);
    if (activeTabObj && activeTabObj.content && activeTabObj.content.length > 0) {
      // Special case: if all items are heading/paragraph pairs (HTML tags)
      const isHeadingParaPairs = activeTabObj.content.length > 1 && activeTabObj.content.every((item: string, idx: number) => {
        if (idx % 2 === 0) return /<strong>|<b>|<h[1-6]>/i.test(item); // heading
        return true; // allow any string for paragraph
      });
      if (isHeadingParaPairs) {
        // Render as heading/paragraph pairs
        for (let i = 0; i < activeTabObj.content.length; i += 2) {
          const heading = document.createElement('div');
          heading.className = 'who-needs-cyber-content-heading';
          heading.innerHTML = activeTabObj.content[i];
          right.appendChild(heading);
          if (activeTabObj.content[i + 1]) {
            const para = document.createElement('div');
            para.className = 'who-needs-cyber-content-paragraph';
            para.textContent = activeTabObj.content[i + 1];
            // If this is the last paragraph, remove bottom margin
            if (i + 2 >= activeTabObj.content.length) {
              para.style.marginBottom = '0';
            }
            right.appendChild(para);
          }
        }
      } else if (activeTabObj.content.length === 1) {
        // Render as a plain paragraph if only one item
        const para = document.createElement('p');
        para.className = 'who-needs-cyber-single-paragraph';
        para.textContent = activeTabObj.content[0];
        right.appendChild(para);
      } else {
        const list = document.createElement('div');
        list.className = 'who-needs-cyber-list';
        activeTabObj.content.forEach((item: string) => {
          const li = document.createElement('div');
          li.className = 'who-needs-cyber-list-item';
          li.innerHTML = (showCheckmark ? `<span class=\"icon\">${checkmarkSvg}</span>` : '') + item;
          list.appendChild(li);
        });
        right.appendChild(list);
      }
    }

    mainRow.appendChild(left);
    mainRow.appendChild(right);
    target.appendChild(mainRow);
  }

  render();
}
