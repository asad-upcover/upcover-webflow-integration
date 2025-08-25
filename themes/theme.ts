export interface ThemeColors {
  business: string;
  tech: string;
  motor: string;
}

export const themeColors: ThemeColors = {
  business: '#FF522D',
  tech: '#005DFF',
  motor: '#D5E525'
};

export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: string = 'business';
  private listeners: ((theme: string) => void)[] = [];
  private customColors: ThemeColors | null = null;

  private constructor() {}

  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  setTheme(theme: keyof ThemeColors) {
    this.currentTheme = theme;
    this.notifyListeners();
  }

  setCustomColors(colors: Partial<ThemeColors>) {
    this.customColors = {
      ...themeColors,
      ...colors
    };
    this.notifyListeners();
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  getCurrentColor(): string {
    const colors = this.customColors || themeColors;
    return colors[this.currentTheme as keyof ThemeColors];
  }

  subscribe(listener: (theme: string) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentTheme));
  }
} 