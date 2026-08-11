import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function GithubIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.204c0 4.497 2.865 8.31 6.839 9.657.5.095.683-.223.683-.494 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.363-3.369-1.363-.455-1.185-1.11-1.501-1.11-1.501-.908-.635.069-.622.069-.622 1.004.072 1.532 1.055 1.532 1.055.892 1.564 2.341 1.112 2.91.851.091-.661.35-1.112.636-1.368-2.221-.259-4.556-1.138-4.556-5.066 0-1.119.39-2.033 1.03-2.751-.103-.26-.446-1.304.098-2.719 0 0 .84-.276 2.75 1.051A9.44 9.44 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.327 2.747-1.051 2.747-1.051.546 1.415.203 2.459.1 2.719.64.718 1.028 1.632 1.028 2.751 0 3.938-2.339 4.804-4.567 5.058.359.317.68.94.68 1.897 0 1.369-.012 2.472-.012 2.808 0 .273.181.594.688.493C19.138 20.51 22 16.699 22 12.204 22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25Zm7.6 0h4.31v2.02h.06c.6-1.13 2.06-2.33 4.24-2.33 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.63c0-1.58-.03-3.62-2.2-3.62-2.21 0-2.55 1.72-2.55 3.5V23h-4.5V8.25Z" />
    </svg>
  );
}

export function XIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.7L4.1 22H1l8.1-9.3L.9 2H8.2l5.1 6.2L18.9 2Zm-1.2 18h1.9L6.4 4H4.4l13.3 16Z" />
    </svg>
  );
}
