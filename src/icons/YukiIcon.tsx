import React from "react"

const YukiIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70">
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF66CC", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9A3EAB", stopOpacity: 1 }} />
      </linearGradient>
      <text x="0" y="60" font-size="60" font-weight="bold" fill="url(#grad)">
        YUKI
      </text>
    </svg>
  )
}

export default YukiIcon
