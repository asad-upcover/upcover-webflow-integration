import { arrowIcon } from '../../assets/svgicons';

// Default config for fallback/demo
const DEFAULT_CONFIG = {
  blogs: [
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'May 29',
      category: 'Announcement',
      title: `upcover's second Finnies win!`,
      excerpt: 'We won the Best Workplace Diversity award at FinTech Australia Awards last night. The upcover team is 41 brilliant individ...',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/687116ba2ee82f0e5856f3a6_Rectangle%201353%20(1).png',
      date: 'May 29',
      category: 'Announcement',
      title: 'Our co-founder Anish recently joined Georgie Healy on the In The Blink of AI podcast!',
      excerpt: `They covered everything from Australia's approach to AI to how...`,
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Jan 16',
      category: 'Announcement',
      title: 'The Rise of Ransomware: How to Protect Your Business',
      excerpt: 'Ransomware attacks are on the rise. Learn how to protect your business from these threats and what steps to take if you become a victim.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Feb 10',
      category: 'Announcement',
      title: 'Why Every Startup Needs Cyber Insurance',
      excerpt: 'Startups are increasingly targeted by cybercriminals. Discover why cyber insurance is essential for your business.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Mar 12',
      category: 'Announcement',
      title: 'Data Breach Response: A Step-by-Step Guide',
      excerpt: 'A data breach can be devastating. Follow this step-by-step guide to respond effectively and minimize damage.',
      fullUrl: '#',
    },
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'Apr 18',
      category: 'Announcement',
      title: 'Cybersecurity Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and predictions for 2025.',
      fullUrl: '#',
    },
    // 7th blog remains unchanged
    {
      image: 'https://cdn.prod.website-files.com/684c2562066471bab0d1b300/6871160c1e57edbb5434af59_Rectangle%201353.png',
      date: 'May 01',
      category: 'Announcement',
      title: 'How to Train Employees for Cybersecurity',
      excerpt: 'Employees are your first line of defense. Learn how to train your team to recognize and prevent cyber threats.',
      fullUrl: '#',
    },
  ],
  pagination: {
    currentPage: 1,
  },
};

function injectStyles() {
  if (document.getElementById('cyber-blogs-styles')) return;
  const style = document.createElement('style');
  style.id = 'cyber-blogs-styles';
  style.textContent = `
.cyber-blogs-main {
  display: flex;
  gap: 30px;
  padding: 60px 102px 150px 102px;
  background: #F8F7F7;
}
.cyber-blogs-sidebar {
  min-width: 220px;
  max-width: 260px;
}
.cyber-blogs-sidebar-title {
  font-size: 1rem;
  font-weight: 700;
  color: #242826;
  margin-bottom: 18px;
}
.cyber-blogs-sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cyber-blogs-sidebar-list li {
  margin-bottom: 12px;
  color: #545464;
  font-size: 0.98rem;
  cursor: pointer;
  transition: color 0.2s;
}
.cyber-blogs-sidebar-list li:hover {
  color: #005DFF;
}
.cyber-blogs-content {
  flex: 1;
}
.cyber-blogs-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
@media (max-width: 1200px) {
  .cyber-blogs-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .cyber-blogs-cards {
    grid-template-columns: 1fr;
  }
  .cyber-blogs-main {
    padding: 50px 8px 100px 8px;
  }
  .cyber-blogs-card-title {
    font-size: 16px;
    line-height: 22px;
  }
  .cyber-blogs-card-excerpt {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
  }
  .cyber-blogs-card-link {
    font-size: 15px;
    padding: 0 8px;
  }
  .cyber-blogs-card {
    width: 88vw;
    margin: 0 auto;
  }
}
.cyber-blogs-card {
  background: #fff;
  border-radius: 10px;
//   box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 320px;
}
.cyber-blogs-card-image {
  width: 100%;
//   height: 140px;
  object-fit: cover;
}
.cyber-blogs-card-body {
  padding: 30px;
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
.cyber-blogs-card-links {
  display: flex;
  gap: 18px;
}
.cyber-blogs-card-link {
  color: #005DFF;
  background: none;
  font-weight: 600;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: color 0.2s;
  min-width: unset;
  min-height: unset;
  border-radius: unset;
  padding: 0;
}

.cyber-blogs-pagination-btn {
  background: #fff;
border-radius: 25px;
border: 1px solid #242826;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #242826;
  transition: background 0.2s, color 0.2s;
  // margin: 0 2px;
}
// .cyber-blogs-pagination-btn:disabled {
//   opacity: 0.5;
// }
.cyber-blogs-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.cyber-blogs-arrow-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #005DFF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.cyber-blogs-arrow-btn svg {
  width: 30px;
  height: 30px;
  display: block;
  stroke: #fff;
}
@media (max-width: 900px) {
  .cyber-blogs-main {
    flex-direction: column;
    gap: 18px;
  }
  .cyber-blogs-sidebar {
    max-width: 100%;
    min-width: 0;
  }
  .cyber-blogs-cards {
    grid-template-columns: 1fr;
  }
}
`;
  document.head.appendChild(style);
}

