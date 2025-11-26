import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  readonly label: string;
  readonly path: string;
}

export interface FeatureCardProps {
  readonly title: string;
  readonly description: string;
  readonly icon?: LucideIcon;
  readonly delay?: number;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}