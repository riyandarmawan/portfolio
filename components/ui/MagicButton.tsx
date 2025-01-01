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
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-secondary-gradient" />
      <span className="inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded dark:bg-primary-950 bg-primary-50 hover:dark:bg-primary-900 hover:primary-100 focus:dark:bg-primary-200 focus:primary-800 px-6 text-sm font-medium dark:text-primary-100 text-primary-900 backdrop-blur-3xl lg:text-lg">
        {children}
      </span>
    </a>
  );
};

export default MagicButton;
