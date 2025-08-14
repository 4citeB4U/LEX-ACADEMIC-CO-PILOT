
import React from 'react';

interface VoiceWaveProps {
  isActive: boolean;
}

const VoiceWave: React.FC<VoiceWaveProps> = ({ isActive }) => {
  const barClasses = 'w-1 h-full bg-indigo-400 rounded-full transition-all duration-300 ease-in-out';
  
  return (
    <div className="flex justify-center items-center h-full space-x-1.5">
  <div className={`${barClasses} ${isActive ? 'wave wave-delay-1' : 'wave-inactive'}`}></div>
  <div className={`${barClasses} ${isActive ? 'wave wave-delay-2' : 'wave-inactive'}`}></div>
  <div className={`${barClasses} ${isActive ? 'wave wave-delay-3' : 'wave-inactive'}`}></div>
  <div className={`${barClasses} ${isActive ? 'wave wave-delay-4' : 'wave-inactive'}`}></div>
  <div className={`${barClasses} ${isActive ? 'wave wave-delay-5' : 'wave-inactive'}`}></div>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.2); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};

export default VoiceWave;
