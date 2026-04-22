export function PixelStar({ className = '', size = 14, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 11 11"
      width={size}
      height={size}
      className={`pixel-render inline-block ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="5" y="0" width="1" height="1" />
        <rect x="4" y="1" width="3" height="1" />
        <rect x="0" y="4" width="2" height="1" />
        <rect x="3" y="3" width="5" height="3" />
        <rect x="9" y="4" width="2" height="1" />
        <rect x="0" y="5" width="2" height="1" />
        <rect x="9" y="5" width="2" height="1" />
        <rect x="4" y="6" width="3" height="1" />
        <rect x="5" y="7" width="1" height="3" />
        <rect x="3" y="9" width="1" height="1" />
        <rect x="7" y="9" width="1" height="1" />
      </g>
    </svg>
  );
}

export function PixelHeart({ className = '', size = 14, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 9 8"
      width={size}
      height={size}
      className={`pixel-render inline-block ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="1" y="1" width="2" height="1" />
        <rect x="6" y="1" width="2" height="1" />
        <rect x="0" y="2" width="9" height="2" />
        <rect x="1" y="4" width="7" height="1" />
        <rect x="2" y="5" width="5" height="1" />
        <rect x="3" y="6" width="3" height="1" />
        <rect x="4" y="7" width="1" height="1" />
      </g>
    </svg>
  );
}

export function PixelArrow({ className = '', size = 14, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 11 7"
      width={size}
      height={size}
      className={`pixel-render inline-block ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="7" y="0" width="1" height="1" />
        <rect x="7" y="1" width="2" height="1" />
        <rect x="0" y="2" width="10" height="1" />
        <rect x="0" y="3" width="11" height="1" />
        <rect x="0" y="4" width="10" height="1" />
        <rect x="7" y="5" width="2" height="1" />
        <rect x="7" y="6" width="1" height="1" />
      </g>
    </svg>
  );
}

export function PixelFlame({ className = '', size = 14, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 8 10"
      width={size}
      height={size}
      className={`pixel-render inline-block ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="3" y="0" width="1" height="2" />
        <rect x="2" y="2" width="3" height="1" />
        <rect x="1" y="3" width="5" height="1" />
        <rect x="0" y="4" width="7" height="3" />
        <rect x="1" y="7" width="5" height="1" />
        <rect x="2" y="8" width="3" height="1" />
        <rect x="3" y="9" width="1" height="1" />
      </g>
    </svg>
  );
}

export function PixelDivider({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 py-6 ${className}`}
      aria-hidden="true"
    >
      <span className="h-[2px] bg-maroon/50 flex-1 max-w-[80px]" />
      <PixelStar size={10} className="text-maroon" />
      <span className="w-2 h-2 bg-maroon block" />
      <PixelStar size={10} className="text-maroon" />
      <span className="h-[2px] bg-maroon/50 flex-1 max-w-[80px]" />
    </div>
  );
}

export function PixelBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-pixelbold text-[10px] tracking-widest2 uppercase bg-maroon text-bone px-3 py-1.5 pixel-shadow-cream ${className}`}
    >
      {children}
    </span>
  );
}
