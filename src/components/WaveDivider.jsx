export default function WaveDivider({ fromColor = 'text-gray-950', toColor = 'text-gray-900' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${toColor}`}>
      <svg viewBox="0 0 1440 100" className="w-full block" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  )
}
