import { arrowDownIcon } from '../../assets/svgicons';

export interface CyberStepsConfig {
  title?: string;
  subtitle?: string;
  steps?: Array<{
    name: string;
    key: string;
    items: string[];
  }>;
  cta?: {
    label: string;
    onClick?: () => void;
  };
}

const DEFAULT_CONFIG: CyberStepsConfig = {
  title: 'HOW TO GET CYBER INSURANCE: SIMPLE 5-STEPS PROCESS',
  subtitle:
    'Getting comprehensive cyber protection for your business is easier than you might think. Our streamlined application process takes just minutes.',
  steps: [
    {
      name: 'Business',
      key: 'business',
      items: [
        'Industry and business activities',
        'Annual revenue figures',
        'Company website and domain details',
      ],
    },
    {
      name: 'Quote',
      key: 'quote',
      items: [
        'Instant pricing estimates',
        'Multiple coverage tier options',
        'Industry-specific package recommendations',
      ],
    },
    {
      name: 'Details',
      key: 'details',
      items: [
        'Security controls assessment',
        'Data collection and retention details',
        'Third-party service provider information',
      ],
    },
    {
      name: 'Full Quote',
      key: 'fullquote',
      items: [
        'Data breach coverage recommendations',
        'Custom policy options',
        'Specialized coverage recommendations',
      ],
    },
  ],
  cta: {
    label: 'GET A QUOTE',
  },
};

function injectStyles() {
  if (document.getElementById('cyber-steps-styles')) return;
  const style = document.createElement('style');
  style.id = 'cyber-steps-styles';
  style.textContent = `
  .cyber-steps-section { background: #005DFF; padding: 70px 80px; }
  .cyber-steps-section .process-container { max-width: 1200px; margin: 0 auto; text-align: center; color: white; }
  .cyber-steps-section .process-header { margin-top: 70px; margin-bottom: 50px; }
  .cyber-steps-section .process-title { font-size: 2.2rem; font-weight: 900; margin-bottom: 40px; letter-spacing: -0.02em; }
  .cyber-steps-section .process-subtitle { font-size: 24px; font-weight: 400; line-height: 40px; opacity: 0.9; max-width: 900px; margin: 0 auto; }
  .cyber-steps-section .process-nav { display: flex; align-items: center; justify-content: center; gap: 12px; margin: 0 0 4.375rem 0; }
  .cyber-steps-section .nav-button { width: 40px; height: 40px; border-radius: 50%;background: transparent; border: 1px solid #ffffff; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
  .cyber-steps-section .nav-button:hover { background: rgba(255,255,255,0.3); transform: scale(1.05); }
  .cyber-steps-section .nav-button:disabled { opacity: 0.5; cursor: not-allowed; }
  .cyber-steps-section .nav-indicator { display: flex; align-items: center; gap: 8px; }
  .cyber-steps-section .nav-tab { padding: 13px 20px; border-radius: 25px; background: rgba(255,25e5,255,0.9); color: #1e40af; font-weight: 600; font-size: 1.25rem; cursor: pointer; transition: all 0.3s ease; }
  .cyber-steps-section .nav-tab.active { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
  .cyber-steps-section .nav-dot { width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.5); transition: all 0.3s ease; }
  .cyber-steps-section .nav-dot.active { background: white; transform: scale(1.2); }
  .cyber-steps-section .process-steps { display: flex; gap: 20px; margin-bottom: 4.375rem; overflow-x: auto; scroll-behavior: smooth; padding: 0 20px; }
  /* Hide scrollbar for all browsers */
  .cyber-steps-section .process-steps { scrollbar-width: none; -ms-overflow-style: none; }
  .cyber-steps-section .process-steps::-webkit-scrollbar { display: none; }
  .cyber-steps-section .step-card { background: white; border-radius: 16px; padding: 40px 30px; text-align: left; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: all 0.3s ease; min-width: 400px; max-width: 400px; flex-shrink: 0; color: #1f2937; }
  .cyber-steps-section .step-card:nth-child(1) { animation-delay: 0.1s; }
  .cyber-steps-section .step-card:nth-child(2) { animation-delay: 0.2s; }
  .cyber-steps-section .step-card:nth-child(3) { animation-delay: 0.3s; }
  .cyber-steps-section .step-card:nth-child(4) { animation-delay: 0.4s; }
  .cyber-steps-section .step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
  .cyber-steps-section .step-number { display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; background: #F7F6F3; color: #005DFF; border-radius: 50%; font-weight: 700; font-size: 40px; margin-bottom: 20px; }
  .cyber-steps-section .step-title { font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2.5rem; }
  .cyber-steps-section .step-list { list-style: none; padding-left: 0; margin-left: 0; }
  .cyber-steps-section .step-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; color: #6b7280; line-height: 1.5; font-size: 1.25rem; }
  .cyber-steps-section .step-item:last-child { margin-bottom: 0; }
  .cyber-steps-section .step-bullet { width: 6px; height: 6px; background: #005DFF; border-radius: 50%; margin-top: 8px; flex-shrink: 0; }
  .cyber-steps-section .cta-button { background: white; color: #005DFF; border: none; padding: 22px 60px; border-radius: 8px; font-size: 1.125rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .cyber-steps-section .cta-button:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
  .cyber-steps-section .cta-button:active { transform: translateY(0); }
  @media (max-width: 768px) {.cyber-steps-section{padding: 20px} .cyber-steps-section .process-title { font-size: 1.8rem; } .cyber-steps-section .process-subtitle { font-size: 1rem; } .cyber-steps-section .process-steps { grid-template-columns: 1fr; gap: 20px; } .cyber-steps-section .step-card { padding: 24px 20px; } }
  `;
  document.head.appendChild(style);
}

