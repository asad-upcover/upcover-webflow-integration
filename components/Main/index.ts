import { AppBarWidget, AppBarWidgetConfig } from "../AppBarWidget/index";
import { NavbarWidget, NavbarConfig } from "../NavbarWidget/index";
import { mountCyberInsuranceSolutions } from "../CyberInsuranceSolutions/index";
import { mountCyberCovers } from "../CyberCovers/index";
import { mountCyberSteps, CyberStepsConfig } from "../CyberSteps/index";
import { mountWhoNeedsCyberInsurance } from "../WhoNeedsCyberInsurance/index";
import { mountCyberExamples } from "../CyberExamples/index";
import { mountCyberCoveragesScale } from "../CyberCoveragesScale";
import { mountCyberBlogs } from "../CyberBlogs/index";
import { mountCyberTopArticles } from "../CyberTopArticles";
import { mountCyberLatestInsights } from "../CyberLatestInsights/index";

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
  },
  CyberStepsWidget: (targetId: string, options?: Partial<CyberStepsConfig>) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberSteps(target, options);
  },
  WhoNeedsCyberInsuranceWidget: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountWhoNeedsCyberInsurance(target, options);
  },
  CyberExamples: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberExamples(target, options);
  },
  CyberCoveragesScale: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberCoveragesScale(target, options);
  },
  CyberBlogsWidget: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberBlogs(target, options);
  },
  CyberTopArticles: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberTopArticles(target, options);
  },
  CyberLatestInsightsWidget: (targetId: string, options?: any) => {
    const target = document.getElementById(targetId);
    if (target) mountCyberLatestInsights(target, options);
  }
};
