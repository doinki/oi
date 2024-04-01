import { type SVGProps } from 'react';

export function ArrowUpward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
    </svg>
  );
}
