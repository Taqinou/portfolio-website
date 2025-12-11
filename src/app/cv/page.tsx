import CVPage from '@/components/cv/CVPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - GAZZOLI Enzo',
  description: 'Curriculum Vitae interactif de GAZZOLI Enzo - Développeur Junior',
};

export default function CVRoute() {
  return <CVPage />;
}
