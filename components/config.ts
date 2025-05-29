export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  menuItems: string[];
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
}

export interface DropdownSection {
  title: string;
  items: string[];
}

export const tabs: TabConfig[] = [
  {
    id: "businesses",
    label: "Businesses & Sole traders",
    themeColor: "#FF522D",
    menuItems: ["Coverages", "Company", "Resources"],
    dropdown: {
      Coverages: [
        {
          title: "INDUSTRY",
          items: [
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "COVERS",
          items: [
            "Healthcare Professionals Insurance",
            "Professional Indemnity Insurance",
            "Medical Malpractice Insurance",
            "Products Liability Insurance",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
      ],
    },
    svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2799 5.96643L8.93327 10.3131C8.41994 10.8264 7.57994 10.8264 7.06661 10.3131L2.71994 5.96643" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `,
  },
  {
    id: "tech",
    label: "Tech Startups & Enterprises",
    themeColor: "#005DFF",
    menuItems: ["Coverages", "Company", "Resources", "Solutions"],
    dropdown: {
      Coverages: [
        { title: "INDUSTRY", items: ["Public Liability"] },
        { title: "COVERS", items: ["Healthcare Professionals Insurance"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Solutions: [
        { title: "INDUSTRY", items: ["Public Liability"] },
        { title: "COVERS", items: ["Healthcare Professionals Insurance"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
      ],
    },
    svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2799 5.96643L8.93327 10.3131C8.41994 10.8264 7.57994 10.8264 7.06661 10.3131L2.71994 5.96643" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `,
  },
  {
    id: "motor",
    label: "Motor & Fleet",
    themeColor: "#D5E525",
    menuItems: ["Coverages", "Company", "Resources"],
    dropdown: {
      Coverages: [
        {
          title: "INDUSTRY",
          items: [
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "COVERS",
          items: [
            "Healthcare Professionals Insurance",
            "Professional Indemnity Insurance",
            "Medical Malpractice Insurance",
            "Products Liability Insurance",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
      ],
    },
    svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2799 5.96643L8.93327 10.3131C8.41994 10.8264 7.57994 10.8264 7.06661 10.3131L2.71994 5.96643" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `,
  },
];

export const branding = {
  companyName: "upcover",
  contactRegion: [
    { code: "AU", label: "AU", url: "#" },
    { code: "NZ", label: "NZ", url: "#" },
  ],
  contactPhone: "1300 872 683",
  svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.3083 15.275C18.3083 15.575 18.2416 15.8833 18.1 16.1833C17.9583 16.4833 17.775 16.7666 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1666 18.0166C15.6666 18.225 15.125 18.3333 14.5416 18.3333C13.6916 18.3333 12.7833 18.1333 11.825 17.725C10.8666 17.3166 9.90829 16.7666 8.95829 16.075C7.99996 15.375 7.09163 14.6 6.22496 13.7416C5.36663 12.875 4.59163 11.9666 3.89996 11.0166C3.21663 10.0666 2.66663 9.11663 2.26663 8.17496C1.86663 7.22496 1.66663 6.31663 1.66663 5.44996C1.66663 4.88329 1.76663 4.34163 1.96663 3.84163C2.16663 3.33329 2.48329 2.86663 2.92496 2.44996C3.45829 1.92496 4.04163 1.66663 4.65829 1.66663C4.89163 1.66663 5.12496 1.71663 5.33329 1.81663C5.54996 1.91663 5.74163 2.06663 5.89163 2.28329L7.82496 5.00829C7.97496 5.21663 8.08329 5.40829 8.15829 5.59163C8.23329 5.76663 8.27496 5.94163 8.27496 6.09996C8.27496 6.29996 8.21663 6.49996 8.09996 6.69163C7.99163 6.88329 7.83329 7.08329 7.63329 7.28329L6.99996 7.94163C6.90829 8.03329 6.86663 8.14163 6.86663 8.27496C6.86663 8.34163 6.87496 8.39996 6.89163 8.46663C6.91663 8.53329 6.94163 8.58329 6.95829 8.63329C7.10829 8.90829 7.36663 9.26663 7.73329 9.69996C8.10829 10.1333 8.50829 10.575 8.94163 11.0166C9.39163 11.4583 9.82496 11.8666 10.2666 12.2416C10.7 12.6083 11.0583 12.8583 11.3416 13.0083C11.3833 13.025 11.4333 13.05 11.4916 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8416 13.1083 11.95 13.0583 12.0416 12.9666L12.675 12.3416C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4666 11.7583 13.6583 11.7 13.8666 11.7C14.025 11.7 14.1916 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9916 14.9583 12.1333L17.7166 14.0916C17.9333 14.2416 18.0833 14.4166 18.175 14.625C18.2583 14.8333 18.3083 15.0416 18.3083 15.275Z" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10"/>
  <path d="M15.4167 7.50004C15.4167 7.00004 15.025 6.23337 14.4417 5.60837C13.9083 5.03337 13.2 4.58337 12.5 4.58337" stroke="#242826" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.3333 7.49996C18.3333 4.27496 15.725 1.66663 12.5 1.66663" stroke="the" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
};
export const defaultTab = tabs[0];
