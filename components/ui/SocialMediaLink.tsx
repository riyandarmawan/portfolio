const SocialMediaLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a href={href} className="text-2xl text-primary-400 hover:text-primary-200">
      {icon}
    </a>
  );
};

export default SocialMediaLink;
