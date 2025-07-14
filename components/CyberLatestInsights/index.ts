import { arrowIcon } from '../../assets/svgicons';

// Tab config
const TABS = [
    { id: 'business', label: 'Businesses & Sole traders' },
    { id: 'tech', label: 'Tech Startups & Enterprises' },
    { id: 'motor', label: 'Motor & Fleet' },
];

// Blog type for clarity
interface Blog {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  fullUrl: string;
}
// Blog data per tab
const BLOGS_BY_TAB: { [key: string]: Blog[] } = {
  business: [
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'May 29',
      category: 'Business Insurance',
      title: 'Business Cybersecurity: What You Need to Know',
      excerpt: 'A quick guide for businesses to understand the essentials of cybersecurity and insurance.',
      fullUrl: '#',
    },
  ],
  tech: [
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'May 29',
      category: 'Cyber Insurance',
      title: 'Cybersecurity Awareness Month 2025 — Data, Data, Goose!',
      excerpt: 'As the leaves turn golden and the wind blows colder, cybersecurity awareness month is upon us! Here’s what it’s all ...',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/687116ba2ee82f0e5856f3a6_Rectangle%201353%20(1).png',
      date: 'Jun 28',
      category: 'Cyber Insurance',
      title: `Cyber Attacks & Supply Chain Disruption: Startup’s Worst Enemy?`,
      excerpt: 'Explore the evolving threat landscape for supply chain disruptions, mitigation strategies, and the importance of risk ...',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Jul 10',
      category: 'Cyber Insurance',
      title: 'The Rise of Ransomware: How to Protect Your Business',
      excerpt: 'Ransomware attacks are on the rise. Learn how to protect your business from these threats and what steps to take if you become a victim.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Aug 15',
      category: 'Cyber Insurance',
      title: 'Why Every Startup Needs Cyber Insurance',
      excerpt: 'Startups are increasingly targeted by cybercriminals. Discover why cyber insurance is essential for your business.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Sep 01',
      category: 'Cyber Insurance',
      title: 'Data Breach Response: A Step-by-Step Guide',
      excerpt: 'A data breach can be devastating. Follow this step-by-step guide to respond effectively and minimize damage.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Oct 05',
      category: 'Cyber Insurance',
      title: 'Cybersecurity Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and predictions for 2025.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Nov 20',
      category: 'Cyber Insurance',
      title: 'How to Train Employees for Cybersecurity',
      excerpt: 'Employees are your first line of defense. Learn how to train your team to recognize and prevent cyber threats.',
      fullUrl: '#',
    },
  ],
  motor: [
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/687116ba2ee82f0e5856f3a6_Rectangle%201353%20(1).png',
      date: 'Dec 01',
      category: 'Motor Insurance',
      title: 'Fleet Cybersecurity: Protecting Your Vehicles',
      excerpt: 'How to keep your business vehicles and fleet data safe from cyber threats in 2025.',
      fullUrl: '#',
    },
  ],
};

const COVERAGE_LIST = [
    'All',
    'Healthcare Professionals Insurance',
    'Professional Indemnity Insurance',
    'Medical Malpractice Insurance',
    'Public Liability Insurance',
    'Products Liability Insurance',
    'Cyber and Privacy Liability Insurance',
    'Management Liability Insurance',
    'Business Package Insurance',
    'Business Equipment Insurance',
    'Motor Insurance for Businesses',
];

