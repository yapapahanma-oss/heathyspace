@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --color-on-surface-variant: #404943;
  --color-secondary-fixed-dim: #a4c9ff;
  --color-error-container: #ffdad6;
  --color-on-primary-fixed: #002114;
  --color-surface-container-lowest: #ffffff;
  --color-outline-variant: #bfc9c1;
  --color-surface-container-low: #f3f4f5;
  --color-outline: #707973;
  --color-tertiary-fixed-dim: #5bd5fc;
  --color-on-primary-container: #a8e7c5;
  --color-secondary: #005fad;
  --color-secondary-fixed: #d4e3ff;
  --color-inverse-primary: #95d4b3;
  --color-secondary-container: #58a3fe;
  --color-on-background: #191c1d;
  --color-on-tertiary-fixed-variant: #004e61;
  --color-on-error-container: #93000a;
  --color-surface-bright: #f8f9fa;
  --color-primary-fixed-dim: #95d4b3;
  --color-on-tertiary-container: #9ee4ff;
  --color-surface-tint: #2c694e;
  --color-on-primary-fixed-variant: #0e5138;
  --color-on-secondary-container: #003869;
  --color-on-tertiary: #ffffff;
  --color-surface-dim: #d9dadb;
  --color-on-error: #ffffff;
  --color-on-secondary-fixed-variant: #004884;
  --color-error: #ba1a1a;
  --color-on-tertiary-fixed: #001f28;
  --color-surface-container-highest: #e1e3e4;
  --color-on-secondary: #ffffff;
  --color-primary-fixed: #b1f0ce;
  --color-primary-container: #2d6a4f;
  --color-tertiary-fixed: #b7eaff;
  --color-on-primary: #ffffff;
  --color-on-secondary-fixed: #001c39;
  --color-surface-container: #edeeef;
  --color-surface: #f8f9fa;
  --color-background: #f8f9fa;
  --color-inverse-surface: #2e3132;
  --color-surface-variant: #e1e3e4;
  --color-tertiary-container: #006881;
  --color-tertiary: #004e62;
  --color-primary: #0f5238;
  --color-inverse-on-surface: #f0f1f2;
  --color-on-surface: #191c1d;

  --font-plus-jakarta: "Plus Jakarta Sans", sans-serif;
  --font-manrope: "Manrope", sans-serif;
}

@layer base {
  body {
    @apply bg-surface font-manrope text-on-surface;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-plus-jakarta;
  }
}
