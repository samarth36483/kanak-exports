const InvertedWave = ({ color = "prim_main" }) => {
  return (
    <svg viewBox="0 0 1000 80" className={`bg-${color} fill-text_sec`}>
      <path
        d="M 1000 50 l -182.69 -45.286 l -292.031 61.197 l -190.875 -41.075 l -143.748 28.794 l -190.656 -23.63 l 0 70 l 1000 0 l 0 -50 Z"
        opacity="0.4"
      />
      <path d="M 1000 57 l -152.781 -22.589 l -214.383 19.81 l -159.318 -21.471 l -177.44 25.875 l -192.722 5.627 l -103.356 -27.275 l 0 63.023 l 1000 0 l 0 -43 Z" />
    </svg>
  );
};

export default InvertedWave;