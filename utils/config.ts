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
            { label: "Disability Support & Care", href: "/disability-support-care" },
            { label: "Independent Living, STAs and SDAs", href: "/independent-living-stas-sdas" },
            { label: "Doctors, GPs and Clinics", href: "/doctors-gps-clinics" },
            { label: "Beauty and Personal Care", href: "/beauty-personal-care" },
            { label: "Therapists and Healing", href: "/therapists-healing" },
            { label: "Hospitality, Pubs and Restaurants", href: "/hospitality-pubs-restaurants" },
            { label: "Tradespeople, Plumbers and Roofers", href: "/tradespeople-plumbers-roofers" },
            { label: "Construction", href: "/construction" },
            { label: "IT Contractors", href: "/it-contractors" },
            { label: "Retail", href: "/retail" },
            { label: "Consultants", href: "/consultants" },
            { label: "Real Estate", href: "/real-estate" },
            { label: "View all industries", href: "/industries" }
          ]
        },

        {
          title: "COVERS",
          items: [
            { label: "Healthcare Professionals Insurance", href: "/healthcare-professionals-insurance" },
            { label: "Professional Indemnity Insurance", href: "/professional-indemnity-insurance" },
            { label: "Medical Malpractice Insurance", href: "/medical-malpractice-insurance" },
            { label: "Public Liability Insurance", href: "/public-liability-insurance" },
            { label: "Products Liability Insurance", href: "/products-liability-insurance" },
            { label: "Cyber and Privacy Liability Insurance", href: "/cyber-privacy-liability-insurance" },
            { label: "Management Liability Insurance", href: "/management-liability-insurance" },
            { label: "Business Package Insurance", href: "/business-package-insurance" },
            { label: "Business Equipment Insurance", href: "/business-equipment-insurance" },
            { label: "Personal Accident & Sickness Insurance", href: "/personal-accident-sickness-insurance" },
            { label: "Employment Practices Liability Insurance", href: "/employment-practices-liability-insurance" },
            { label: "Motor Insurance for Businesses", href: "/motor-insurance-businesses" },
            { label: "View all coverages", href: "/coverages" }
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
      Company: [
        {
          title: "INDUSTRY",
          items: [
            { label: "Disability Support & Care", href: "/industries/disability-support" },
            { label: "Independent Living, STAs and SDAs", href: "/industries/independent-living" },
            { label: "Doctors, GPs and Clinics", href: "/industries/doctors-gps-clinics" },
            { label: "Beauty and Personal Care", href: "/industries/beauty-personal-care" },
            { label: "Therapists and Healing", href: "/industries/therapists-healing" },
            { label: "Hospitality, Pubs and Restaurants", href: "/industries/hospitality-pubs-restaurants" },
            { label: "Tradespeople, Plumbers and Roofers", href: "/industries/tradespeople" },
            { label: "Construction", href: "/industries/construction" },
            { label: "IT Contractors", href: "/industries/it-contractors" },
            { label: "Retail", href: "/industries/retail" },
            { label: "Consultants", href: "/industries/consultants" },
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "View all industries", href: "/industries" },
          ],
        },
        {
          title: "COVERS",
          items: [
            { label: "Healthcare Professionals Insurance", href: "/coverages/healthcare-professionals" },
            { label: "Professional Indemnity Insurance", href: "/coverages/professional-indemnity" },
            { label: "Medical Malpractice Insurance", href: "/coverages/medical-malpractice" },
            { label: "Public Liability Insurance", href: "/coverages/public-liability" },
            { label: "Products Liability Insurance", href: "/coverages/products-liability" },
            { label: "Cyber and Privacy Liability Insurance", href: "/coverages/cyber-privacy" },
            { label: "Management Liability Insurance", href: "/coverages/management-liability" },
            { label: "Business Package Insurance", href: "/coverages/business-package" },
            { label: "Business Equipment Insurance", href: "/coverages/business-equipment" },
            { label: "Personal Accident & Sickness Insurance", href: "/coverages/personal-accident-sickness" },
            { label: "Employment Practices Liability Insurance", href: "/coverages/employment-practices" },
            { label: "Motor Insurance for Businesses", href: "/coverages/motor" },
            { label: "View all coverages", href: "/coverages" },
          ],
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
      Resources: [
        {
          title: "INDUSTRY",
          items: [
            { label: "Disability Support & Care", href: "/industries/disability-support" },
            { label: "Independent Living, STAs and SDAs", href: "/industries/independent-living" },
            { label: "Doctors, GPs and Clinics", href: "/industries/doctors-gps-clinics" },
            { label: "Beauty and Personal Care", href: "/industries/beauty-personal-care" },
            { label: "Therapists and Healing", href: "/industries/therapists-healing" },
            { label: "Hospitality, Pubs and Restaurants", href: "/industries/hospitality-pubs-restaurants" },
            { label: "Tradespeople, Plumbers and Roofers", href: "/industries/tradespeople" },
            { label: "Construction", href: "/industries/construction" },
            { label: "IT Contractors", href: "/industries/it-contractors" },
            { label: "Retail", href: "/industries/retail" },
            { label: "Consultants", href: "/industries/consultants" },
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "View all industries", href: "/industries" },
          ],
        },
        {
          title: "COVERS",
          items: [
            { label: "Healthcare Professionals Insurance", href: "/coverages/healthcare-professionals" },
            { label: "Professional Indemnity Insurance", href: "/coverages/professional-indemnity" },
            { label: "Medical Malpractice Insurance", href: "/coverages/medical-malpractice" },
            { label: "Public Liability Insurance", href: "/coverages/public-liability" },
            { label: "Products Liability Insurance", href: "/coverages/products-liability" },
            { label: "Cyber and Privacy Liability Insurance", href: "/coverages/cyber-privacy" },
            { label: "Management Liability Insurance", href: "/coverages/management-liability" },
            { label: "Business Package Insurance", href: "/coverages/business-package" },
            { label: "Business Equipment Insurance", href: "/coverages/business-equipment" },
            { label: "Personal Accident & Sickness Insurance", href: "/coverages/personal-accident-sickness" },
            { label: "Employment Practices Liability Insurance", href: "/coverages/employment-practices" },
            { label: "Motor Insurance for Businesses", href: "/coverages/motor" },
            { label: "View all coverages", href: "/coverages" },
          ],
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
      ]
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
            { label: "Cyber & Technology Liability", href: "/product" },
            { label: "Technology & Professional Indemnity", href: "/coverages/technology-professional-indemnity" },
            { label: "Intellectual Property", href: "/coverages/intellectual-property" },
            { label: "Business Property", href: "/coverages/business-property" },
            { label: "Directors & Officers Liability", href: "/coverages/directors-officers-liability" },
            { label: "Medical Malpractice", href: "/coverages/medical-malpractice" },
            { label: "Media Liability", href: "/coverages/media-liability" },
            { label: "Investment Managers Indemnity", href: "/coverages/investment-managers-indemnity" },
            { label: "Employment Practices Liability", href: "/coverages/employment-practices" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Crime Cover", href: "/coverages/crime-cover" },
            { label: "Public and Product Liability", href: "/coverages/public-product-liability" },
            { label: "View all covers", href: "/coverages" },
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
      Company: [
        {
          title: "COVER",
          items: [
            { label: "Cyber & Technology Liability", href: "/coverages/cyber-technology-liability" },
            { label: "Technology & Professional Indemnity", href: "/coverages/technology-professional-indemnity" },
            { label: "Intellectual Property", href: "/coverages/intellectual-property" },
            { label: "Business Property", href: "/coverages/business-property" },
            { label: "Directors & Officers Liability", href: "/coverages/directors-officers-liability" },
            { label: "Medical Malpractice", href: "/coverages/medical-malpractice" },
            { label: "Media Liability", href: "/coverages/media-liability" },
            { label: "Investment Managers Indemnity", href: "/coverages/investment-managers-indemnity" },
            { label: "Employment Practices Liability", href: "/coverages/employment-practices" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Crime Cover", href: "/coverages/crime-cover" },
            { label: "Public and Product Liability", href: "/coverages/public-product-liability" },
            { label: "View all covers", href: "/coverages" },
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
      Resources: [
        {
          title: "COVER",
          items: [
            { label: "Cyber & Technology Liability", href: "/coverages/cyber-technology-liability" },
            { label: "Technology & Professional Indemnity", href: "/coverages/technology-professional-indemnity" },
            { label: "Intellectual Property", href: "/coverages/intellectual-property" },
            { label: "Business Property", href: "/coverages/business-property" },
            { label: "Directors & Officers Liability", href: "/coverages/directors-officers-liability" },
            { label: "Medical Malpractice", href: "/coverages/medical-malpractice" },
            { label: "Media Liability", href: "/coverages/media-liability" },
            { label: "Investment Managers Indemnity", href: "/coverages/investment-managers-indemnity" },
            { label: "Employment Practices Liability", href: "/coverages/employment-practices" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Crime Cover", href: "/coverages/crime-cover" },
            { label: "Public and Product Liability", href: "/coverages/public-product-liability" },
            { label: "View all covers", href: "/coverages" },
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
      Solutions: [
        {
          title: "INDUSTRY",
          items: [
            { label: "Blockchain / Web3", href: "/industries/blockchain-web3" },
            { label: "AI", href: "/industries/ai" },
            { label: "Robotics & Hardware", href: "/industries/robotics-hardware" },
            { label: "Life sciences & Bioscience", href: "/industries/life-sciences-bioscience" },
            { label: "Digital Health", href: "/industries/digital-health" },
            { label: "Consumer", href: "/industries/consumer" },
            { label: "B2B Saas", href: "/industries/b2b-saas" },
            { label: "Media Tech", href: "/industries/media-tech" },
            { label: "EdTech", href: "/industries/edtech" },
            { label: "E-commerce", href: "/industries/e-commerce" },
            { label: "Fin Tech", href: "/industries/fin-tech" },
            { label: "Reg Tech", href: "/industries/reg-tech" },
            { label: "View all industries", href: "/industries" },
          ]
        },
        {
          title: "FUNDS",
          items: [
            { label: "Family Offices", href: "/funds/family-offices" },
            { label: "Venture Capital Funds", href: "/funds/venture-capital" },
            { label: "Debt Funds", href: "/funds/debt-funds" },
            { label: "Private Equity Vehicles", href: "/funds/private-equity" },
            { label: "Investment Managers", href: "/funds/investment-managers" },
            { label: "View all Investment Vehicles", href: "/funds" },
          ]
        },
        {
          title: "NEEDS",
          items: [
            { label: "Getting Insured for the First Time", href: "/needs/getting-insured" },
            { label: "Meeting Contractual Requirements", href: "/needs/contractual-requirements" },
            { label: "Fundraising Protection", href: "/needs/fundraising-protection" },
            { label: "Protecting Your Team & Workplace", href: "/needs/protecting-team-workplace" },
            { label: "Safeguarding Digital Assets", href: "/needs/safeguarding-digital-assets" },
            { label: "Finding the Right Coverage Package", href: "/needs/right-coverage-package" },
            { label: "Expanding Interstate", href: "/needs/expanding-interstate" },
          ]
        },
        {
          title: "STAGE",
          items: [
            { label: "Early Stage", href: "/stage/early" },
            { label: "Growth & Late Stage", href: "/stage/growth-late" },
            { label: "Pre-IPO, IPO & Listing", href: "/stage/pre-ipo-ipo-listing" },
          ]
        },
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/2a1339faabda847f116061ee305805ee8c3cd7bf.png",
              heading: "OTHER SITUATION",
              text: `Not quite sure of your stage?
              <br> 
              Bootstrapping or prefer not say?
              `,
              primaryButton: "TALK TO US",
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
        { label: "For Sole Traders", href: "/motor/for-sole-traders" },
        { label: "For Small Business", href: "/motor/for-small-business" },
        { label: "For Rideshare", href: "/motor/for-rideshare" },
        { label: "Mobile, plant & Equipment", href: "/motor/mobile-plant-equipment" }
      ],
    },
    {
      title: "FLEET MANAGERS & CORPORATES",
      items: [
        { label: "Courier Fleets", href: "/fleet/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet/own-goods-fleets" },
        { label: "Rentals", href: "/fleet/rentals" },
        { label: "Heavy Vehicles", href: "/fleet/heavy-vehicles" }
      ],
    },
    {
      title: "FLEET INSURANCE",
      items: [
        { label: "Courier Fleets", href: "/fleet-insurance/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet-insurance/own-goods-fleets" },
        { label: "Rentals", href: "/fleet-insurance/rentals" },
        { label: "Heavy Vehicles", href: "/fleet-insurance/heavy-vehicles" }
      ],
    },
    {
      type: "box",
      boxContent: {
        left: {
          imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
          heading: "MAKE A CLAIM",
          text: `If you’re a fleet manager, driver, or you have been involved in an accident it’s crucial to report this as soon as possoble
              <br><br>
              Takes less than 5 mins Via e-form or up to 45 mins via call`,
          primaryButton: "REPORT CLAIM VIA E-FORM ",
          secondaryButton: "CALL 1300 872 683"
        }
      }
    }
  ],
  Company: [
    {
      title: "MOTOR INSURANCE",
      items: [
        { label: "For Sole Traders", href: "/motor/for-sole-traders" },
        { label: "For Small Business", href: "/motor/for-small-business" },
        { label: "For Rideshare", href: "/motor/for-rideshare" },
        { label: "Mobile, plant & Equipment", href: "/motor/mobile-plant-equipment" }
      ],
    },
    {
      title: "FLEET MANAGERS & CORPORATES",
      items: [
        { label: "Courier Fleets", href: "/fleet/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet/own-goods-fleets" },
        { label: "Rentals", href: "/fleet/rentals" },
        { label: "Heavy Vehicles", href: "/fleet/heavy-vehicles" }
      ],
    },
    {
      title: "FLEET INSURANCE",
      items: [
        { label: "Courier Fleets", href: "/fleet-insurance/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet-insurance/own-goods-fleets" },
        { label: "Rentals", href: "/fleet-insurance/rentals" },
        { label: "Heavy Vehicles", href: "/fleet-insurance/heavy-vehicles" }
      ],
    },
    {
      type: "box",
      boxContent: {
        left: {
          imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
          heading: "MAKE A CLAIM",
          text: `If you’re a fleet manager, driver, or you have been involved in an accident it’s crucial to report this as soon as possoble
              <br><br>
              Takes less than 5 mins Via e-form or up to 45 mins via call`,
          primaryButton: "REPORT CLAIM VIA E-FORM ",
          secondaryButton: "CALL 1300 872 683"
        }
      }
    }
  ],
    Resources: [
    {
      title: "MOTOR INSURANCE",
      items: [
        { label: "For Sole Traders", href: "/motor/for-sole-traders" },
        { label: "For Small Business", href: "/motor/for-small-business" },
        { label: "For Rideshare", href: "/motor/for-rideshare" },
        { label: "Mobile, plant & Equipment", href: "/motor/mobile-plant-equipment" }
      ],
    },
    {
      title: "FLEET MANAGERS & CORPORATES",
      items: [
        { label: "Courier Fleets", href: "/fleet/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet/own-goods-fleets" },
        { label: "Rentals", href: "/fleet/rentals" },
        { label: "Heavy Vehicles", href: "/fleet/heavy-vehicles" }
      ],
    },
    {
      title: "FLEET INSURANCE",
      items: [
        { label: "Courier Fleets", href: "/fleet-insurance/courier-fleets" },
        { label: "Own Goods Fleets", href: "/fleet-insurance/own-goods-fleets" },
        { label: "Rentals", href: "/fleet-insurance/rentals" },
        { label: "Heavy Vehicles", href: "/fleet-insurance/heavy-vehicles" }
      ],
    },
    {
      type: "box",
      boxContent: {
        left: {
          imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
          heading: "MAKE A CLAIM",
          text: `If you’re a fleet manager, driver, or you have been involved in an accident it’s crucial to report this as soon as possoble
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
