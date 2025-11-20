'use client';

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Gradient mesh with white lights */}
      <div className="absolute inset-0">
        {/* Top left light */}
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-[0.25]"
          style={{
            top: '-20%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 30%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Center light */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.2]"
          style={{
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Bottom right light */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-[0.2]"
          style={{
            bottom: '-15%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 35%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(ellipse at center bottom, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      />

      {/* Fine grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