export function mountCyberBlogs(target: HTMLElement, configArg?: any) {
  injectStyles();
  const config = configArg || DEFAULT_CONFIG;
  // Remove activeTab, tabs, and sidebar logic
  let searchValue = '';
  let currentPage = config.pagination.currentPage || 1;

  function render() {
    target.innerHTML = '';
    target.className = 'cyber-blogs-section';

    // Remove header (no search, no tabs)

    // Main
    const main = document.createElement('div');
    main.className = 'cyber-blogs-main';

    // Remove sidebar
    // Content
    const content = document.createElement('div');
    content.className = 'cyber-blogs-content';

    // Filter blogs by search only
    let filteredBlogs = config.blogs;
    if (searchValue) {
      filteredBlogs = filteredBlogs.filter((b: any) =>
        b.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Pagination
    const blogsPerPage = 6;
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    const startIdx = (currentPage - 1) * blogsPerPage;
    const pageBlogs = filteredBlogs.slice(startIdx, startIdx + blogsPerPage);

    // Blog cards
    const cards = document.createElement('div');
    cards.className = 'cyber-blogs-cards';
    pageBlogs.forEach((blog: any) => {
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
      // Add a dot before the category
      meta.innerHTML = `${blog.date} <span style="display:inline-block;width:5px;height:5px;background:#494949;border-radius:50%;"></span> ${blog.category}`;
      body.appendChild(meta);
      const title = document.createElement('div');
      title.className = 'cyber-blogs-card-title';
      title.textContent = blog.title;
      body.appendChild(title);
      const excerpt = document.createElement('div');
      excerpt.className = 'cyber-blogs-card-excerpt';
      excerpt.textContent = blog.excerpt;
      body.appendChild(excerpt);
      const links = document.createElement('div');
      links.className = 'cyber-blogs-card-links';
      const fullLink = document.createElement('a');
      fullLink.className = 'cyber-blogs-card-link';
      fullLink.href = '#';
      fullLink.innerHTML = 'Read Full Article';
      // Add arrow button as a separate element
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

    // Add SVGs for left and right arrows
    const leftArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
    const rightArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    // Pagination controls (new style)
    {
      const pagination = document.createElement('div');
      pagination.className = 'cyber-blogs-pagination';
      // Left arrow
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
      // Page text
      const pageText = document.createElement('span');
      pageText.style.margin = '0 20px';
      pageText.style.fontWeight = '400';
      pageText.style.fontSize = '20px';
      pageText.textContent = `${currentPage} of ${totalPages}`;
      pagination.appendChild(pageText);
      // Right arrow
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
    }

    main.appendChild(content);
    target.appendChild(main);
  }

  render();
}
