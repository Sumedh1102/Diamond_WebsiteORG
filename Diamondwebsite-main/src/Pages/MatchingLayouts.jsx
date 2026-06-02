import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const shapesData = {
  emerald: {
    name: "Emerald",
    tagline: "Elegant step-cut outlines with clean, sophisticated symmetry",
    description: "Precisely calibrated step-cut layouts engineered for sleek, high-end designs, eternity bands, and multi-stone arrangements.",
    largeSizes: [
      { size: "24 pt", dimensions: "5.00 X 2.50" },
      { size: "32 pt", dimensions: "5.00 X 3.00" },
      { size: "40 pt", dimensions: "5.00 X 3.55" },
      { size: "50 pt", dimensions: "5.00 X 4.00" },
      { size: "45 pt", dimensions: "5.50 X 3.50" },
      { size: "60 pt", dimensions: "5.60 X 4.00" },
      { size: "40 pt", dimensions: "6.00 X 3.00" },
      { size: "65 pt", dimensions: "6.00 X 4.00" },
      { size: "70 pt", dimensions: "6.00 X 4.20" },
      { size: "75 pt", dimensions: "6.00 X 4.25" },
      { size: "80 pt", dimensions: "6.10 X 4.35" },
      { size: "90 pt", dimensions: "6.50 X 4.50" },
      { size: "1.00 ct", dimensions: "6.60 X 4.80" }
    ],
    smallSizes: [
      { size: "5 pt", dimensions: "3.00 X 1.50" },
      { size: "8 pt", dimensions: "3.00 X 2.00" },
      { size: "10 pt", dimensions: "3.50 X 2.00" },
      { size: "13 pt", dimensions: "3.50 X 2.50" },
      { size: "16 pt", dimensions: "3.75 X 2.50" },
      { size: "19 pt", dimensions: "3.80 X 2.70" },
      { size: "11 pt", dimensions: "4.00 X 2.00" },
      { size: "20 pt", dimensions: "4.00 X 2.85" },
      { size: "22 pt", dimensions: "4.00 X 3.00" },
      { size: "25 pt", dimensions: "4.20 X 3.00" },
      { size: "28 pt", dimensions: "4.50 X 3.00" },
      { size: "30 pt", dimensions: "4.50 X 3.20" },
      { size: "35 pt", dimensions: "4.70 X 3.30" }
    ]
  },
  oval: {
    name: "Oval",
    tagline: "Elongated brilliance with perfect visual weight distribution",
    description: "Expertly matched oval layout sequences showing seamless fire, depth, and proportion consistency across all sizes.",
    largeSizes: [
      { size: "30 pt", dimensions: "5.30 X 3.80" },
      { size: "40 pt", dimensions: "5.80 X 4.15" },
      { size: "50 pt", dimensions: "6.30 X 4.50" },
      { size: "60 pt", dimensions: "6.60 X 4.80" },
      { size: "70 pt", dimensions: "7.05 X 5.05" },
      { size: "75 pt", dimensions: "7.15 X 5.10" },
      { size: "80 pt", dimensions: "7.40 X 5.20" },
      { size: "90 pt", dimensions: "7.60 X 5.40" },
      { size: "1.00 ct", dimensions: "7.90 X 5.60" }
    ],
    smallSizes: [
      { size: "10 pt", dimensions: "3.60 X 2.70" },
      { size: "13 pt", dimensions: "4.00 X 2.80" },
      { size: "14 pt", dimensions: "4.00 X 3.00" },
      { size: "15 pt", dimensions: "4.30 X 3.10" },
      { size: "16 pt", dimensions: "4.50 X 3.00" },
      { size: "21 pt", dimensions: "4.50 X 3.50" },
      { size: "20 pt", dimensions: "4.70 X 3.30" },
      { size: "25 pt", dimensions: "5.00 X 3.55" },
      { size: "35 pt", dimensions: "5.00 X 4.00" }
    ]
  },
  marquise: {
    name: "Marquise",
    tagline: "Striking slender profiles with exceptional fire and sharp points",
    description: "Highly calibrated marquise layouts showing meticulously aligned wing curves and identical length-to-width ratios.",
    largeSizes: [
      { size: "35 pt", dimensions: "7.50 X 3.50" },
      { size: "40 pt", dimensions: "7.60 X 3.80" },
      { size: "48 pt", dimensions: "7.70 X 4.20" },
      { size: "45 pt", dimensions: "8.00 X 4.00" },
      { size: "50 pt", dimensions: "8.20 X 4.10" },
      { size: "55 pt", dimensions: "8.50 X 4.25" },
      { size: "60 pt", dimensions: "8.50 X 4.50" },
      { size: "70 pt", dimensions: "9.00 X 4.50" },
      { size: "75 pt", dimensions: "9.40 X 4.70" },
      { size: "80 pt", dimensions: "9.60 X 4.80" },
      { size: "90 pt", dimensions: "10.00 X 5.00" },
      { size: "1.00 ct", dimensions: "10.50 X 5.25" }
    ],
    smallSizes: [
      { size: "10-11 pt", dimensions: "4.50 X 2.50" },
      { size: "10 pt", dimensions: "4.80 X 2.40" },
      { size: "11 pt", dimensions: "5.00 X 2.50" },
      { size: "17 pt", dimensions: "5.00 X 3.00" },
      { size: "15 pt", dimensions: "5.50 X 2.75" },
      { size: "18 pt", dimensions: "5.50 X 3.00" },
      { size: "20 pt", dimensions: "6.00 X 3.00" },
      { size: "23 pt", dimensions: "6.30 X 3.15" },
      { size: "25 pt", dimensions: "6.50 X 3.25" },
      { size: "28 pt", dimensions: "6.80 X 3.40" },
      { size: "30 pt", dimensions: "7.00 X 3.50" },
      { size: "35 pt", dimensions: "7.30 X 3.65" }
    ]
  },
  pear: {
    name: "Pear",
    tagline: "Graceful teardrop elegance offering supreme contour fluidics",
    description: "Flawlessly proportioned pear layouts calibrated to avoid Bow-tie effects, perfectly matching in symmetry and curves.",
    largeSizes: [
      { size: "24 pt", dimensions: "5.00 X 2.50" },
      { size: "32 pt", dimensions: "5.00 X 3.00" },
      { size: "40 pt", dimensions: "5.00 X 3.55" },
      { size: "50 pt", dimensions: "5.00 X 4.00" },
      { size: "45 pt", dimensions: "5.50 X 3.50" },
      { size: "60 pt", dimensions: "5.60 X 4.00" },
      { size: "40 pt", dimensions: "6.00 X 3.00" },
      { size: "65 pt", dimensions: "6.00 X 4.00" },
      { size: "70 pt", dimensions: "6.00 X 4.20" },
      { size: "75 pt", dimensions: "6.00 X 4.25" },
      { size: "80 pt", dimensions: "6.10 X 4.35" },
      { size: "90 pt", dimensions: "6.50 X 4.50" },
      { size: "1.00 ct", dimensions: "6.60 X 4.80" }
    ],
    smallSizes: [
      { size: "5 pt", dimensions: "3.00 X 1.50" },
      { size: "8 pt", dimensions: "3.00 X 2.00" },
      { size: "10 pt", dimensions: "3.50 X 2.00" },
      { size: "13 pt", dimensions: "3.50 X 2.50" },
      { size: "16 pt", dimensions: "3.75 X 2.50" },
      { size: "19 pt", dimensions: "3.80 X 2.70" },
      { size: "11 pt", dimensions: "4.00 X 2.00" },
      { size: "20 pt", dimensions: "4.00 X 2.85" },
      { size: "22 pt", dimensions: "4.00 X 3.00" },
      { size: "25 pt", dimensions: "4.20 X 3.00" },
      { size: "28 pt", dimensions: "4.50 X 3.00" },
      { size: "30 pt", dimensions: "4.50 X 3.20" },
      { size: "35 pt", dimensions: "4.70 X 3.30" }
    ]
  },
  asscher: {
    name: "Asscher",
    tagline: "Vintage step-cut hall-of-mirrors effect with deep visual corridors",
    description: "Highly prized square-cut layouts showcasing beautifully matching concentric patterns and perfectly cropped corners.",
    largeSizes: [
      { size: "24 pt", dimensions: "5.00 X 2.50" },
      { size: "32 pt", dimensions: "5.00 X 3.00" },
      { size: "40 pt", dimensions: "5.00 X 3.55" },
      { size: "50 pt", dimensions: "5.00 X 4.00" },
      { size: "45 pt", dimensions: "5.50 X 3.50" },
      { size: "60 pt", dimensions: "5.60 X 4.00" },
      { size: "40 pt", dimensions: "6.00 X 3.00" },
      { size: "65 pt", dimensions: "6.00 X 4.00" },
      { size: "70 pt", dimensions: "6.00 X 4.20" },
      { size: "75 pt", dimensions: "6.00 X 4.25" },
      { size: "80 pt", dimensions: "6.10 X 4.35" },
      { size: "90 pt", dimensions: "6.50 X 4.50" },
      { size: "1.00 ct", dimensions: "6.60 X 4.80" }
    ],
    smallSizes: [
      { size: "5 pt", dimensions: "3.00 X 1.50" },
      { size: "8 pt", dimensions: "3.00 X 2.00" },
      { size: "10 pt", dimensions: "3.50 X 2.00" },
      { size: "13 pt", dimensions: "3.50 X 2.50" },
      { size: "16 pt", dimensions: "3.75 X 2.50" },
      { size: "19 pt", dimensions: "3.80 X 2.70" },
      { size: "11 pt", dimensions: "4.00 X 2.00" },
      { size: "20 pt", dimensions: "4.00 X 2.85" },
      { size: "22 pt", dimensions: "4.00 X 3.00" },
      { size: "25 pt", dimensions: "4.20 X 3.00" },
      { size: "28 pt", dimensions: "4.50 X 3.00" },
      { size: "30 pt", dimensions: "4.50 X 3.20" },
      { size: "35 pt", dimensions: "4.70 X 3.30" }
    ]
  },
  princess: {
    name: "Princess",
    tagline: "Bold square silhouettes with intensely vibrant modern brilliance",
    description: "Perfectly parallel lines and sharp 90-degree corners, precisely matched in fire and light performance for jewelry bands.",
    largeSizes: [
      { size: "24 pt", dimensions: "5.00 X 2.50" },
      { size: "32 pt", dimensions: "5.00 X 3.00" },
      { size: "40 pt", dimensions: "5.00 X 3.55" },
      { size: "50 pt", dimensions: "5.00 X 4.00" },
      { size: "45 pt", dimensions: "5.50 X 3.50" },
      { size: "60 pt", dimensions: "5.60 X 4.00" },
      { size: "40 pt", dimensions: "6.00 X 3.00" },
      { size: "65 pt", dimensions: "6.00 X 4.00" },
      { size: "70 pt", dimensions: "6.00 X 4.20" },
      { size: "75 pt", dimensions: "6.00 X 4.25" },
      { size: "80 pt", dimensions: "6.10 X 4.35" },
      { size: "90 pt", dimensions: "6.50 X 4.50" },
      { size: "1.00 ct", dimensions: "6.60 X 4.80" }
    ],
    smallSizes: [
      { size: "5 pt", dimensions: "3.00 X 1.50" },
      { size: "8 pt", dimensions: "3.00 X 2.00" },
      { size: "10 pt", dimensions: "3.50 X 2.00" },
      { size: "13 pt", dimensions: "3.50 X 2.50" },
      { size: "16 pt", dimensions: "3.75 X 2.50" },
      { size: "19 pt", dimensions: "3.80 X 2.70" },
      { size: "11 pt", dimensions: "4.00 X 2.00" },
      { size: "20 pt", dimensions: "4.00 X 2.85" },
      { size: "22 pt", dimensions: "4.00 X 3.00" },
      { size: "25 pt", dimensions: "4.20 X 3.00" },
      { size: "28 pt", dimensions: "4.50 X 3.00" },
      { size: "30 pt", dimensions: "4.50 X 3.20" },
      { size: "35 pt", dimensions: "4.70 X 3.30" }
    ]
  },
  radiant: {
    name: "Radiant",
    tagline: "Robust cut-corner profiles infused with brilliant faceting",
    description: "An incredible blend of emerald-like contours and round brilliant-style sparkle, precisely calibrated to millimetre accuracy.",
    largeSizes: [
      { size: "40 pt", dimensions: "5.00 X 3.50" },
      { size: "45 pt", dimensions: "5.10 X 3.60" },
      { size: "50 pt", dimensions: "5.40 X 3.85" },
      { size: "60 pt", dimensions: "5.60 X 4.00" },
      { size: "36 pt", dimensions: "6.00 X 3.00" },
      { size: "65 pt", dimensions: "6.00 X 4.00" },
      { size: "70 pt", dimensions: "6.00 X 4.20" },
      { size: "75 pt", dimensions: "6.00 X 4.25" },
      { size: "80 pt", dimensions: "6.15 X 4.40" },
      { size: "90 pt", dimensions: "6.50 X 4.50" },
      { size: "1.00 ct", dimensions: "6.65 X 4.80" }
    ],
    smallSizes: [
      { size: "10 pt", dimensions: "3.10 X 2.20" },
      { size: "15 pt", dimensions: "3.50 X 2.50" },
      { size: "18 pt", dimensions: "3.80 X 2.70" },
      { size: "11 pt", dimensions: "4.00 X 2.00" },
      { size: "20 pt", dimensions: "4.00 X 2.80" },
      { size: "22 pt", dimensions: "4.00 X 3.00" },
      { size: "25 pt", dimensions: "4.20 X 3.00" },
      { size: "27 pt", dimensions: "4.50 X 3.00" },
      { size: "30 pt", dimensions: "4.50 X 3.20" },
      { size: "35 pt", dimensions: "4.70 X 3.30" }
    ]
  },
  cushion: {
    name: "Cushion",
    tagline: "Soft pillow-like borders offering highly romantic fire",
    description: "Classic cushion matching layout lines showing smooth pillowy edges and uniform corner curves for delicate jewelry sets.",
    largeSizes: [
      { size: "45 pt", dimensions: "4.40 X 4.40" },
      { size: "50 pt", dimensions: "4.60 X 4.60" },
      { size: "60 pt", dimensions: "4.80 X 4.80" },
      { size: "70 pt", dimensions: "5.15 X 5.15" },
      { size: "75 pt", dimensions: "5.25 X 5.25" },
      { size: "80 pt", dimensions: "5.30 X 5.30" },
      { size: "90 pt", dimensions: "5.50 X 5.50" },
      { size: "1.00 ct", dimensions: "5.70 X 5.70" }
    ],
    smallSizes: [
      { size: "10 pt", dimensions: "2.60 X 2.60" },
      { size: "12 pt", dimensions: "2.80 X 2.80" },
      { size: "15 pt", dimensions: "3.00 X 3.00" },
      { size: "20 pt", dimensions: "3.40 X 3.40" },
      { size: "25 pt", dimensions: "3.60 X 3.60" },
      { size: "30 pt", dimensions: "3.85 X 3.85" },
      { size: "35 pt", dimensions: "4.05 X 4.05" },
      { size: "40 pt", dimensions: "4.25 X 4.25" }
    ]
  },
  heart: {
    name: "Heart",
    tagline: "Unmatched romantic contours with perfect visual balance",
    description: "Incredibly difficult to match, our heart layouts are selected with immaculate lobe curves and cleft depths for custom jewels.",
    largeSizes: [
      { size: "55 pt", dimensions: "5.10 X 5.70" },
      { size: "60 pt", dimensions: "5.25 X 5.85" },
      { size: "70 pt", dimensions: "5.55 X 6.15" },
      { size: "75 pt", dimensions: "5.65 X 6.30" },
      { size: "80 pt", dimensions: "5.80 X 6.50" },
      { size: "85 pt", dimensions: "5.90 X 6.55" },
      { size: "90 pt", dimensions: "6.00 X 6.65" },
      { size: "95 pt", dimensions: "6.10 X 6.80" },
      { size: "1.00 ct", dimensions: "6.25 X 6.95" }
    ],
    smallSizes: [
      { size: "10 pt", dimensions: "3.00 X 3.20" },
      { size: "15 pt", dimensions: "3.30 X 3.60" },
      { size: "20 pt", dimensions: "3.60 X 4.00" },
      { size: "25 pt", dimensions: "4.00 X 4.40" },
      { size: "30 pt", dimensions: "4.20 X 4.65" },
      { size: "35 pt", dimensions: "4.40 X 4.90" },
      { size: "40 pt", dimensions: "4.60 X 5.10" },
      { size: "45 pt", dimensions: "4.75 X 5.30" },
      { size: "50 pt", dimensions: "5.00 X 5.50" }
    ]
  }
};

