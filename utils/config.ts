import { callIcon, arrowDownIcon, starRating, googleLogo, trustedPilot } from "../assets/svgicons";

export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  themeSecondaryColor?: string;
  themeTertiaryColor?: string;
  buttonColor?: string;
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
  hero: HeroSection
}

export interface DropdownSection {
  title?: string;
  items?: { label: string; href?: string }[];
  type?: "list" | "box";
  boxContent?: {
    left: {
      imgSrc: string;
      heading: string;
      text: string;
      primaryButton: string
      secondaryButton?: string;
    };
    right?: {
      heading?: string;
      text?: string;
      button?: string;
    };
  };
}

export interface HeroSection {
  heading: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  googleRating: {
    text: string;
    onGoogle: string
    googleLogo: string;
    starIcon: string;
  };
  trustInfo: {
    text: string;
    shieldIcon: string;
  };
  backgroundImage: string;
}

export const tabs: TabConfig[] = [
  {
    id: "businesses",
    label: "Businesses & Sole traders",
    themeColor: "#FF522D",
    themeTertiaryColor: "#FFCFC5",
    dropdown: {
      Coverages: [
        {
          title: "INDUSTRY",
          items: [
            { label: "Disability Support & Care", href: "/product/disability-support-care" },
            { label: "Independent Living, STAs and SDAs", href: "/product/independent-living-stas-sdas" },
            { label: "Doctors, GPs and Clinics", href: "/product/doctors-gps-clinics" },
            { label: "Beauty and Personal Care", href: "/product/beauty-personal-care" },
            { label: "Therapists and Healing", href: "/product/therapists-healing" },
            { label: "Hospitality, Pubs and Restaurants", href: "/product/hospitality-pubs-restaurants" },
            { label: "Tradespeople, Plumbers and Roofers", href: "/product/tradespeople-plumbers-roofers" },
            { label: "Construction", href: "/product/construction" },
            { label: "IT Contractors", href: "/product/it-contractors" },
            { label: "Retail", href: "/product/retail" },
            { label: "Consultants", href: "/product/consultants" },
            { label: "Real Estate", href: "/product/real-estate" },
            { label: "View all industries", href: "/product/industries" }
          ]
        },
        {
          title: "COVERS",
          items: [
            { label: "Healthcare Professionals Insurance", href: "/product/healthcare-professionals-insurance" },
            { label: "Professional Indemnity Insurance", href: "/product/professional-indemnity-insurance" },
            { label: "Medical Malpractice Insurance", href: "/product/medical-malpractice-insurance" },
            { label: "Public Liability Insurance", href: "/product/public-liability-insurance" },
            { label: "Products Liability Insurance", href: "/product/products-liability-insurance" },
            { label: "Cyber and Privacy Liability Insurance", href: "/product/cyber-privacy-liability-insurance" },
            { label: "Management Liability Insurance", href: "/product/management-liability-insurance" },
            { label: "Business Package Insurance", href: "/product/business-package-insurance" },
            { label: "Business Equipment Insurance", href: "/product/business-equipment-insurance" },
            { label: "Personal Accident & Sickness Insurance", href: "/product/personal-accident-sickness-insurance" },
            { label: "Employment Practices Liability Insurance", href: "/product/employment-practices-liability-insurance" },
            { label: "Motor Insurance for Businesses", href: "/product/motor-insurance-businesses" },
            { label: "View all coverages", href: "/product/coverages" }
          ]
        },
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
              heading: "NOT SURE?",
              text: "Talk to our small business insurance specialists to find a tailored cover that works for you and your unique business needs. ",
              primaryButton: "CHAT WITH A SPECIALIST",
              secondaryButton: "CALL 1300 872 683"
            },
            right: {
              heading: "GET INSTANT QUOTE",
              text: "Coverages across 1000+ industries",
              button: "GET A QUOTE"
            }
          }
        }
      ],
    },
    svg: arrowDownIcon,
    hero: {
      heading: "RISK MANAGEMENT FOR HIGH GROWTH COMPANY ",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/businesses-hero-image-full.png"
    }
  },
  {
    id: "tech",
    label: "Tech Startups & Enterprises",
    themeColor: "#005DFF",
    buttonColor: "#CADDFF",
    dropdown: {
      Coverages: [
        {
          title: "COVER",
          items: [
            { label: "Cyber & Technology Liability", href: "/product/cyber-technology-liability" },
            { label: "Technology & Professional Indemnity", href: "/product/technology-professional-indemnity" },
            { label: "Intellectual Property", href: "/product/intellectual-property" },
            { label: "Business Property", href: "/product/business-property" },
            { label: "Directors & Officers Liability", href: "/product/directors-officers-liability" },
            { label: "Medical Malpractice", href: "/product/medical-malpractice" },
            { label: "Media Liability", href: "/product/media-liability" },
            { label: "Investment Managers Indemnity", href: "/product/investment-managers-indemnity" },
            { label: "Employment Practices Liability", href: "/product/employment-practices" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Crime Cover", href: "/product/crime-cover" },
            { label: "Public and Product Liability", href: "/product/public-product-liability" },
            { label: "View all covers", href: "/product/coverages" },
          ],
        },
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/2a1339faabda847f116061ee305805ee8c3cd7bf.png",
              heading: "COMPLEX RISK",
              text: "Our tech-specialist brokerage team provide custom cover for high-growth companies with complex risks, web3, startups and scaleups in any stage of fundraising.",
              primaryButton: "TALK TO A SPECIALIST ",
            }
          }
        }
      ],

    },
    svg: arrowDownIcon,
    hero: {
      heading: "BUSINESS INSURANCE YOU CAN FINALLY TRUST",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/tech-hero-image-full.png"
    }
  },
  {
    id: "motor",
    label: "Motor & Fleet",
    themeColor: "#D5E525",
    themeSecondaryColor: "#3B4125",
    themeTertiaryColor: "#F8FFAF",
    buttonColor: "#F8FFAF",
    dropdown: {
      Coverages: [
        {
          title: "MOTOR INSURANCE",
          items: [
            { label: "For Sole Traders", href: "/product/motor/for-sole-traders" },
            { label: "For Small Business", href: "/product/motor/for-small-business" },
            { label: "For Rideshare", href: "/product/motor/for-rideshare" },
            { label: "Mobile, plant & Equipment", href: "/product/motor/mobile-plant-equipment" }
          ],
        },
        {
          title: "FLEET MANAGERS & CORPORATES",
          items: [
            { label: "Courier Fleets", href: "/product/fleet/courier-fleets" },
            { label: "Own Goods Fleets", href: "/product/fleet/own-goods-fleets" },
            { label: "Rentals", href: "/product/fleet/rentals" },
            { label: "Heavy Vehicles", href: "/product/fleet/heavy-vehicles" }
          ],
        },
        {
          title: "FLEET INSURANCE",
          items: [
            { label: "Courier Fleets", href: "/product/fleet-insurance/courier-fleets" },
            { label: "Own Goods Fleets", href: "/product/fleet-insurance/own-goods-fleets" },
            { label: "Rentals", href: "/product/fleet-insurance/rentals" },
            { label: "Heavy Vehicles", href: "/product/fleet-insurance/heavy-vehicles" }
          ],
        },
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
              heading: "MAKE A CLAIM",
              text: `If you're a fleet manager, driver, or you have been involved in an accident it's crucial to report this as soon as possoble
              <br><br>
              Takes less than 5 mins Via e-form or up to 45 mins via call`,
              primaryButton: "REPORT CLAIM VIA E-FORM ",
              secondaryButton: "CALL 1300 872 683"
            }
          }
        }
      ],
    },
    svg: arrowDownIcon,
    hero: {
      heading: "INDUSTRY LEADING MOTOR AND FLEET INSURANCE",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/motor-hero-image-full.png"
    }
  },
];

export const branding = {
  companyName: "upcover",
  contactRegion: [
    { code: "AU", label: "AU", url: "#" },
    { code: "NZ", label: "NZ", url: "#" },
  ],
  contactPhone: "1300 872 683",
  svg: callIcon,
};
export const defaultTab = tabs[0];