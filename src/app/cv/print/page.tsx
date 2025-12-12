'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

// SVG Icon Components for PDF (inline, no external dependencies)
const IconSparkles = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

const IconMail = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconMapPin = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconContact = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconCode = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const IconTarget = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconGraduation = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const IconRocket = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export default function CVPrintPage() {
  const { lang } = useLanguage();
  const t = texts[lang];

  const skills = [
    {
      title: t.cvSkillsLanguages,
      items: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
    },
    { title: t.cvSkillsEngine, items: 'Node.js, FastAPI, Python, REST APIs, PostgreSQL, Redis' },
    { title: t.cvSkillsTools, items: 'Git, VS Code, Docker, Vercel, Postman, Render' },
    { title: t.cvSkillsOther, items: 'Architecture, CI/CD, Responsive Design' },
    { title: t.cvSkillsSpokenLanguages, items: 'Anglais technique' },
  ];

  const education = [
    { title: t.cvEducation1Title, school: t.cvEducation1School, date: t.cvEducation1Date },
    { title: t.cvEducation2Title, school: t.cvEducation2School, date: t.cvEducation2Date },
  ];

  const experiences = [
    { title: t.cvExp1Title, company: t.cvExp1Company, date: t.cvExp1Date, desc: t.cvExp1Desc },
    { title: t.cvExp2Title, company: t.cvExp2Company, date: t.cvExp2Date, desc: t.cvExp2Desc },
    { title: t.cvExp3Title, company: t.cvExp3Company, date: t.cvExp3Date, desc: t.cvExp3Desc },
  ];

  const interests = [
    { title: t.cvInterest1Title, desc: t.cvInterest1Desc },
    { title: t.cvInterest2Title, desc: t.cvInterest2Desc },
    { title: t.cvInterest3Title, desc: t.cvInterest3Desc },
  ];

  return (
    <div
      style={{
        width: '210mm',
        height: '297mm',
        margin: '0 auto',
        padding: '8mm 10mm',
        background:
          'linear-gradient(135deg, rgb(5, 5, 5) 0%, rgb(10, 10, 10) 50%, rgb(5, 5, 8) 100%)',
        color: 'rgb(255, 255, 255)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '8pt',
        lineHeight: '1.3',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(148, 163, 184, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '5%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <header
        style={{
          marginBottom: '5mm',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: '7pt',
            color: 'rgb(115, 115, 115)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '1mm',
          }}
        >
          Curriculum Vitae
        </p>
        <h1
          style={{
            fontSize: '32pt',
            fontWeight: '600',
            margin: 0,
            letterSpacing: '-1px',
          }}
        >
          <span style={{ color: 'rgb(255, 255, 255)' }}>GAZZOLI </span>
          <span
            style={{
              color: 'rgb(255, 255, 255)',
              fontWeight: '300',
            }}
          >
            ENZO
          </span>
        </h1>
        <p
          style={{
            fontSize: '12pt',
            color: 'rgb(163, 163, 163)',
            margin: '1mm 0 0 0',
            fontWeight: '300',
          }}
        >
          {t.cvSubtitle}
        </p>
      </header>

      {/* Profile Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>
          <IconSparkles /> {t.cvProfileTitle}
        </h2>
        <p
          style={{ margin: 0, fontSize: '8.5pt', color: 'rgb(212, 212, 212)', lineHeight: '1.45' }}
        >
          {t.cvProfileText}
        </p>
      </div>

      {/* Two columns */}
      <div
        style={{ display: 'flex', gap: '4mm', marginTop: '4mm', position: 'relative', zIndex: 1 }}
      >
        {/* Left column - 32% */}
        <div style={{ width: '32%', display: 'flex', flexDirection: 'column', gap: '4mm' }}>
          {/* Contact Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconContact /> {t.cvContactTitle}
            </h2>
            <p style={{ ...itemStyle, display: 'flex', alignItems: 'center', gap: '2mm' }}>
              <IconMail /> {t.cvContactEmail}
            </p>
            <p style={{ ...itemStyle, display: 'flex', alignItems: 'center', gap: '2mm' }}>
              <IconMapPin /> {t.cvContactLocation}
            </p>
          </div>

          {/* Skills Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconCode /> {t.cvSkillsTitle}
            </h2>
            {skills.map((skill, i) => (
              <div key={i} style={{ marginBottom: '2.5mm' }}>
                <strong
                  style={{
                    fontSize: '7.5pt',
                    color: 'rgb(212, 212, 212)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                  }}
                >
                  {skill.title}
                </strong>
                <p
                  style={{
                    margin: '0.5mm 0 0 0',
                    fontSize: '7pt',
                    color: 'rgb(163, 163, 163)',
                    lineHeight: '1.35',
                  }}
                >
                  {skill.items}
                </p>
              </div>
            ))}
          </div>

          {/* Interests Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconTarget /> {t.cvInterestsTitle}
            </h2>
            {interests.map((interest, i) => (
              <div key={i} style={{ marginBottom: '2mm' }}>
                <strong style={{ fontSize: '7.5pt', color: 'rgb(212, 212, 212)' }}>
                  {interest.title}
                </strong>
                <p
                  style={{
                    margin: '0.5mm 0 0 0',
                    fontSize: '6.5pt',
                    color: 'rgb(115, 115, 115)',
                    lineHeight: '1.3',
                  }}
                >
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - 68% */}
        <div style={{ width: '68%', display: 'flex', flexDirection: 'column', gap: '4mm' }}>
          {/* Education Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconGraduation /> {t.cvEducationTitle}
            </h2>
            {education.map((edu, i) => (
              <div key={i} style={timelineItemStyle}>
                <div style={timelineDotStyle} />
                <strong style={{ fontSize: '9pt', color: 'rgb(255, 255, 255)' }}>
                  {edu.title}
                </strong>
                <p
                  style={{ margin: '0.5mm 0 0 0', fontSize: '7.5pt', color: 'rgb(163, 163, 163)' }}
                >
                  {edu.school}
                </p>
                <p style={{ margin: '0.5mm 0 0 0', fontSize: '7pt', color: 'rgb(82, 82, 82)' }}>
                  {edu.date}
                </p>
              </div>
            ))}
          </div>

          {/* Projects Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconRocket /> {t.cvProjectsTitle}
            </h2>
            <div
              style={{
                padding: '4mm',
                background:
                  'linear-gradient(135deg, rgba(148, 163, 184, 0.06) 0%, rgba(167, 139, 250, 0.04) 100%)',
                borderRadius: '3mm',
                border: '1px solid rgba(148, 163, 184, 0.15)',
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <strong style={{ fontSize: '10pt', color: 'rgb(255, 255, 255)' }}>
                  {t.cvProject1Title}
                </strong>
                <span
                  style={{
                    fontSize: '6.5pt',
                    color: 'rgb(148, 163, 184)',
                    padding: '1mm 2.5mm',
                    background: 'rgba(148, 163, 184, 0.12)',
                    border: '1px solid rgba(148, 163, 184, 0.25)',
                    borderRadius: '2mm',
                    fontWeight: '500',
                  }}
                >
                  {t.cvProject1Status}
                </span>
              </div>
              <p
                style={{
                  margin: '1.5mm 0',
                  fontSize: '6.5pt',
                  color: 'rgb(115, 115, 115)',
                  fontFamily: 'monospace',
                }}
              >
                {t.cvProject1Tech}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '7.5pt',
                  color: 'rgb(163, 163, 163)',
                  lineHeight: '1.4',
                }}
              >
                {t.cvProject1Desc}
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              <IconBriefcase /> {t.cvExperienceTitle}
            </h2>
            {experiences.map((exp, i) => (
              <div key={i} style={timelineItemStyle}>
                <div style={timelineDotStyle} />
                <strong style={{ fontSize: '9pt', color: 'rgb(255, 255, 255)' }}>
                  {exp.title}
                </strong>
                <p
                  style={{ margin: '0.5mm 0 0 0', fontSize: '7.5pt', color: 'rgb(163, 163, 163)' }}
                >
                  {exp.company}
                </p>
                <p style={{ margin: '0.5mm 0 0 0', fontSize: '7pt', color: 'rgb(82, 82, 82)' }}>
                  {exp.date}
                </p>
                <p
                  style={{
                    margin: '1mm 0 0 0',
                    fontSize: '7pt',
                    color: 'rgb(115, 115, 115)',
                    lineHeight: '1.4',
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        body {
          margin: 0;
          padding: 0;
          background: rgb(0, 0, 0);
        }
      `}</style>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '4mm',
  padding: '4mm',
  position: 'relative',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '8pt',
  fontWeight: '500',
  color: 'rgb(163, 163, 163)',
  marginBottom: '3mm',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5mm',
};

const itemStyle: React.CSSProperties = {
  margin: '1.5mm 0',
  fontSize: '8pt',
  color: 'rgb(212, 212, 212)',
};

const timelineItemStyle: React.CSSProperties = {
  marginBottom: '3.5mm',
  paddingLeft: '4mm',
  borderLeft: '2px solid rgba(148, 163, 184, 0.3)',
  position: 'relative',
};

const timelineDotStyle: React.CSSProperties = {
  position: 'absolute',
  left: '-4px',
  top: '2px',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: 'rgb(148, 163, 184)',
  boxShadow: '0 0 6px rgba(148, 163, 184, 0.5)',
};
