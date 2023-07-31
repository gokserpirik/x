export const SvgItem = ({ d , className }: { d: string, className?: string }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={"w-6 h-6 lg:w-5 lg:h-5 lg:mr-2 " + className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
  )