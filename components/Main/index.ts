import { AppBarWidget, AppBarWidgetConfig } from "../AppBarWidget/index";
import { NavbarWidget, NavbarConfig } from "../NavbarWidget/index";
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
  NavbarWidget: (targetId: string, options: NavbarConfig) => {
    const target = document.getElementById(targetId);
    if (target) {
      const widget = new NavbarWidget(options);
      widget.mount(target);
    }
  },
  CyberInsuranceSolutionsWidget: (targetId: string, options?: any) => {
    import('../CyberInsuranceSolutions/index').then(mod => {
      const mount = mod.mountCyberInsuranceSolutions;
      if (mount) {
        const target = document.getElementById(targetId);
        if (target) mount(target, options);
      }
    });
  }
};