const renderDiamondShapeSVG = (shape, size = 50, classes = "text-white/80 fill-white/10") => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    className: `${classes} transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]`,
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (shape) {
    case 'emerald':
      return (
        <svg {...commonProps}>
          {/* Outer Border */}
          <polygon points="25,15 75,15 88,28 88,72 75,85 25,85 12,72 12,28" />
          {/* First inner step */}
          <polygon points="30,22 70,22 80,32 80,68 70,78 30,78 20,68 20,32" />
          {/* Second inner step */}
          <polygon points="35,30 65,30 73,38 73,62 65,70 35,70 27,62 27,38" />
          {/* Center Table */}
          <polygon points="40,38 60,38 65,43 65,57 60,62 40,62 35,57 35,43" />
          {/* Corner lines */}
          <line x1="25" y1="15" x2="40" y2="38" />
          <line x1="75" y1="15" x2="60" y2="38" />
          <line x1="88" y1="28" x2="65" y2="43" />
          <line x1="88" y1="72" x2="65" y2="57" />
          <line x1="75" y1="85" x2="60" y2="62" />
          <line x1="25" y1="85" x2="40" y2="62" />
          <line x1="12" y1="72" x2="35" y2="57" />
          <line x1="12" y1="28" x2="35" y2="43" />
        </svg>
      );
    case 'oval':
      return (
        <svg {...commonProps}>
          {/* Outer Oval */}
          <ellipse cx="50" cy="50" rx="42" ry="32" />
          {/* Center Table */}
          <ellipse cx="50" cy="50" rx="20" ry="14" />
          {/* Star and kite facets lines */}
          <path d="M 50,18 C 30,18 20,30 20,50 C 20,70 30,82 50,82 C 70,82 80,70 80,50 C 80,30 70,18 50,18 Z" strokeDasharray="200" strokeDashoffset="0" fill="none" opacity="0.3" />
          {/* Facets Radiating from Table */}
          <line x1="50" y1="18" x2="50" y2="36" />
          <line x1="50" y1="82" x2="50" y2="64" />
          <line x1="8" y1="50" x2="30" y2="50" />
          <line x1="92" y1="50" x2="70" y2="50" />
          <line x1="20" y1="27" x2="36" y2="39" />
          <line x1="80" y1="27" x2="64" y2="39" />
          <line x1="20" y1="73" x2="36" y2="61" />
          <line x1="80" y1="73" x2="64" y2="61" />
        </svg>
      );
    case 'marquise':
      return (
        <svg {...commonProps}>
          {/* Marquise Outer Curve */}
          <path d="M 12,50 Q 50,14 88,50 Q 50,86 12,50 Z" />
          {/* Inner Table */}
          <path d="M 32,50 Q 50,32 68,50 Q 50,68 32,50 Z" />
          {/* Facet lines */}
          <line x1="12" y1="50" x2="32" y2="50" />
          <line x1="88" y1="50" x2="68" y2="50" />
          <line x1="50" y1="14" x2="50" y2="32" />
          <line x1="50" y1="86" x2="50" y2="68" />
          {/* Diagonal facets */}
          <line x1="28" y1="30" x2="41" y2="41" />
          <line x1="72" y1="30" x2="59" y2="41" />
          <line x1="28" y1="70" x2="41" y2="59" />
          <line x1="72" y1="70" x2="59" y2="59" />
        </svg>
      );
    case 'pear':
      return (
        <svg {...commonProps}>
          {/* Pear teardrop contour */}
          <path d="M 50,14 C 28,45 12,68 12,78 C 12,88 28,90 50,90 C 72,90 88,88 88,78 C 88,68 72,45 50,14 Z" />
          {/* Center Table */}
          <path d="M 50,38 C 38,55 28,68 28,74 C 28,80 38,81 50,81 C 62,81 72,80 72,74 C 72,68 62,55 50,38 Z" />
          {/* Rib facets */}
          <line x1="50" y1="14" x2="50" y2="38" />
          <line x1="12" y1="78" x2="28" y2="74" />
          <line x1="88" y1="78" x2="72" y2="74" />
          <line x1="50" y1="90" x2="50" y2="81" />
          <line x1="24" y1="50" x2="36" y2="52" />
          <line x1="76" y1="50" x2="64" y2="52" />
          <line x1="26" y1="86" x2="36" y2="78" />
          <line x1="74" y1="86" x2="64" y2="78" />
        </svg>
      );
    case 'asscher':
      return (
        <svg {...commonProps}>
          {/* Square outer cropped shape */}
          <polygon points="25,15 75,15 85,25 85,75 75,85 25,85 15,75 15,25" />
          {/* Concentric Step 1 */}
          <polygon points="32,23 68,23 77,32 77,68 68,77 32,77 23,68 23,32" />
          {/* Concentric Step 2 */}
          <polygon points="40,32 60,32 68,40 68,60 60,68 40,68 32,60 32,40" />
          {/* Table */}
          <polygon points="45,39 55,39 61,45 61,55 55,61 45,61 39,55 39,45" />
          {/* Diagonal lines through corners */}
          <line x1="15" y1="25" x2="39" y2="45" />
          <line x1="75" y1="15" x2="55" y2="39" />
          <line x1="85" y1="25" x2="61" y2="45" />
          <line x1="85" y1="75" x2="61" y2="55" />
          <line x1="75" y1="85" x2="55" y2="61" />
          <line x1="25" y1="85" x2="45" y2="61" />
          <line x1="15" y1="75" x2="39" y2="55" />
          <line x1="25" y1="15" x2="45" y2="39" />
        </svg>
      );
    case 'princess':
      return (
        <svg {...commonProps}>
          {/* Perfect Square outer */}
          <rect x="15" y="15" width="70" height="70" />
          {/* Center Table Square */}
          <rect x="35" y="35" width="30" height="30" />
          {/* Star facets (diagonals & crosslines) */}
          <line x1="15" y1="15" x2="35" y2="35" />
          <line x1="85" y1="15" x2="65" y2="35" />
          <line x1="15" y1="85" x2="35" y2="65" />
          <line x1="85" y1="85" x2="65" y2="65" />
          {/* Orthogonal splitting facets */}
          <line x1="50" y1="15" x2="50" y2="35" />
          <line x1="50" y1="85" x2="50" y2="65" />
          <line x1="15" y1="50" x2="35" y2="50" />
          <line x1="85" y1="50" x2="65" y2="50" />
          {/* Inner brilliant stars */}
          <line x1="35" y1="35" x2="50" y2="50" />
          <line x1="65" y1="35" x2="50" y2="50" />
          <line x1="35" y1="65" x2="50" y2="50" />
          <line x1="65" y1="65" x2="50" y2="50" />
        </svg>
      );
    case 'radiant':
      return (
        <svg {...commonProps}>
          {/* Rectangular outer with cropped corners */}
          <polygon points="25,18 75,18 85,28 85,72 75,82 25,82 15,72 15,28" />
          {/* Table */}
          <polygon points="38,34 62,34 68,40 68,60 62,66 38,66 32,60 32,40" />
          {/* Brilliant faceting lines radiating */}
          <line x1="15" y1="28" x2="32" y2="40" />
          <line x1="25" y1="18" x2="38" y2="34" />
          <line x1="75" y1="18" x2="62" y2="34" />
          <line x1="85" y1="28" x2="68" y2="40" />
          <line x1="85" y1="72" x2="68" y2="60" />
          <line x1="75" y1="82" x2="62" y2="66" />
          <line x1="25" y1="82" x2="38" y2="66" />
          <line x1="15" y1="72" x2="32" y2="60" />
          {/* Side splits */}
          <line x1="50" y1="18" x2="50" y2="34" />
          <line x1="50" y1="82" x2="50" y2="66" />
          <line x1="15" y1="50" x2="32" y2="50" />
          <line x1="85" y1="50" x2="68" y2="50" />
        </svg>
      );
    case 'cushion':
      return (
        <svg {...commonProps}>
          {/* Rounded Cushion Outline */}
          <path d="M 28,15 C 50,12 50,12 72,15 C 85,18 88,28 85,50 C 88,72 85,82 72,85 C 50,88 50,88 28,85 C 15,82 12,72 15,50 C 12,28 15,18 28,15 Z" />
          {/* Table */}
          <path d="M 38,32 C 50,30 50,30 62,32 C 68,34 70,38 68,50 C 70,62 68,66 62,68 C 50,70 50,70 38,68 C 32,66 30,62 32,50 C 30,38 32,34 38,32 Z" />
          {/* Facets radiating from rounded table */}
          <line x1="20" y1="20" x2="33" y2="33" />
          <line x1="80" y1="20" x2="67" y2="33" />
          <line x1="20" y1="80" x2="33" y2="67" />
          <line x1="80" y1="80" x2="67" y2="67" />
          <line x1="50" y1="13" x2="50" y2="30" />
          <line x1="50" y1="87" x2="50" y2="70" />
          <line x1="13" y1="50" x2="30" y2="50" />
          <line x1="87" y1="50" x2="70" y2="50" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...commonProps}>
          {/* Heart Outline */}
          <path d="M 50,32 C 50,15 20,10 20,38 C 20,62 50,85 50,85 C 50,85 80,62 80,38 C 80,10 50,15 50,32 Z" />
          {/* Table */}
          <path d="M 50,47 C 50,35 32,32 32,50 C 32,64 50,76 50,76 C 50,76 68,64 68,50 C 68,32 50,35 50,47 Z" />
          {/* Facet lines */}
          <line x1="50" y1="32" x2="50" y2="47" />
          <line x1="50" y1="85" x2="50" y2="76" />
          <line x1="20" y1="38" x2="32" y2="50" />
          <line x1="80" y1="38" x2="68" y2="50" />
          {/* Lobe facets */}
          <line x1="33" y1="18" x2="40" y2="39" />
          <line x1="67" y1="18" x2="60" y2="39" />
          <line x1="25" y1="62" x2="36" y2="63" />
          <line x1="75" y1="62" x2="64" y2="63" />
        </svg>
      );
    default:
      return null;
  }
};

