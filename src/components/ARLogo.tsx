import React from 'react';

interface ARLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  monogramOnly?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'accent';
}

export const ARLogo: React.FC<ARLogoProps> = ({
  size = 'md',
  showWordmark = true,
  monogramOnly = false,
  className = '',
  variant = 'light',
}) => {
  const sizeMap = {
    sm: { box: 28, text: 'text-sm', sub: 'text-[9px]', gap: 'gap-2.5' },
    md: { box: 34, text: 'text-base sm:text-lg', sub: 'text-[10px]', gap: 'gap-3' },
    lg: { box: 44, text: 'text-xl sm:text-2xl', sub: 'text-xs', gap: 'gap-3.5' },
    xl: { box: 60, text: 'text-3xl sm:text-4xl', sub: 'text-sm', gap: 'gap-4' },
  };

  const { box, text, sub, gap } = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${gap} select-none group ${className}`}>
      {/* Precision Geometric AR Monogram */}
      <div 
        style={{ width: box, height: box }}
        className="relative shrink-0 flex items-center justify-center rounded-[6px] bg-[#141519] border border-[#262832] group-hover:border-[#FF4D15]/60 transition-colors shadow-sm overflow-hidden"
      >
        <svg
          viewBox="0 0 40 40"
          className="w-[72%] h-[72%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Geometric Precision Monogram A + R */}
          {/* Letter A: Dynamic left diagonal + apex + angled horizontal bar */}
          <path
            d="M8 32L17.5 8H22L16.2 23H24.5L25.8 26.5H14.8L12.5 32H8Z"
            fill="#FFFFFF"
            className="transition-colors group-hover:fill-white"
          />
          {/* Letter R: Upper bowl + sharp angled dynamic leg intersecting cleanly */}
          <path
            d="M21 8H29.5C33.6 8 36.5 10.6 36.5 14.5C36.5 17.5 34.8 19.8 32.2 20.7L36.8 32H31.5L27.4 21.8H24V32H19.5V8H21ZM24 18H29C31 18 32.2 16.8 32.2 14.8C32.2 12.8 31 11.8 29 11.8H24V18Z"
            fill="#FF4D15"
          />
          {/* Subtle micro accent point */}
          <circle cx="35.5" cy="8.5" r="1.5" fill="#FF4D15" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {showWordmark && !monogramOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`${text} font-extrabold tracking-tight text-white font-sans-ui`}>
              AR
            </span>
            <span className={`${text} font-bold tracking-tight text-[#FF4D15] font-sans-ui`}>
              DIGITAL
            </span>
          </div>
          <span className={`${sub} font-mono-tech tracking-[0.2em] uppercase text-[#7E8392] mt-0.5`}>
            AGENCY • STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
