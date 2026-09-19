/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0E17', // Base dark navy background
          900: '#0D1321', // Layered dark section background
          850: '#111827', // Card background
          800: '#161F33', // Card hover / elevated background
          700: '#1E293B', // Border dark
          600: '#334155', // Subtle divider
        },
        cyan: {
          400: '#22D3EE', // Primary accent
          500: '#06B6D4', // Primary accent hover / dark
          600: '#0891B2',
        },
        violet: {
          500: '#8B5CF6', // Secondary accent (tech icon hover/glow only)
          600: '#7C3AED',
        },
        slate: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8', // Muted text
          500: '#64748B',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.375rem', // 6px
        md: '0.5rem',        // 8px
        lg: '0.75rem',       // 12px
      },
      boxShadow: {
        'cyan-glow': '0 0 20px -5px rgba(34, 211, 238, 0.25)',
        'violet-glow': '0 0 15px -3px rgba(139, 92, 246, 0.3)',
      }
    },
  },
  plugins: [],
}
