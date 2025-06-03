import "./style.css";

// import { defaultTab } from "../../utils/config";
// import { upcoverLogo } from "../../assets/svgicons";

function renderHeroSection() {
  const main = document.getElementById("hero-section");
  if (!main) return;

  main.className = "hero-section";

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";

  const tag = document.createElement("button");
  tag.className = "tag-button";
  tag.innerText = "Protect your growth";

  const h1 = document.createElement("h1");
  h1.innerText = "RISK MANAGEMENT FOR HIGH GROWTH COMPANY";

  const trustIndicators = document.createElement("div");
  trustIndicators.className = "trust-indicators";

  const rating = document.createElement("div");
  rating.className = "rating";
  const ratingImg = document.createElement("img");
  ratingImg.src = "https://c.animaapp.com/PBKynVU5/img/image-12@2x.png";
  ratingImg.alt = "Google logo";
  const score = document.createElement("span");
  score.className = "score";
  score.innerText = "4.9/5";
  const star = document.createElement("span");
  star.className = "star";
  star.innerText = "★";
  const onGoogle = document.createElement("span");
  onGoogle.innerText = "on Google";
  rating.appendChild(ratingImg);
  rating.appendChild(score);
  rating.appendChild(star);
  rating.appendChild(onGoogle);

  const trustedBy = document.createElement("div");
  trustedBy.className = "trusted-by";
  const shieldImg = document.createElement("img");
  shieldImg.src = "https://c.animaapp.com/PBKynVU5/img/shield-2@2x.png";
  shieldImg.alt = "Shield icon";
  const trustedText = document.createElement("p");
  trustedText.innerHTML = "Trusted by <strong>60,000+</strong> small business";
  trustedBy.appendChild(shieldImg);
  trustedBy.appendChild(trustedText);

  trustIndicators.appendChild(rating);
  trustIndicators.appendChild(trustedBy);

  const ctaButton = document.createElement("a");
  ctaButton.href = "#";
  ctaButton.className = "cta-button";
  ctaButton.innerText = "GET A QUOTE";

  contentWrapper.appendChild(tag);
  contentWrapper.appendChild(h1);
  contentWrapper.appendChild(trustIndicators);
  contentWrapper.appendChild(ctaButton);

  main.appendChild(contentWrapper);
}

// Auto-run on load
document.addEventListener("DOMContentLoaded", renderHeroSection);