const MatchingLayouts = () => {
  const navigate = useNavigate();
  const [selectedShape, setSelectedShape] = useState('emerald');
  const activeShapeData = shapesData[selectedShape];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen text-white pt-32 pb-24 px-4 sm:px-8 lg:px-16 overflow-x-hidden font-sans">
      
      {/* Background visual blur glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#B88A6A]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group text-sm uppercase tracking-widest font-light"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform duration-300 text-lg">←</span> Back
        </button>

        {/* Header Hero Section */}
        <div className="mb-16 md:mb-24">
          <span className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 block font-normal">
            Layouts Collections
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight mb-6 tracking-tight leading-none text-white">
            Matching <span className="text-gray-500 font-light">Layouts</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl font-light max-w-3xl leading-relaxed">
            Precisely calibrated diamond layouts available in multiple shapes and sizes, meticulously matched to exact millimetre and cent tolerances for your jewelry designs.
          </p>
        </div>

        {/* Interactive Shape Selector Grid */}
        <div className="mb-16">
          <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-6 font-semibold">
            Select Diamond Shape Layout
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {Object.keys(shapesData).map((shapeKey) => {
              const isActive = selectedShape === shapeKey;
              return (
                <button
                  key={shapeKey}
                  onClick={() => setSelectedShape(shapeKey)}
                  className={`flex flex-col items-center p-4 rounded-2xl border transition-all duration-500 group ${
                    isActive
                      ? "bg-white/[0.08] border-[#B88A6A] shadow-[0_0_20px_rgba(184,138,106,0.15)] translate-y-[-4px]"
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.06] hover:translate-y-[-2px]"
                  }`}
                >
                  <div className="mb-3 transition-transform duration-500 group-hover:scale-110">
                    {renderDiamondShapeSVG(
                      shapeKey, 
                      42, 
                      isActive ? "text-[#B88A6A] fill-[#B88A6A]/10" : "text-white/40 fill-transparent group-hover:text-white/70"
                    )}
                  </div>
                  <span className={`text-[11px] uppercase tracking-wider font-light transition-colors duration-300 ${
                    isActive ? "text-[#B88A6A] font-medium" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {shapesData[shapeKey].name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Shape Highlights / Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
          
          {/* Left: Info details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-[#B88A6A]/10 border border-[#B88A6A]/20 text-[#B88A6A] text-xs uppercase tracking-widest font-normal inline-block">
              {activeShapeData.name} Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              {activeShapeData.tagline}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              {activeShapeData.description}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Calibration Limit</span>
                <span className="text-white text-sm sm:text-base font-light">± 0.10 MM tolerance</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Clarity & Color Match</span>
                <span className="text-white text-sm sm:text-base font-light">Immaculate color & clarity balance</span>
              </div>
            </div>
          </div>

          {/* Right: Giant Dynamic Shape Artwork */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <div className="absolute w-72 h-72 rounded-full bg-white/[0.02] border border-white/[0.04] animate-pulse pointer-events-none" />
            <div className="relative group cursor-pointer hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-[#B88A6A]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {renderDiamondShapeSVG(selectedShape, 180, "text-white/80 fill-white/[0.02] filter drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]")}
            </div>
          </div>

        </div>

        {/* Interactive Layout Rows Showcase */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 block font-light">
              Layout Rows Visualizer
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4 uppercase">
              Diamond Layout Configuration
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Calibrated layout rows displaying flawless graduation, matching crown angles, identical tables, and seamless color blending.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Row 1: Tapered Symmetrical Layout */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all duration-500 group relative">
              <div className="absolute top-4 left-6 text-white/5 text-4xl sm:text-6xl font-bold uppercase select-none pointer-events-none">
                01
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                    {activeShapeData.name} Diamonds Row 1 
                    <span className="text-xs text-[#B88A6A] font-normal tracking-widest lowercase border border-[#B88A6A]/30 px-2 py-0.5 rounded">Tapered Multi-Stone Layout</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl">
                    Ideal for three-stone settings, five-stone rings, or graduated necklaces with proportional symmetry.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs uppercase tracking-wider block">Calibrated Widths</span>
                  <span className="text-white text-xs sm:text-sm font-normal">7 perfectly graduated stones</span>
                </div>
              </div>
              
              {/* Row 1 visual representation (tapered stones layout) */}
              <div className="flex justify-center items-center py-10 px-4 bg-black/30 border border-white/5 rounded-2xl gap-2 overflow-x-auto min-h-[140px]">
                {[32, 44, 56, 72, 56, 44, 32].map((sizePercent, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center transition-all duration-500 hover:scale-110 cursor-pointer group/stone"
                  >
                    {renderDiamondShapeSVG(selectedShape, sizePercent, "text-white/60 fill-white/[0.03] hover:text-[#B88A6A] hover:drop-shadow-[0_0_12px_rgba(184,138,106,0.5)]")}
                    <span className="text-[9px] text-gray-500 font-light mt-2 opacity-0 group-hover/stone:opacity-100 transition-opacity duration-300">
                      {sizePercent === 72 ? "Center" : sizePercent === 56 ? "Side A" : sizePercent === 44 ? "Side B" : "Side C"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Eternity Layout */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all duration-500 group relative">
              <div className="absolute top-4 left-6 text-white/5 text-4xl sm:text-6xl font-bold uppercase select-none pointer-events-none">
                02
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                    {activeShapeData.name} Diamonds Row 2
                    <span className="text-xs text-[#B88A6A] font-normal tracking-widest lowercase border border-[#B88A6A]/30 px-2 py-0.5 rounded">Eternity Band Layout</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl">
                    Perfect alignment of identical dimensions designed for full eternity rings, tennis bracelets, and luxury watch bezels.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs uppercase tracking-wider block">Calibrated Diameter</span>
                  <span className="text-white text-xs sm:text-sm font-normal">Identical tolerance sorting</span>
                </div>
              </div>

              {/* Row 2 visual representation (Identical eternity layout) */}
              <div className="flex justify-center items-center py-10 px-4 bg-black/30 border border-white/5 rounded-2xl gap-3 overflow-x-auto min-h-[140px]">
                {[50, 50, 50, 50, 50, 50, 50, 50, 50].map((sizePercent, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center transition-all duration-500 hover:scale-115 cursor-pointer"
                  >
                    {renderDiamondShapeSVG(selectedShape, sizePercent, "text-white/60 fill-white/[0.03] hover:text-[#B88A6A] hover:drop-shadow-[0_0_12px_rgba(184,138,106,0.5)]")}
                    <span className="text-[8px] text-gray-500 font-light mt-2 select-none">
                      {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Accent Side-Stones Trilogy */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all duration-500 group relative">
              <div className="absolute top-4 left-6 text-white/5 text-4xl sm:text-6xl font-bold uppercase select-none pointer-events-none">
                03
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                    {activeShapeData.name} Diamonds Row 3
                    <span className="text-xs text-[#B88A6A] font-normal tracking-widest lowercase border border-[#B88A6A]/30 px-2 py-0.5 rounded">Trilogy Setting Layout</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl">
                    A timeless classic configuration displaying a main center-piece bordered by two symmetrically identical accent side-stones.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs uppercase tracking-wider block">Accent Balance Ratio</span>
                  <span className="text-white text-xs sm:text-sm font-normal">Precisely calibrated side proportions</span>
                </div>
              </div>

              {/* Row 3 visual representation (Trilogy layout) */}
              <div className="flex justify-center items-center py-10 px-4 bg-black/30 border border-white/5 rounded-2xl gap-8 overflow-x-auto min-h-[140px]">
                {[45, 80, 45].map((sizePercent, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center transition-all duration-500 hover:scale-110 cursor-pointer group/stone"
                  >
                    {renderDiamondShapeSVG(selectedShape, sizePercent, "text-white/60 fill-white/[0.03] hover:text-[#B88A6A] hover:drop-shadow-[0_0_16px_rgba(184,138,106,0.6)]")}
                    <span className="text-[10px] text-gray-500 font-light mt-2 uppercase tracking-widest group-hover/stone:text-[#B88A6A] transition-colors">
                      {idx === 1 ? "Main Stone" : "Side Accent"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Calibrated Size Charts / Tables */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 block font-light">
              Measurements & Carat weights
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4 uppercase">
              Sizing & Specifications
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Calibrated parameters for jewelry planning. All values represent standard metrics meticulously sorted to high tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Table 1: Larger Layouts */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-white/20 transition-all duration-300">
              <div className="p-6 sm:p-8 border-b border-white/10 bg-white/[0.01] flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-light text-white uppercase tracking-wider">Larger Layouts</h3>
                  <p className="text-xs text-gray-500 mt-1 font-light">Layouts from 24 pt to 1.00 carat</p>
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 uppercase tracking-widest font-light">Carats</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.005]">
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-gray-400">Size (Carats / Points)</th>
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-[#B88A6A]">Length / Width (MM)</th>
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-gray-400 text-right">Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {activeShapeData.largeSizes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                        <td className="p-4 sm:p-5 text-sm sm:text-base font-light text-white group-hover:text-[#B88A6A] transition-colors">{row.size}</td>
                        <td className="p-4 sm:p-5 text-sm sm:text-base font-normal text-white">{row.dimensions} mm</td>
                        <td className="p-4 sm:p-5 text-xs text-gray-500 font-light text-right uppercase tracking-wider select-none">Calibrated</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Smaller Layouts */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-white/20 transition-all duration-300">
              <div className="p-6 sm:p-8 border-b border-white/10 bg-white/[0.01] flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-light text-white uppercase tracking-wider">Smaller Layouts</h3>
                  <p className="text-xs text-gray-500 mt-1 font-light">Layouts from 5 pt to 35 points</p>
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 uppercase tracking-widest font-light">Pointers</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.005]">
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-gray-400">Size (Carats / Points)</th>
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-[#B88A6A]">Length / Width (MM)</th>
                      <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-gray-400 text-right">Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {activeShapeData.smallSizes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                        <td className="p-4 sm:p-5 text-sm sm:text-base font-light text-white group-hover:text-[#B88A6A] transition-colors">{row.size}</td>
                        <td className="p-4 sm:p-5 text-sm sm:text-base font-normal text-white">{row.dimensions} mm</td>
                        <td className="p-4 sm:p-5 text-xs text-gray-500 font-light text-right uppercase tracking-wider select-none">Melee</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Contact Call To Action */}
        <div className="mt-32 p-8 sm:p-16 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 text-center relative overflow-hidden backdrop-blur-md group">
          <div className="absolute inset-0 bg-[#B88A6A]/[0.01] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
          <span className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block font-light">Custom Layout Integration</span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extralight mb-6 text-white tracking-tight uppercase">
            Need a bespoke custom layout?
          </h3>
          <p className="text-gray-400 text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Our master gemologists can curate, calibrate, and pack specialized diamond layouts according to your distinct design requirements.
          </p>
          <button 
            onClick={() => navigate('/Contact')}
            className="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-xl hover:scale-105 transition-all duration-300"
          >
            Inquire With Our Experts
          </button>
        </div>

      </div>
    </div>
  );
};

export default MatchingLayouts;