function injectStyles() {
    if (document.getElementById('cyber-blogs-styles')) return;
    const style = document.createElement('style');
    style.id = 'cyber-blogs-styles';
    style.textContent = `
  .cyber-blogs-section {
    margin: 0 auto;
    font-family: 'Inter', Arial, sans-serif;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .cyber-blogs-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F8F7F7;
    padding: 20px 100px;
  }
  .cyber-blogs-tabs {
    display: flex;
    gap: 14px;
  }
  .cyber-blogs-tab-btn {
    background: #FFF;
    border: none;
    border-radius: 10px;
    color: #545464;
    font-weight: 700;
    font-size: 18px;
    padding: 19px 16px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  .cyber-blogs-tab-btn.active {
    background: #005DFF;
    color: #fff;
    font-weight: 600;
  }
  .cyber-blogs-search {
    margin-left: 24px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .cyber-blogs-search input {
    padding: 18px;
    border-radius: 10px;
    border: none;
    color: #545464;
    font-size: 18px;
    width: 400px;
    background: #fff;
    padding-left: 56px;
  }
  .cyber-blogs-search input::placeholder {
    color: #545464;
    opacity: 1;
  }
  .cyber-blogs-main {
    display: flex;
    gap: 90px;
    padding: 70px 102px 150px 102px;
  }
  .cyber-blogs-sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .cyber-blogs-sidebar-title {
    font-size: 20px;
    font-weight: 700;
    color: #242826;
    margin-bottom: 20px;
  }
  .cyber-blogs-sidebar-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cyber-blogs-sidebar-list li {
    font-size: 18px;
    color: #545464;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 0;
    transition: color 0.2s, font-weight 0.2s;
  }
  .cyber-blogs-sidebar-list li:hover {
    color: #005DFF;
    font-weight: 600;
  }
  .cyber-blogs-sidebar-list li.active {
    color: #005DFF;
    font-weight: 700;
    cursor: default;
  }
  .cyber-blogs-content {
    flex: 1;
  }
  .cyber-blogs-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (max-width: 1200px) {
    .cyber-blogs-cards {
      grid-template-columns: 1fr;
    }
  }
  .cyber-blogs-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 320px;
  }
  .cyber-blogs-card-image {
    width: 100%;
    object-fit: cover;
  }
  .cyber-blogs-card-body {
    padding: 30px 0 10px 0 ;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .cyber-blogs-card-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    color: #494949;
    font-weight: 400;
    margin-bottom: 15px;
  }
  .cyber-blogs-card-title {
    color: #242826;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
  .cyber-blogs-card-excerpt {
    margin-top: 10px;
    margin-bottom: 30px;
    color: #494949;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
  }
  .cyber-blogs-card-link {
    color: #005DFF;
    background: none;
    font-weight: 600;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: color 0.2s;
    padding: 0;
  }
  .cyber-blogs-arrow-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #005DFF;
    margin-left: 10px;
    transition: background 0.2s;
  }
  .cyber-blogs-card-link:hover .cyber-blogs-arrow-btn {
    background: #003EA6;
  }
  .cyber-blogs-arrow-btn svg {
    width: 22px;
    height: 22px;
    display: block;
  }
  .cyber-blogs-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .cyber-blogs-pagination-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #242826;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: #242826;
    transition: background 0.2s, color 0.2s;
  }
  `;
    document.head.appendChild(style);
}

