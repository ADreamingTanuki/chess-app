import type { SVGProps } from "react";
const SvgRook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a4 4 0 0 1-3 3.874V19h1a1 1 0 0 1 .949.684L21.72 22H22a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h.28l.771-2.316A1 1 0 0 1 4 19h1v-8.126A4 4 0 0 1 2 7zm5 7v8h10v-8zM4.387 22h15.226l-.334-1H4.72zM4 5v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5h-2v.5a2.5 2.5 0 0 1-5 0V5h-2v.5a2.5 2.5 0 0 1-5 0V5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRook;
