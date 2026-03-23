import type { SVGProps } from "react";
const SvgQueen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m2.327 2.691a3 3 0 1 0-2.654 0L8.506 13.47l-3.44-2.294a3 3 0 1 0-2.874.714L3.969 19l-.628 2.515A2 2 0 0 0 5.28 24h13.438a2 2 0 0 0 1.94-2.485L20.032 19l1.777-7.11a3.001 3.001 0 1 0-2.874-.715l-3.44 2.294zM21 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.28 13 .5-2h12.44l.5 2zm14.122-8.733L18.22 18H5.781l-1.184-4.733 3.848 2.565a1 1 0 0 0 1.491-.48L12 9.847l2.064 5.503a1 1 0 0 0 1.49.481z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQueen;
