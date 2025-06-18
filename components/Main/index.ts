import { AppBarWidget, AppBarWidgetConfig } from "../AppBarWidget/index";
// import PricingWidget from './PricingWidget';
// import FooterWidget from './FooterWidget';



(window as any).Upcover = {
  AppBarWidget: (targetId: string, options: AppBarWidgetConfig) => {
    const target = document.getElementById(targetId);
    if (target) {
      const widget = new AppBarWidget(options);
      widget.mount(target); // assumes your widget has a mount() method
    }
  },
  //   renderPricing: (targetId: string, options: PricingWidgetOptions) => {
  //     const target = document.getElementById(targetId);
  //     if (target) {
  //       const widget = new PricingWidget(options);
  //       widget.mount(target);
  //     }
  //   },
  //   renderFooter: (targetId: string, options: FooterWidgetOptions) => {
  //     const target = document.getElementById(targetId);
  //     if (target) {
  //       const widget = new FooterWidget(options);
  //       widget.mount(target);
  //     }
  //   },
};
