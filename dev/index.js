(()=>{function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=globalThis,n={},o={},r=t.parcelRequire94eb;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire94eb=r);var i=r.register;i("eEYVb",function(t,n){e(t.exports,"AppBarWidget",()=>a);var o=r("gJQzV"),i=r("lgkbo");class a{constructor(e={}){this.tabs=e.tabs||[{id:"business",label:"Business Sole"},{id:"tech",label:"Tech Industry"},{id:"motor",label:"Fleet Services"}],this.branding=e.branding||{contactPhone:"1300 872 683",contactRegion:[{label:"AU",code:"AU",url:"#"},{label:"NZ",code:"NZ",url:"#"}]},this.themeManager=i.ThemeManager.getInstance(),e.themeColors&&this.themeManager.setCustomColors(e.themeColors)}mount(e){let t=document.createElement("style");t.innerHTML=`
  #appbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #f5f0eb;
    font-size: 0.9rem;
    padding: 0 60px;
  }
  .tabs button {
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    padding: 30px 20px;
    color: #545464;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
    @media screen and (max-width: 1010px){
    .tabs button{
    font-size: 13px
    }
    }

  .tabs button.active {
    background-color: #ffffff;
    color: #242826;
  }
  .tabs button.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #242826;
    border-radius: 2px;
  }
  .contact {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-weight: 600;
    color: #333;
    font-size: 16px;
  }
  .contact a {
    text-decoration: none;
    color: #333;
  }
  .contact-phone-container {
    background-color: white;
    padding: 10px 14px;
    border-radius: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 10px;
  }
  .contact-region-switcher {
    font-weight: 700;
  }
  .contact-phone-svg{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,document.head.appendChild(t);let n=document.createElement("div");if(n.className="tabs",n.innerHTML=this.tabs.map(e=>`<button data-tab="${e.id}">${e.label}</button>`).join(""),n.querySelectorAll("button").forEach(e=>{e.addEventListener("click",()=>{n.querySelectorAll("button").forEach(e=>e.classList.remove("active")),e.classList.add("active");let t=e.dataset.tab;t&&this.themeManager.setTheme(t),console.log("Tab clicked:",t)})}),this.tabs.length>0){let e=n.querySelector("button");e&&e.classList.add("active")}let r=document.createElement("div");r.className="contact";let i=document.createElement("span");i.className="contact-region-switcher";let a=localStorage.getItem("activeRegion")||this.branding.contactRegion[0].code,l=()=>{i.innerHTML="",this.branding.contactRegion.forEach((e,t)=>{let n=document.createElement("a");n.href=e.url,n.textContent=e.label,n.style.fontWeight=a===e.code?"900":"600",n.addEventListener("click",t=>{localStorage.setItem("activeRegion",e.code),a=e.code,l()}),i.appendChild(n),t<this.branding.contactRegion.length-1&&i.appendChild(document.createTextNode(" | "))})};l();let s=document.createElement("span");s.className="contact-phone-container";let d=document.createElement("a");d.href=`tel:${this.branding.contactPhone.replace(/\s+/g,"")}`,d.innerHTML=o.callIcon,d.className="contact-phone-svg";let c=document.createTextNode(this.branding.contactPhone);s.appendChild(d),s.appendChild(c),r.appendChild(i),r.appendChild(s),e.appendChild(n),e.appendChild(r),document.body.insertBefore(e,document.body.firstChild)}}}),i("gJQzV",function(t,n){e(t.exports,"callIcon",()=>o),e(t.exports,"arrowDownIcon",()=>r),e(t.exports,"upcoverLogoBusiness",()=>i),e(t.exports,"upcoverLogoTech",()=>a),e(t.exports,"upcoverLogoMotor",()=>l);let o=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3082 15.275C18.3082 15.575 18.2415 15.8833 18.0998 16.1833C17.9582 16.4833 17.7748 16.7667 17.5332 17.0333C17.1248 17.4833 16.6748 17.8083 16.1665 18.0167C15.6665 18.225 15.1248 18.3333 14.5415 18.3333C13.6915 18.3333 12.7832 18.1333 11.8248 17.725C10.8665 17.3167 9.90817 16.7667 8.95817 16.075C7.99984 15.375 7.0915 14.6 6.22484 13.7417C5.3665 12.875 4.5915 11.9667 3.89984 11.0167C3.2165 10.0667 2.6665 9.11667 2.2665 8.175C1.8665 7.225 1.6665 6.31667 1.6665 5.45C1.6665 4.88333 1.7665 4.34167 1.9665 3.84167C2.1665 3.33333 2.48317 2.86667 2.92484 2.45C3.45817 1.925 4.0415 1.66667 4.65817 1.66667C4.8915 1.66667 5.12484 1.71667 5.33317 1.81667C5.54984 1.91667 5.7415 2.06667 5.8915 2.28333L7.82484 5.00833C7.97484 5.21667 8.08317 5.40833 8.15817 5.59167C8.23317 5.76667 8.27484 5.94167 8.27484 6.1C8.27484 6.3 8.2165 6.5 8.09984 6.69167C7.9915 6.88333 7.83317 7.08333 7.63317 7.28333L6.99984 7.94167C6.90817 8.03333 6.8665 8.14167 6.8665 8.275C6.8665 8.34167 6.87484 8.4 6.8915 8.46667C6.9165 8.53333 6.9415 8.58333 6.95817 8.63333C7.10817 8.90833 7.3665 9.26667 7.73317 9.7C8.10817 10.1333 8.50817 10.575 8.9415 11.0167C9.3915 11.4583 9.82484 11.8667 10.2665 12.2417C10.6998 12.6083 11.0582 12.8583 11.3415 13.0083C11.3832 13.025 11.4332 13.05 11.4915 13.075C11.5582 13.1 11.6248 13.1083 11.6998 13.1083C11.8415 13.1083 11.9498 13.0583 12.0415 12.9667L12.6748 12.3417C12.8832 12.1333 13.0832 11.975 13.2748 11.875C13.4665 11.7583 13.6582 11.7 13.8665 11.7C14.0248 11.7 14.1915 11.7333 14.3748 11.8083C14.5582 11.8833 14.7498 11.9917 14.9582 12.1333L17.7165 14.0917C17.9332 14.2417 18.0832 14.4167 18.1748 14.625C18.2582 14.8333 18.3082 15.0417 18.3082 15.275Z" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M15.4167 7.5C15.4167 7 15.025 6.23333 14.4417 5.60833C13.9083 5.03333 13.2 4.58333 12.5 4.58333" stroke="#242826" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 7.5C18.3333 4.275 15.725 1.66667 12.5 1.66667" stroke="#242826" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,r=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
<path d="M12.28 0.966553L7.9333 5.31322C7.41997 5.82655 6.57997 5.82655 6.06664 5.31322L1.71997 0.966553" stroke="#242826" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>   
`,i=`
<svg
xmlns="http://www.w3.org/2000/svg"
width="162"
height="28"
viewBox="0 0 162 28"
>
<g clip-path="url(#clip0_3711_13164)">
  <mask
    id="mask0_3711_13164"
    style="mask-type: luminance"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="162"
    height="28"
  >
    <path d="M161.576 0H0V28H161.576V0Z" fill="white" />
  </mask>
  <g mask="url(#mask0_3711_13164)">
    <path
      d="M161.576 10.4706V4.75834C158.926 4.79016 156.691 6.70623 155.766 10.0259V5.23654H150.498V22.2526H156.117V13.002C156.117 11.6 157.253 10.4641 158.655 10.4641H161.459C161.499 10.4641 161.537 10.4682 161.576 10.4698V10.4706ZM137.931 14.0481H148.882C148.882 8.04616 145.53 4.75752 140.741 4.75752C135.665 4.75752 131.994 8.36524 131.994 13.7609C131.994 19.1566 135.505 22.7316 140.773 22.7316C145.019 22.7316 148.244 20.3055 149.074 16.1233H146.105C145.562 18.1349 143.998 19.3157 142.145 19.3157C139.719 19.3157 138.091 17.6559 137.931 14.0481ZM137.996 11.3985C138.315 8.71695 139.272 7.56715 140.614 7.56715C141.955 7.56715 142.88 8.71613 143.072 11.3985H137.996ZM126.875 22.2534L132.844 5.23735H128.695L125.151 17.5922L121.383 5.23735H115.285L121.192 22.2534H126.875ZM115.982 13.6018C115.982 8.17428 112.375 4.75834 107.298 4.75834C102.221 4.75834 98.3591 8.23793 98.3591 13.8254C98.3591 19.4128 101.967 22.7325 107.074 22.7325C112.182 22.7325 115.982 19.221 115.982 13.6018ZM109.98 13.8254C109.98 18.2948 108.799 19.8592 107.234 19.8592C105.574 19.8592 104.329 18.1031 104.329 13.6018C104.329 9.10049 105.511 7.63162 107.139 7.63162C108.767 7.63162 109.98 9.35591 109.98 13.8254ZM86.462 13.5373C86.462 9.22698 87.6428 7.6308 89.0799 7.6308C90.2925 7.6308 91.2187 8.81161 91.4741 11.8767H96.9016C96.4226 7.59897 93.3257 4.75752 89.0154 4.75752C84.195 4.75752 80.4918 8.33341 80.4918 13.8246C80.4918 19.3157 84.0351 22.7316 89.0154 22.7316C93.3257 22.7316 96.5181 20.0183 97.2525 15.708H94.4747C93.9639 18.0704 92.4313 19.3157 90.5161 19.3157C88.09 19.3157 86.462 17.5277 86.462 13.5373ZM79.2082 13.5055C79.2082 7.98251 76.4304 4.75752 72.6636 4.75752C70.2693 4.75752 68.3532 5.97097 67.5233 8.07799V5.23654H62.3831V27.9992H68.0023V20.1456C68.9604 21.8054 70.6202 22.7316 72.5999 22.7316C76.2713 22.7316 79.2082 19.2202 79.2082 13.5055ZM73.2062 13.889C73.2062 18.0394 72.1209 19.6038 70.5247 19.6038C69.024 19.6038 68.0023 18.263 68.0023 15.7724V11.6857C68.0023 9.09967 69.0877 7.88622 70.3648 7.88622C71.9928 7.88622 73.2062 9.45057 73.2062 13.8882V13.889ZM55.3635 22.2534H60.5037V5.23735H54.8845V15.3897C54.8845 17.784 53.8628 19.1574 52.4266 19.1574C50.9903 19.1574 50.2232 18.1675 50.2232 16.1886V5.23735H44.604V16.7623C44.604 20.37 46.7747 22.7325 50.0315 22.7325C52.4894 22.7325 54.4691 21.3599 55.3627 19.0611V22.2534H55.3635ZM35.3697 10.3156V0H30.1592V10.3156C30.1592 17.194 24.5637 22.7896 17.6852 22.7896C10.8068 22.7896 5.21042 17.194 5.21042 10.3156V0H0V10.3156C0 20.0673 7.93355 28 17.6844 28C27.4353 28 35.3689 20.0665 35.3689 10.3156H35.3697ZM28 10.3156H22.7896C22.7896 13.1301 20.4998 15.4199 17.6844 15.4199C14.8691 15.4199 12.5801 13.1301 12.5801 10.3156C12.5801 7.50105 14.8699 5.21124 17.6844 5.21124V0C11.9966 0 7.36967 4.62777 7.36967 10.3156C7.36967 16.0034 11.9974 20.6312 17.6852 20.6312C23.373 20.6312 28.0008 16.0034 28.0008 10.3156H28Z"
      fill="#FF522D"
    />
  </g>
</g>
<defs>
  <clipPath id="clip0_3711_13164">
    <rect width="161.576" height="28" />
  </clipPath>
</defs>
</svg>
`,a=`
<svg
xmlns="http://www.w3.org/2000/svg"
width="162"
height="28"
viewBox="0 0 162 28"
>
<g clip-path="url(#clip0_3711_13164)">
  <mask
    id="mask0_3711_13164"
    style="mask-type: luminance"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="162"
    height="28"
  >
    <path d="M161.576 0H0V28H161.576V0Z" fill="white" />
  </mask>
  <g mask="url(#mask0_3711_13164)">
    <path
      d="M161.576 10.4706V4.75834C158.926 4.79016 156.691 6.70623 155.766 10.0259V5.23654H150.498V22.2526H156.117V13.002C156.117 11.6 157.253 10.4641 158.655 10.4641H161.459C161.499 10.4641 161.537 10.4682 161.576 10.4698V10.4706ZM137.931 14.0481H148.882C148.882 8.04616 145.53 4.75752 140.741 4.75752C135.665 4.75752 131.994 8.36524 131.994 13.7609C131.994 19.1566 135.505 22.7316 140.773 22.7316C145.019 22.7316 148.244 20.3055 149.074 16.1233H146.105C145.562 18.1349 143.998 19.3157 142.145 19.3157C139.719 19.3157 138.091 17.6559 137.931 14.0481ZM137.996 11.3985C138.315 8.71695 139.272 7.56715 140.614 7.56715C141.955 7.56715 142.88 8.71613 143.072 11.3985H137.996ZM126.875 22.2534L132.844 5.23735H128.695L125.151 17.5922L121.383 5.23735H115.285L121.192 22.2534H126.875ZM115.982 13.6018C115.982 8.17428 112.375 4.75834 107.298 4.75834C102.221 4.75834 98.3591 8.23793 98.3591 13.8254C98.3591 19.4128 101.967 22.7325 107.074 22.7325C112.182 22.7325 115.982 19.221 115.982 13.6018ZM109.98 13.8254C109.98 18.2948 108.799 19.8592 107.234 19.8592C105.574 19.8592 104.329 18.1031 104.329 13.6018C104.329 9.10049 105.511 7.63162 107.139 7.63162C108.767 7.63162 109.98 9.35591 109.98 13.8254ZM86.462 13.5373C86.462 9.22698 87.6428 7.6308 89.0799 7.6308C90.2925 7.6308 91.2187 8.81161 91.4741 11.8767H96.9016C96.4226 7.59897 93.3257 4.75752 89.0154 4.75752C84.195 4.75752 80.4918 8.33341 80.4918 13.8246C80.4918 19.3157 84.0351 22.7316 89.0154 22.7316C93.3257 22.7316 96.5181 20.0183 97.2525 15.708H94.4747C93.9639 18.0704 92.4313 19.3157 90.5161 19.3157C88.09 19.3157 86.462 17.5277 86.462 13.5373ZM79.2082 13.5055C79.2082 7.98251 76.4304 4.75752 72.6636 4.75752C70.2693 4.75752 68.3532 5.97097 67.5233 8.07799V5.23654H62.3831V27.9992H68.0023V20.1456C68.9604 21.8054 70.6202 22.7316 72.5999 22.7316C76.2713 22.7316 79.2082 19.2202 79.2082 13.5055ZM73.2062 13.889C73.2062 18.0394 72.1209 19.6038 70.5247 19.6038C69.024 19.6038 68.0023 18.263 68.0023 15.7724V11.6857C68.0023 9.09967 69.0877 7.88622 70.3648 7.88622C71.9928 7.88622 73.2062 9.45057 73.2062 13.8882V13.889ZM55.3635 22.2534H60.5037V5.23735H54.8845V15.3897C54.8845 17.784 53.8628 19.1574 52.4266 19.1574C50.9903 19.1574 50.2232 18.1675 50.2232 16.1886V5.23735H44.604V16.7623C44.604 20.37 46.7747 22.7325 50.0315 22.7325C52.4894 22.7325 54.4691 21.3599 55.3627 19.0611V22.2534H55.3635ZM35.3697 10.3156V0H30.1592V10.3156C30.1592 17.194 24.5637 22.7896 17.6852 22.7896C10.8068 22.7896 5.21042 17.194 5.21042 10.3156V0H0V10.3156C0 20.0673 7.93355 28 17.6844 28C27.4353 28 35.3689 20.0665 35.3689 10.3156H35.3697ZM28 10.3156H22.7896C22.7896 13.1301 20.4998 15.4199 17.6844 15.4199C14.8691 15.4199 12.5801 13.1301 12.5801 10.3156C12.5801 7.50105 14.8699 5.21124 17.6844 5.21124V0C11.9966 0 7.36967 4.62777 7.36967 10.3156C7.36967 16.0034 11.9974 20.6312 17.6852 20.6312C23.373 20.6312 28.0008 16.0034 28.0008 10.3156H28Z"
      fill="#005DFF"
    />
  </g>
</g>
<defs>
  <clipPath id="clip0_3711_13164">
    <rect width="161.576" height="28" />
  </clipPath>
</defs>
</svg>
`,l=`
<svg width="162" height="28" viewBox="0 0 162 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_3711_14216" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="162" height="28">
<path d="M161.576 0H0V28H161.576V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_3711_14216)">
<path d="M161.576 10.4706V4.75834C158.926 4.79016 156.691 6.70623 155.766 10.0259V5.23654H150.498V22.2526H156.117V13.002C156.117 11.6 157.253 10.4641 158.655 10.4641H161.459C161.499 10.4641 161.537 10.4682 161.576 10.4698V10.4706ZM137.931 14.0481H148.882C148.882 8.04616 145.53 4.75752 140.741 4.75752C135.665 4.75752 131.994 8.36524 131.994 13.7609C131.994 19.1566 135.505 22.7316 140.773 22.7316C145.019 22.7316 148.244 20.3055 149.074 16.1233H146.105C145.562 18.1349 143.998 19.3157 142.145 19.3157C139.719 19.3157 138.091 17.6559 137.931 14.0481ZM137.996 11.3985C138.315 8.71695 139.272 7.56715 140.614 7.56715C141.955 7.56715 142.88 8.71613 143.072 11.3985H137.996ZM126.875 22.2534L132.844 5.23735H128.695L125.151 17.5922L121.383 5.23735H115.285L121.192 22.2534H126.875ZM115.982 13.6018C115.982 8.17428 112.375 4.75834 107.298 4.75834C102.221 4.75834 98.3591 8.23793 98.3591 13.8254C98.3591 19.4128 101.967 22.7325 107.074 22.7325C112.182 22.7325 115.982 19.221 115.982 13.6018ZM109.98 13.8254C109.98 18.2948 108.799 19.8592 107.234 19.8592C105.574 19.8592 104.329 18.1031 104.329 13.6018C104.329 9.10049 105.511 7.63162 107.139 7.63162C108.767 7.63162 109.98 9.35591 109.98 13.8254ZM86.462 13.5373C86.462 9.22698 87.6428 7.6308 89.0799 7.6308C90.2925 7.6308 91.2187 8.81161 91.4741 11.8767H96.9016C96.4226 7.59897 93.3257 4.75752 89.0154 4.75752C84.195 4.75752 80.4918 8.33341 80.4918 13.8246C80.4918 19.3157 84.0351 22.7316 89.0154 22.7316C93.3257 22.7316 96.5181 20.0183 97.2525 15.708H94.4747C93.9639 18.0704 92.4313 19.3157 90.5161 19.3157C88.09 19.3157 86.462 17.5277 86.462 13.5373ZM79.2082 13.5055C79.2082 7.98251 76.4304 4.75752 72.6636 4.75752C70.2693 4.75752 68.3532 5.97097 67.5233 8.07799V5.23654H62.3831V27.9992H68.0023V20.1456C68.9604 21.8054 70.6202 22.7316 72.5999 22.7316C76.2713 22.7316 79.2082 19.2202 79.2082 13.5055ZM73.2062 13.889C73.2062 18.0394 72.1209 19.6038 70.5247 19.6038C69.024 19.6038 68.0023 18.263 68.0023 15.7724V11.6857C68.0023 9.09967 69.0877 7.88622 70.3648 7.88622C71.9928 7.88622 73.2062 9.45057 73.2062 13.8882V13.889ZM55.3635 22.2534H60.5037V5.23735H54.8845V15.3897C54.8845 17.784 53.8628 19.1574 52.4266 19.1574C50.9903 19.1574 50.2232 18.1675 50.2232 16.1886V5.23735H44.604V16.7623C44.604 20.37 46.7747 22.7325 50.0315 22.7325C52.4894 22.7325 54.4691 21.3599 55.3627 19.0611V22.2534H55.3635ZM35.3697 10.3156V0H30.1592V10.3156C30.1592 17.194 24.5637 22.7896 17.6852 22.7896C10.8068 22.7896 5.21042 17.194 5.21042 10.3156V0H0V10.3156C0 20.0673 7.93355 28 17.6844 28C27.4353 28 35.3689 20.0665 35.3689 10.3156H35.3697ZM28 10.3156H22.7896C22.7896 13.1301 20.4998 15.4199 17.6844 15.4199C14.8691 15.4199 12.5801 13.1301 12.5801 10.3156C12.5801 7.50105 14.8699 5.21124 17.6844 5.21124V0C11.9966 0 7.36967 4.62777 7.36967 10.3156C7.36967 16.0034 11.9974 20.6312 17.6852 20.6312C23.373 20.6312 28.0008 16.0034 28.0008 10.3156H28Z" fill="#3B4125"/>
</g>
</svg>

`}),i("lgkbo",function(t,n){e(t.exports,"ThemeManager",()=>r);let o={business:"#FF522D",tech:"#005DFF",motor:"#D5E525"};class r{constructor(){this.currentTheme="business",this.listeners=[],this.customColors=null}static getInstance(){return r.instance||(r.instance=new r),r.instance}setTheme(e){this.currentTheme=e,this.notifyListeners()}setCustomColors(e){this.customColors={...o,...e},this.notifyListeners()}getCurrentTheme(){return this.currentTheme}getCurrentColor(){return(this.customColors||o)[this.currentTheme]}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notifyListeners(){this.listeners.forEach(e=>e(this.currentTheme))}}}),i("laig7",function(t,n){e(t.exports,"NavbarWidget",()=>a);var o=r("gJQzV"),i=r("lgkbo");class a{constructor(e={}){this.config={logo:o.upcoverLogoBusiness,menuItems:e.menuItems||{business:[{label:"Coverages",href:"#"},{label:"Company",href:"#"},{label:"Resources",href:"#"}],tech:[{label:"Coverages",href:"#"},{label:"Company",href:"#"},{label:"Resources",href:"#"},{label:"Solutions",href:"#"}],motor:[{label:"Coverages",href:"#"},{label:"Company",href:"#"},{label:"Resources",href:"#"}]},themeColor:e.themeColor||"#FF522D",loginText:e.loginText||"LOGIN",quoteText:e.quoteText||"GET A QUOTE"},this.target=document.createElement("div"),this.target.id="navbar",this.themeManager=i.ThemeManager.getInstance(),this.createStyles(),this.themeManager.subscribe(e=>{this.updateLogo(e),this.updateMenuItems(e)}),this.render()}getMenuItemsForTheme(e){return this.config.menuItems&&this.config.menuItems[e]||[]}updateLogo(e){let t=document.querySelector("#upcover-logo");if(t)switch(e){case"business":default:t.innerHTML=o.upcoverLogoBusiness;break;case"tech":t.innerHTML=o.upcoverLogoTech;break;case"motor":t.innerHTML=o.upcoverLogoMotor}}updateMenuItems(e){let t=document.getElementById("menu-items");if(!t)return;let n=this.getMenuItemsForTheme(e);t.innerHTML="",n.forEach(e=>{let n=document.createElement("li");n.className=e.dropdown?"menu-item dropdown":"menu-item";let r=document.createElement("a");if(r.href=e.href,r.innerHTML=`
  ${e.label}
  <span class="menu-icon">${o.arrowDownIcon}</span>
`,n.addEventListener("mouseenter",()=>{let e="motor"===this.themeManager.getCurrentTheme()?"#3B4125":this.themeManager.getCurrentColor();r.style.color=e;let t=r.querySelector("svg path");t&&t.setAttribute("stroke",e)}),n.addEventListener("mouseleave",()=>{r.style.color="#242826";let e=r.querySelector("svg path");e&&e.setAttribute("stroke","#242826")}),n.appendChild(r),e.dropdown||e.boxComponent){let t=document.createElement("div");if(t.className="dropdown-menu three-column",e.dropdown&&e.dropdown.forEach(e=>{let n=document.createElement("div");n.className="dropdown-column";let o=document.createElement("h4");o.textContent=e.title;let r=document.createElement("ul");e.items.forEach(e=>{let t=document.createElement("li");t.textContent=e,e.toLowerCase().includes("view all")&&(t.style.cssText=`
            color: ${this.themeManager.getCurrentColor()};
            text-decoration: underline;
            font-weight: 700;
            text-underline-offset: 4px;
          `),r.appendChild(t)}),n.appendChild(o),n.appendChild(r),t.appendChild(n)}),e.boxComponent){let n=document.createElement("div");n.className="dropdown-box-container";let o=document.createElement("div");o.className="box-first-div";let r=document.createElement("img");r.src=e.boxComponent.firstDiv.image,r.alt=e.boxComponent.firstDiv.heading;let i=document.createElement("h3");i.textContent=e.boxComponent.firstDiv.heading;let a=document.createElement("p");a.innerHTML=e.boxComponent.firstDiv.paragraph;let l=document.createElement("div");if(l.className="button-container",e.boxComponent.firstDiv.buttons.forEach((e,t)=>{let n=document.createElement("a");if(n.href=e.href,n.className="box-button",n.textContent=e.label,1===t){let e=this.themeManager.getCurrentTheme(),t=this.themeManager.getCurrentColor();"business"===e?n.style.cssText=`
            background-color: #FFCFC5;
            color: ${t};
          `:"motor"===e&&(n.style.cssText=`
            background-color: #F8FFAF;
            color: #000000;
          `)}else{let e=this.themeManager.getCurrentTheme();n.style.cssText=`
          background-color: ${this.themeManager.getCurrentColor()};
          color: ${"motor"===e?"#000000":"white"};
        `}l.appendChild(n)}),o.appendChild(r),o.appendChild(i),o.appendChild(a),o.appendChild(l),n.appendChild(o),e.boxComponent.secondDiv){let t=document.createElement("div");t.className="box-second-div";let o=document.createElement("h3");o.textContent=e.boxComponent.secondDiv.heading;let r=document.createElement("p");r.innerHTML=e.boxComponent.secondDiv.paragraph;let i=document.createElement("a");i.href=e.boxComponent.secondDiv.button.href,i.className="box-button",i.textContent=e.boxComponent.secondDiv.button.label;let a=this.themeManager.getCurrentTheme();i.style.cssText=`
        background-color: ${this.themeManager.getCurrentColor()};
        color: ${"motor"===a?"#000000":"white"};
      `,t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t)}t.appendChild(n)}n.appendChild(t)}t.appendChild(n)})}createStyles(){let e=document.createElement("style");e.innerHTML=`
.header,
.navbar {
  position: relative;
  z-index: 100;
}

#navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 60px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.actions {
  display: flex;
  gap: 30px;
  align-items: center;
}

.login {
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
}

.quote {
  color: white;
  border: none;
  padding: 20px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
}

.UPCOVER-LOGO {
  display: flex;
  justify-content: center;
  align-items: center;
}

#upcover-logo path {
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Menu item */
.menu-item {
  margin-left: 20px;
  padding: 45px 0px 40px 0px;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}

.menu-item a {
  text-decoration: none;
  color: #242826;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.menu-icon {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.menu-item:hover .menu-icon {
  transform: rotate(180deg);
}

.menu-item:hover a {
  text-decoration: underline;
  text-underline-offset: 4px;
}

#menu-items {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  list-style: none;
}

@media screen and (max-width: 1010px) {
  .login {
    font-size: 13px;
  }
  .quote {
    padding: 15px;
    font-size: 13px;
  }
  #menu-items {
    margin-left: 0px;
  } 
  #upcover-logo {
    width: 150px;
  }
  .menu-item {
    padding: 40px 0px;
  }
}

/* Initially hidden dropdown */
.dropdown-menu.three-column {
  display: none;
  position: absolute;
  margin-top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 40px 60px;
  transition: 0.4s ease all;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  justify-content: space-between;
}

.dropdown-menu.three-column::-webkit-scrollbar {
  width: 8px;
}

.dropdown-menu.three-column::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.dropdown-menu.three-column::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.dropdown-menu.three-column::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Show on hover of menu item */
.menu-item.dropdown:hover .dropdown-menu.three-column {
  display: flex;
}

.dropdown-column {
  flex: 1;
  min-width: 150px;
  max-width: 285px;
  margin-right: 60px;
}

.dropdown-column h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #242826;
}

.dropdown-column ul {
  font-weight: 400;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-column ul li {
  margin-bottom: 30px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: color 0.3s;
}

.dropdown-column ul li:hover {
  color: #ffffff;
}

.dropdown-box-container {
  flex: 0 0 490px;
  margin-left: auto;
}

.box-first-div {
  margin-bottom: 20px;
  background: #F7F6F3;
  padding: 20px;
  border-radius: 20px;
  width: 490px;
  border: 1px solid rgba(206, 210, 217, 0.50);
}

.box-first-div img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: 20% 30%;
  border-radius: 10px;
  margin-bottom: 30px;
}

.box-second-div {
  background: #F7F6F3;
  padding: 20px;
  border-radius: 20px;
  width: 490px;
  border: 1px solid rgba(206, 210, 217, 0.50);
}

.box-first-div h3,
.box-second-div h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #242826;
}

.box-first-div p,
.box-second-div p {
  font-size: 14px;
  line-height: 25px;
  color: #555;
  margin-bottom: 30px;
  font-weight: 400;
}

.button-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
}

.box-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 20px;
  background-color: ${this.themeManager.getCurrentColor()};
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
}

.box-button:hover {
  opacity: 0.9;
}

@media screen and (max-width: 1500px) {
  .dropdown-menu.three-column {
    flex-wrap: wrap;
    justify-content: start;
  }

  .dropdown-box-container {
    flex: 0 0 100%;
    margin-left: 0;
    margin-top: 40px;
  }

  .box-first-div,
  .box-second-div {
    width: 100%;
  }
}

@media screen and (max-width: 1500px) {
  .dropdown-box-container {
    padding: 0;
  }

  .box-first-div img {
    height: 240px;
  }

  .box-first-div h3,
  .box-second-div h3 {
    font-size: 18px;
  }


}
`,document.head.appendChild(e)}createLogo(){let e=document.createElement("div");return e.className="UPCOVER-LOGO",e.id="upcover-logo",e.innerHTML=this.config.logo,e}createActions(){let e=document.createElement("div");e.className="actions";let t=document.createElement("a");t.href="#",t.style.color=this.themeManager.getCurrentColor(),t.className="login",t.innerText=this.config.loginText||"LOGIN";let n=document.createElement("button");return n.style.backgroundColor=this.themeManager.getCurrentColor(),n.className="quote",n.innerText=this.config.quoteText||"GET A QUOTE","motor"===this.themeManager.getCurrentTheme()?(t.style.color="#3B4125",n.style.color="#3B4125"):(t.style.color=this.themeManager.getCurrentColor(),n.style.color="white"),this.themeManager.subscribe(e=>{let o=this.themeManager.getCurrentColor();t.style.color="motor"===e?"#3B4125":o,n.style.backgroundColor=o,n.style.color="motor"===e?"#3B4125":"white"}),e.appendChild(t),e.appendChild(n),e}render(){this.target.innerHTML="";let e=document.createElement("div");e.className="navbar-left",e.appendChild(this.createLogo());let t=document.createElement("ul");t.id="menu-items";let n=this.themeManager.getCurrentTheme();this.getMenuItemsForTheme(n).forEach(e=>{let n=document.createElement("li");n.className=e.dropdown?"menu-item dropdown":"menu-item";let r=document.createElement("a");if(r.href=e.href,r.innerHTML=`
  ${e.label}
  <span class="menu-icon">${o.arrowDownIcon}</span>
`,n.addEventListener("mouseenter",()=>{let e="motor"===this.themeManager.getCurrentTheme()?"#3B4125":this.themeManager.getCurrentColor();r.style.color=e;let t=r.querySelector("svg path");t&&t.setAttribute("stroke",e)}),n.addEventListener("mouseleave",()=>{r.style.color="#242826";let e=r.querySelector("svg path");e&&e.setAttribute("stroke","#242826")}),n.appendChild(r),e.dropdown||e.boxComponent){let t=document.createElement("div");if(t.className="dropdown-menu three-column",e.dropdown&&e.dropdown.forEach(e=>{let n=document.createElement("div");n.className="dropdown-column";let o=document.createElement("h4");o.textContent=e.title;let r=document.createElement("ul");e.items.forEach(e=>{let t=document.createElement("li");t.textContent=e,e.toLowerCase().includes("view all")&&(t.style.cssText=`
            color: ${this.themeManager.getCurrentColor()};
            text-decoration: underline;
            font-weight: 700;
            text-underline-offset: 4px;
          `),r.appendChild(t)}),n.appendChild(o),n.appendChild(r),t.appendChild(n)}),e.boxComponent){let n=document.createElement("div");n.className="dropdown-box-container";let o=document.createElement("div");o.className="box-first-div";let r=document.createElement("img");r.src=e.boxComponent.firstDiv.image,r.alt=e.boxComponent.firstDiv.heading;let i=document.createElement("h3");i.textContent=e.boxComponent.firstDiv.heading;let a=document.createElement("p");a.innerHTML=e.boxComponent.firstDiv.paragraph;let l=document.createElement("div");if(l.className="button-container",e.boxComponent.firstDiv.buttons.forEach((e,t)=>{let n=document.createElement("a");if(n.href=e.href,n.className="box-button",n.textContent=e.label,1===t){let e=this.themeManager.getCurrentTheme(),t=this.themeManager.getCurrentColor();"business"===e?n.style.cssText=`
            background-color: #FFCFC5;
            color: ${t};
          `:"motor"===e&&(n.style.cssText=`
            background-color: #F8FFAF;
            color: #000000;
          `)}else{let e=this.themeManager.getCurrentTheme();n.style.cssText=`
          background-color: ${this.themeManager.getCurrentColor()};
          color: ${"motor"===e?"#000000":"white"};
        `}l.appendChild(n)}),o.appendChild(r),o.appendChild(i),o.appendChild(a),o.appendChild(l),n.appendChild(o),e.boxComponent.secondDiv){let t=document.createElement("div");t.className="box-second-div";let o=document.createElement("h3");o.textContent=e.boxComponent.secondDiv.heading;let r=document.createElement("p");r.innerHTML=e.boxComponent.secondDiv.paragraph;let i=document.createElement("a");i.href=e.boxComponent.secondDiv.button.href,i.className="box-button",i.textContent=e.boxComponent.secondDiv.button.label;let a=this.themeManager.getCurrentTheme();i.style.cssText=`
        background-color: ${this.themeManager.getCurrentColor()};
        color: ${"motor"===a?"#000000":"white"};
      `,t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t)}t.appendChild(n)}n.appendChild(t)}t.appendChild(n)}),e.appendChild(t),this.target.appendChild(e),this.target.appendChild(this.createActions())}updateConfig(e){this.config={...this.config,...e},this.render()}mount(e){e.appendChild(this.target)}}});var a=r("eEYVb"),l=r("laig7");window.Upcover={AppBarWidget:(e,t)=>{let n=document.getElementById(e);n&&new(0,a.AppBarWidget)(t).mount(n)},NavbarWidget:(e,t)=>{let n=document.getElementById(e);n&&new(0,l.NavbarWidget)(t).mount(n)}}})();
//# sourceMappingURL=index.js.map
