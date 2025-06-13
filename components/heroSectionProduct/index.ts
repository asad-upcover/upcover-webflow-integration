import "./style.css";
import { tabs, defaultTab } from "../../utils/config";
import { renderHeroBottomImage } from "../../utils/utilsFunctions";

// Utility to render hero section for a given tab config
function renderHeroSection(tab = defaultTab) {
    const main = document.getElementById("hero-section-product");
    if (!main) return;

    // Clear previous content
    main.innerHTML = "";
    main.className = "hero-section-product-wrapper"; // new wrapper class

    // Create full-width background wrapper
    const bgWrapper = document.createElement("div");
    bgWrapper.className = "hero-section-product-bg"; // full-width background
    if (tab.hero?.backgroundImage) {
        bgWrapper.style.backgroundImage = `url(https://storage.googleapis.com/upcover-webflow-integration/assets/images/ab85bf83bc5f8f22d61cd0489d6a441ae7e6b1a0.png)`;
        bgWrapper.style.backgroundSize = "cover";
        bgWrapper.style.backgroundPosition = "center";
        bgWrapper.style.width = "100vw";
        // bgWrapper.style.height = "930px";
    }

    // Create content wrapper inside background
    const contentDiv = document.createElement("div");
    contentDiv.className = "hero-section-product"; // existing class

    // Create content inside contentDiv
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "content-wrapper";

    // Heading
    const h1 = document.createElement("h1");
    h1.innerText = "CYBER INSURANCE";

    // Trust indicators
    const trustIndicators = document.createElement("div");
    trustIndicators.className = "trust-indicators";

    const rating = document.createElement("div");
    rating.className = "rating";
    if (tab.hero?.googleRating?.googleLogo) {
        const ratingImg = document.createElement("span");
        ratingImg.innerHTML = tab.hero.googleRating.googleLogo;
        rating.appendChild(ratingImg);
    }

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = tab.hero?.googleRating?.text;

    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = tab.hero?.googleRating?.starIcon;

    const onGoogle = document.createElement("span");
    onGoogle.className = "googletext";
    onGoogle.innerText = tab.hero?.googleRating?.onGoogle;

    rating.appendChild(score);
    rating.appendChild(star);
    rating.appendChild(onGoogle);

    const trustedBy = document.createElement("div");
    trustedBy.className = "trusted-by";
    if (tab.hero?.trustInfo?.shieldIcon) {
        const shieldImg = document.createElement("span");
        shieldImg.className = "shield";
        shieldImg.innerHTML = tab.hero.trustInfo.shieldIcon;
        trustedBy.appendChild(shieldImg);
    }

    const trustedText = document.createElement("p");
    trustedText.className = "trustedtext";
    trustedText.innerHTML = tab.hero?.trustInfo?.text;
    trustedBy.appendChild(trustedText);

    trustIndicators.appendChild(rating);
    trustIndicators.appendChild(trustedBy);

    const paragraph = document.createElement("p");
    paragraph.className = "paragraph"
    paragraph.innerText = "Protect your business from data breaches, ransomware, and cyber threats with our all-in-one cyber insurance—financial coverage and expert support to help you recover fast.";

    const ctaButton1= document.createElement("a");
    ctaButton1.href = "#";
    ctaButton1.className = "cta-button";
    ctaButton1.innerText = "GET A FREE CYBER RISK ASSESSMENT";
    ctaButton1.style.backgroundColor = "#fff";
    ctaButton1.style.color = tab.themeSecondaryColor ?? tab.themeColor;

    const ctaButton2 = document.createElement("a");
    ctaButton2.href = "#";
    ctaButton2.className = "cta-button";
    ctaButton2.innerText = "GET A QUOTE";
    ctaButton2.style.backgroundColor = tab.themeColor;
    ctaButton2.style.color = tab.themeSecondaryColor || "#fff";

    // IMAGES FEATURED
    const featured = document.createElement("div");
    featured.className = "featured";

    const featuredText = document.createElement("h1");
    featuredText.innerHTML = "Featured On"
    featuredText.className = "featured-text";

    const featuredLogos = document.createElement("div");
    featuredLogos.className = "featured-logos";

    const logoUrls = [
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/insurance-news-au.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/business-insider.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/insurance-business-au.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/smart-company.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/sydney-morning.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/financial-review.png",
        "https://storage.googleapis.com/upcover-webflow-integration/assets/images/au-business-news.png",
    ];

    logoUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Featured logo";
        featuredLogos.appendChild(img);
    });

    featured.appendChild(featuredText);
    featured.appendChild(featuredLogos);

    contentWrapper.appendChild(h1);
    contentWrapper.appendChild(trustIndicators);
    contentWrapper.appendChild(paragraph);
    contentWrapper.appendChild(ctaButton1);
    contentWrapper.appendChild(ctaButton2);

    contentWrapper.appendChild(featured)
    contentDiv.appendChild(contentWrapper); // content inside inner container
    bgWrapper.appendChild(contentDiv);      // container inside full-width bg wrapper
    main.appendChild(bgWrapper);           // everything inside outer div
}


// Listen for tab changes (custom event dispatched in setActiveTab)
document.addEventListener("activeTabChanged", (e: any) => {
    const tabId = e.detail?.tabId;
    const tab = tabs.find((t) => t.id === tabId) || defaultTab;
    renderHeroSection(tab);
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
    renderHeroSection(defaultTab);
});