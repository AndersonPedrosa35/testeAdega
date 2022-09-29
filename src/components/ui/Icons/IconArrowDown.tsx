interface Props {
  className: string
  state?: boolean
  stroke?: string
}

const IconArrowDown = ({
  state = false,
  className,
  stroke = '#72537D',
}: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ?? ''} ${state ? `${className}--active` : ''}`}
    >
      <path
        d="M7 10L12 15L17 10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconArrowDown
