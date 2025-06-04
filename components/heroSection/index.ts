import "./style.css";
import { tabs, defaultTab } from "../../utils/config";
import { renderHeroBottomImage } from "../../utils/utilsFunctions";

// Utility to render hero section for a given tab config
function renderHeroSection(tab = defaultTab) {
  const main = document.getElementById("hero-section");
  if (!main) return;

  // Clear previous content
  main.innerHTML = "";
  main.className = "hero-section";
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";

  // Button
  const tag = document.createElement("button");
  tag.className = "tag-button";
  tag.innerText = tab.hero?.primaryButtonLabel;

  // Heading
  const h1 = document.createElement("h1");
  h1.innerText = tab.hero?.heading;

  // Trust indicators
  const trustIndicators = document.createElement("div");
  trustIndicators.className = "trust-indicators";

  // Google rating
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

  // Trusted by
  const trustedBy = document.createElement("div");
  trustedBy.className = "trusted-by";
  if (tab.hero?.trustInfo?.shieldIcon) {
    const shieldImg = document.createElement("span");
    shieldImg.className = "shield"
    shieldImg.innerHTML = tab.hero.trustInfo.shieldIcon;
    trustedBy.appendChild(shieldImg);
  }
  const trustedText = document.createElement("p");
  trustedText.className = "trustedtext";
  trustedText.innerHTML = tab.hero?.trustInfo?.text;
  trustedBy.appendChild(trustedText);

  trustIndicators.appendChild(rating);
  trustIndicators.appendChild(trustedBy);

  // CTA Button
  const ctaButton = document.createElement("a");
  ctaButton.href = "#";
  ctaButton.className = "cta-button";
  ctaButton.innerText = tab.hero?.secondaryButtonLabel;
  ctaButton.style.backgroundColor = tab.themeColor;
  ctaButton.style.color = tab.themeSecondaryColor || "#fff";




  // Append all
  contentWrapper.appendChild(tag);
  contentWrapper.appendChild(h1);
  contentWrapper.appendChild(trustIndicators);
  contentWrapper.appendChild(ctaButton);

  if (tab.hero?.backgroundImage) {
    renderHeroBottomImage(tab.hero.backgroundImage);
  }


  main.appendChild(contentWrapper);

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