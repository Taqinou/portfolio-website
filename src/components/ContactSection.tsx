'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';
import SectionHeader from './ui/SectionHeader';
import ContactCard from './ui/ContactCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = texts[lang];
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label={t.contact} 
          title={t.letsWorkTogether} 
          description={t.contactDescription}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            title={t.sendEmail}
            description={t.sendEmailDesc}
            onClick={() => setContactOpen(true)}
            glowColor="purple"
          />

          <ContactCard
            title={t.github}
            description={t.githubDesc}
            href="https://github.com/Taqinou"
            glowColor="gray"
          />

          <ContactCard
            title={t.linkedin}
            description={t.linkedinDesc}
            href="https://www.linkedin.com/in/enzo-gazzoli"
            glowColor="blue"
          />

          <ContactCard
            title={t.fiverr}
            description={t.fiverrDesc}
            href="https://fr.fiverr.com/s/yvgdx95"
            glowColor="emerald"
          />
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
