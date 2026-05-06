import React from 'react';

const SectionConnector = () => {
  return (
    <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <defs>
          <linearGradient id="cloudFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
        </defs>

        {/*
          Cloud-bumps path:
          Starts from top-left, draws a series of soft rounded bumps
          using cubic bezier curves, then closes down to bottom.
        */}
        <path
          d="
            M0,40
            C30,40 40,18 80,18
            C120,18 130,35 170,32
            C210,29 230,10 280,10
            C330,10 345,30 390,28
            C435,26 450,8  500,8
            C550,8  560,26 610,24
            C660,22 675,5  730,5
            C785,5  795,24 845,22
            C895,20 910,4  960,4
            C1010,4 1025,22 1075,20
            C1125,18 1140,2  1195,2
            C1250,2  1265,20 1310,18
            C1355,16 1370,0  1440,0
            L1440,80 L0,80 Z
          "
          fill="url(#cloudFill)"
        />
      </svg>
    </div>
  );
};

export default SectionConnector;