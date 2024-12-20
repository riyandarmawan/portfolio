const MagicButton = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="relative inline-flex h-12 overflow-hidden rounded p-[1px]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded bg-primary-950 hover:bg-primary-900 focus:bg-primary-800 px-6 text-sm font-medium text-primary-100 backdrop-blur-3xl">
        {children}
      </span>
    </a>
  );
};

export default MagicButton;