export function mountCyberLatestInsights(target: HTMLElement, configArg?: any) {
    injectStyles();
    // Use config.blogsByTab if provided, otherwise fallback
    const config = configArg && configArg.blogsByTab ? { blogsByTab: configArg.blogsByTab } : { blogsByTab: BLOGS_BY_TAB };
    let activeTab = 'tech'; // Default to Tech tab
    let searchValue = '';
    let activeCoverage = 'All';
    let currentPage = 1;

    function render() {
        target.innerHTML = '';
        target.className = 'cyber-blogs-section';

        // Header with tabs (left) and search (right)
        const header = document.createElement('div');
        header.className = 'cyber-blogs-header';

        // Tabs left
        const tabs = document.createElement('div');
        tabs.className = 'cyber-blogs-tabs';
        TABS.forEach(tab => {
            const btn = document.createElement('button');
            btn.className = 'cyber-blogs-tab-btn' + (tab.id === activeTab ? ' active' : '');
            btn.textContent = tab.label;
            btn.onclick = () => {
                if (activeTab !== tab.id) {
                    activeTab = tab.id;
                    render();
                }
            };
            tabs.appendChild(btn);
        });
        header.appendChild(tabs);

        // Search right
        const searchDiv = document.createElement('div');
        searchDiv.className = 'cyber-blogs-search';
        // Wrapper for input and icon
        const searchWrapper = document.createElement('div');
        searchWrapper.style.position = 'relative';
        searchWrapper.style.display = 'inline-block';
        // Add search icon SVG
        const searchIcon = document.createElement('span');
        searchIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#545464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22L20 20" stroke="#545464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        searchIcon.style.position = 'absolute';
        searchIcon.style.left = '18px';
        searchIcon.style.top = '50%';
        searchIcon.style.transform = 'translateY(-50%)';
        searchIcon.style.pointerEvents = 'none';
        searchWrapper.appendChild(searchIcon);
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search...';
        searchInput.value = searchValue;
        searchInput.oninput = (e) => {
            searchValue = (e.target as HTMLInputElement).value;
            render();
        };
        searchWrapper.appendChild(searchInput);
        searchDiv.appendChild(searchWrapper);
        header.appendChild(searchDiv);

        target.appendChild(header);

        // Main content row
        const main = document.createElement('div');
        main.className = 'cyber-blogs-main';

        // Sidebar
        const sidebar = document.createElement('div');
        sidebar.className = 'cyber-blogs-sidebar';
        const sidebarTitle = document.createElement('div');
        sidebarTitle.className = 'cyber-blogs-sidebar-title';
        sidebarTitle.textContent = 'COVERAGE';
        sidebar.appendChild(sidebarTitle);
        const sidebarList = document.createElement('ul');
        sidebarList.className = 'cyber-blogs-sidebar-list';
        COVERAGE_LIST.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            if (item === activeCoverage) li.style.fontWeight = '700';
            if (item === activeCoverage) li.style.color = '#005DFF';
            if (item === activeCoverage) li.style.cursor = 'default';
            li.onclick = () => {
                if (activeCoverage !== item) {
                    activeCoverage = item;
                    render();
                }
            };
            sidebarList.appendChild(li);
        });
        sidebar.appendChild(sidebarList);
        main.appendChild(sidebar);

        // Content
        const content = document.createElement('div');
        content.className = 'cyber-blogs-content';

        // Filter blogs by tab
        let filteredBlogs = config.blogsByTab[activeTab] || [];
        if (searchValue) {
            filteredBlogs = filteredBlogs.filter((b: Blog) =>
                b.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                b.excerpt.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        // Pagination logic (6 per page)
        const blogsPerPage = 6;
        const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const startIdx = (currentPage - 1) * blogsPerPage;
        const pageBlogs = filteredBlogs.slice(startIdx, startIdx + blogsPerPage);

        // Blog cards
        const cards = document.createElement('div');
        cards.className = 'cyber-blogs-cards';
        pageBlogs.forEach((blog: Blog) => {
            const card = document.createElement('div');
            card.className = 'cyber-blogs-card';
            const img = document.createElement('img');
            img.className = 'cyber-blogs-card-image';
            img.src = blog.image;
            img.alt = blog.title;
            card.appendChild(img);
            const body = document.createElement('div');
            body.className = 'cyber-blogs-card-body';
            const meta = document.createElement('div');
            meta.className = 'cyber-blogs-card-meta';
            meta.textContent = `${blog.date} • ${blog.category}`;
            body.appendChild(meta);
            const title = document.createElement('div');
            title.className = 'cyber-blogs-card-title';
            title.textContent = blog.title;
            body.appendChild(title);
            const excerpt = document.createElement('div');
            excerpt.className = 'cyber-blogs-card-excerpt';
            excerpt.textContent = blog.excerpt;
            body.appendChild(excerpt);
            // Read Full Article section (match CyberBlogs/CyberTopArticles)
            const links = document.createElement('div');
            links.className = 'cyber-blogs-card-links';
            const fullLink = document.createElement('a');
            fullLink.className = 'cyber-blogs-card-link';
            fullLink.href = blog.fullUrl;
            fullLink.innerHTML = 'Read Full Article';
            // Arrow button
            const arrowBtn = document.createElement('span');
            arrowBtn.className = 'cyber-blogs-arrow-btn';
            const customArrowSVG = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0391 7.41272L25.6266 15.0002L18.0391 22.5877" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.375 15.0002H25.4125" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            arrowBtn.innerHTML = customArrowSVG;
            // Force arrow SVG color to white
            const svg = arrowBtn.querySelector('svg');
            if (svg) {
                const path = svg.querySelector('path');
                if (path) path.setAttribute('stroke', '#fff');
            }
            fullLink.appendChild(arrowBtn);
            links.appendChild(fullLink);
            body.appendChild(links);
            card.appendChild(body);
            cards.appendChild(card);
        });
        content.appendChild(cards);
        // Pagination controls
        const leftArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
        const rightArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
        const pagination = document.createElement('div');
        pagination.className = 'cyber-blogs-pagination';
        const leftBtn = document.createElement('button');
        leftBtn.className = 'cyber-blogs-pagination-btn';
        leftBtn.innerHTML = leftArrow;
        leftBtn.disabled = currentPage === 1;
        leftBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                render();
            }
        };
        pagination.appendChild(leftBtn);
        const pageText = document.createElement('span');
        pageText.style.margin = '0 20px';
        pageText.style.fontWeight = '400';
        pageText.style.fontSize = '20px';
        pageText.textContent = `${currentPage} of ${totalPages}`;
        pagination.appendChild(pageText);
        const rightBtn = document.createElement('button');
        rightBtn.className = 'cyber-blogs-pagination-btn';
        rightBtn.innerHTML = rightArrow;
        rightBtn.disabled = currentPage === totalPages;
        rightBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                render();
            }
        };
        pagination.appendChild(rightBtn);
        content.appendChild(pagination);
        main.appendChild(content);
        target.appendChild(main);
    }

    render();
}