export function mountCyberSteps(target: HTMLElement, configArg?: Partial<CyberStepsConfig>) {
  injectStyles();
  const config = { ...DEFAULT_CONFIG, ...configArg };
  let currentStep = 0;
  const totalSteps = config.steps!.length;
  let stepsContainer: HTMLDivElement | null = null;

  function scrollToCurrentStep() {
    if (!stepsContainer) return;
    const card = stepsContainer.children[currentStep] as HTMLElement | undefined;
    if (card) {
      stepsContainer.scrollTo({
        left: card.offsetLeft - stepsContainer.offsetLeft,
        behavior: 'smooth',
      });
    }
  }

  function render() {
    target.innerHTML = '';
    target.className = 'cyber-steps-section';
    // Section wrapper
    const section = document.createElement('section');
    section.className = 'process-container';
    // Header
    const header = document.createElement('div');
    header.className = 'process-header';
    header.innerHTML = `<h1 class="process-title">${config.title}</h1><p class="process-subtitle">${config.subtitle}</p>`;
    section.appendChild(header);
    // Nav
    const nav = document.createElement('div');
    nav.className = 'process-nav';
    // Prev button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-button';
    prevBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"></polyline></svg>`;
    prevBtn.disabled = currentStep === 0;
    prevBtn.onclick = () => { if (currentStep > 0) { currentStep--; render(); setTimeout(scrollToCurrentStep, 10); } };
    nav.appendChild(prevBtn);
    // Nav indicator
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    const navTab = document.createElement('div');
    navTab.className = 'nav-tab active';
    navTab.textContent = config.steps![currentStep].name;
    indicator.appendChild(navTab);
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement('div');
      dot.className = 'nav-dot' + (i <= currentStep ? ' active' : '');
      dot.onclick = () => { currentStep = i; render(); setTimeout(scrollToCurrentStep, 10); };
      indicator.appendChild(dot);
    }
    nav.appendChild(indicator);
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-button';
    nextBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>`;
    nextBtn.disabled = currentStep === totalSteps - 1;
    nextBtn.onclick = () => { if (currentStep < totalSteps - 1) { currentStep++; render(); setTimeout(scrollToCurrentStep, 10); } };
    nav.appendChild(nextBtn);
    section.appendChild(nav);
    // Steps
    stepsContainer = document.createElement('div');
    stepsContainer.className = 'process-steps';
    stepsContainer.style.overflowX = 'auto';
    stepsContainer.style.scrollBehavior = 'smooth';
    stepsContainer.style.display = 'flex';
    stepsContainer.style.gap = '20px';
    // Enable horizontal scroll with mouse wheel
    stepsContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        stepsContainer!.scrollLeft += e.deltaY;
      }
    }, { passive: false });
    config.steps!.forEach((step, idx) => {
      const card = document.createElement('div');
      card.className = 'step-card';
      card.innerHTML = `<div class="step-number">${idx + 1}</div><h3 class="step-title">${step.name}</h3><ul class="step-list">${step.items.map(item => `<li class='step-item'><div class='step-bullet'></div><span>${item}</span></li>`).join('')}</ul>`;
      stepsContainer!.appendChild(card);
    });
    section.appendChild(stepsContainer);
    // CTA
    const ctaBtn = document.createElement('button');
    ctaBtn.className = 'cta-button';
    ctaBtn.textContent = config.cta?.label || 'GET A QUOTE';
    ctaBtn.onclick = () => {
      if (config.cta?.onClick) config.cta.onClick();
      else alert('Redirecting to quote form...');
    };
    section.appendChild(ctaBtn);
    target.appendChild(section);
    setTimeout(scrollToCurrentStep, 10);
  }
  render();
}