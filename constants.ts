
import type { NavItem } from './types';

/**
 * Application Navigation Links
 * Used in the Desktop Navbar and Mobile Navigation Overlay.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Platform', path: '/product' },
  { label: 'Missions', path: '/missions' },
  { label: 'Specs', path: '/specs' },
  { label: 'Manifesto', path: '/manifesto' },
  { label: 'Give', path: '/give' },
] as const;

/**
 * Global Design System Colors
 * These must match the Tailwind config in index.html.
 */
export const COLORS = {
  black: '#050505',
  offblack: '#0A0A0A',
  white: '#F2F2F2',
  muted: '#888888',
  border: '#222222',
  coral: '#d5a790',
  success: '#10b981', // Emerald-500
  primary: '#10b981', // Emerald-500 (Unified with success color)
} as const;

/**
 * Core Technology Stack
 * Displayed in the Specs and About sections.
 */
export const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "TanStack",
  "PostgreSQL",
  "Stripe",
  "Keycloak",
  "Headless WordPress",
  "SendGrid",
  "Vercel",
  "AWS"
] as const;