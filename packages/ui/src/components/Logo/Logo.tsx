import clsx from "clsx";
import type { FunctionComponent, SVGAttributes } from "react";

type LogoProps = SVGAttributes<SVGElement>;

export const Logo: FunctionComponent<LogoProps> = (props) => {
  const { className, ...rest } = props;
  const finalClassName = clsx(
    "rounded-lg text-neutral-900 ring-2 ring-inset ring-neutral-900 hocus:bg-neutral-200 dark:text-white dark:ring-white dark:hocus:bg-neutral-700",
    className,
  );

  return (
    <svg aria-hidden={true} className={finalClassName} fill="none" viewBox="0 0 512 512" {...rest}>
      <path
        d="M435.04 303.76c4.08 0 6.12 5.52 6.12 16.56 0 6-2.52 13.32-7.56 21.96-5.04 8.4-11.64 16.2-19.8 23.4-7.92 6.96-16.8 12.72-26.64 17.28-9.84 4.56-20.28 6.84-31.32 6.84-10.8 0-19.32-3.48-25.56-10.44-6-7.2-9-15.12-9-23.76 0-8.88 1.44-18.84 4.32-29.88 2.88-11.04 6-22.56 9.36-34.56 9.12-31.92 13.8-54.36 14.04-67.32 0-5.52-.72-9.72-2.16-12.6-1.44-3.12-4.2-4.68-8.28-4.68-7.2 0-14.88 4.32-23.04 12.96-8.16 8.64-15.84 19.68-23.04 33.12-16.56 30.72-25.32 60.72-26.28 90l1.44 10.08c.48 3.36.72 6.96.72 10.8 0 7.68-3.84 14.76-11.52 21.24-7.44 6.24-15.84 9.36-25.2 9.36-5.52 0-9.6-2.64-12.24-7.92-2.64-5.52-3.96-12.24-3.96-20.16s1.8-18.72 5.4-32.4c3.6-13.68 7.56-28.2 11.88-43.56 11.52-40.56 17.4-70.8 17.64-90.72 0-10.08-1.32-18-3.96-23.76-2.4-5.76-7.2-8.64-14.4-8.64-12.96 0-25.8 9.24-38.52 27.72-12.72 18.48-24.12 47.16-34.2 86.04-2.64 10.08-4.68 18.84-6.12 26.28l-.36 6.84c4.56 22.08 6.84 36.48 6.84 43.2 0 13.92-4.92 23.28-14.76 28.08-4.56 2.16-9 4.2-13.32 6.12-4.08 1.92-8.52 2.88-13.32 2.88-12 0-18-11.4-18-34.2 0-23.04 6.36-67.92 19.08-134.64 4.56-24 6.84-37.44 6.84-40.32 0-19.44-4.92-29.16-14.76-29.16-3.36 0-6.48.96-9.36 2.88-2.64 1.92-5.4 3.96-8.28 6.12-2.64 2.16-5.4 4.2-8.28 6.12-2.88 1.92-6.24 2.88-10.08 2.88-3.6 0-5.4-3.24-5.4-9.72 0-13.2 6.12-24 18.36-32.4 11.76-8.64 26.04-12.96 42.84-12.96 21.6 0 34.32 10.08 38.16 30.24.96 6 1.68 12.36 2.16 19.08 17.76-33.36 40.2-50.04 67.32-50.04 29.52 0 46.44 14.16 50.76 42.48 1.44 8.16 2.04 16.92 1.8 26.28v2.88c15.6-21.6 34.08-32.4 55.44-32.4 30.24 0 45.36 18.24 45.36 54.72 0 15.84-2.52 34.44-7.56 55.8-4.8 21.12-8.4 36.36-10.8 45.72-2.16 9.12-3.24 16.2-3.24 21.24 0 9.12 3.12 13.68 9.36 13.68 6.48 0 21.72-12.48 45.72-37.44 4.32-4.8 7.44-7.2 9.36-7.2Z"
        fill="currentColor"
      />
    </svg>
  );
};
