'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

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
          'linear-gradient(135deg, rgb(10, 10, 15) 0%, rgb(15, 15, 25) 50%, rgb(10, 10, 20) 100%)',
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
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
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
              background:
                'linear-gradient(90deg, rgb(96, 165, 250), rgb(192, 132, 252), rgb(244, 114, 182))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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
        <h2 style={sectionTitleStyle}>✨ {t.cvProfileTitle}</h2>
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
            <h2 style={sectionTitleStyle}>📬 {t.cvContactTitle}</h2>
            <p style={itemStyle}>✉️ {t.cvContactEmail}</p>
            <p style={itemStyle}>📍 {t.cvContactLocation}</p>
          </div>

          {/* Skills Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>💻 {t.cvSkillsTitle}</h2>
            {skills.map((skill, i) => (
              <div key={i} style={{ marginBottom: '2.5mm' }}>
                <strong
                  style={{
                    fontSize: '7.5pt',
                    color: 'rgb(96, 165, 250)',
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
            <h2 style={sectionTitleStyle}>🎯 {t.cvInterestsTitle}</h2>
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
            <h2 style={sectionTitleStyle}>🎓 {t.cvEducationTitle}</h2>
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

          {/* Experience Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>💼 {t.cvExperienceTitle}</h2>
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

          {/* Projects Card */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>🚀 {t.cvProjectsTitle}</h2>
            <div
              style={{
                padding: '4mm',
                background:
                  'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
                borderRadius: '3mm',
                border: '1px solid rgba(59, 130, 246, 0.2)',
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
                    color: 'rgb(96, 165, 250)',
                    padding: '1mm 2.5mm',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
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
  borderLeft: '2px solid rgba(59, 130, 246, 0.35)',
  position: 'relative',
};

const timelineDotStyle: React.CSSProperties = {
  position: 'absolute',
  left: '-4px',
  top: '2px',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: 'rgb(59, 130, 246)',
  boxShadow: '0 0 6px rgba(59, 130, 246, 0.5)',
};
