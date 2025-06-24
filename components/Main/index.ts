import { AppBarWidget, AppBarWidgetConfig } from "../AppBarWidget/index";
import { NavbarWidget, NavbarConfig } from "../NavbarWidget/index";
import { mountCyberInsuranceSolutions } from "../CyberInsuranceSolutions/index";
import { mountCyberCovers } from "../CyberCovers/index";




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
    const target = document.getElementById(targetId);
    if (target) mountCyberInsuranceSolutions(target, options);
  },
  CyberCoversWidget: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberCovers(target, options);
  }
};
