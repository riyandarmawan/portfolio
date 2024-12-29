import { SocialMediaDataType } from "@/lib/types";
import Link from "next/link";

const SocialMediaLink = ({
  socialMediaDatas,
}: {
  socialMediaDatas: SocialMediaDataType;
}) => {
  return (
    <>
      {socialMediaDatas.map(({ id, icon, link }) => (
        <Link
          key={id}
          href={link}
          className="text-2xl text-primary-400 hover:text-primary-200"
        >
          {icon}
        </Link>
      ))}
    </>
  );
};

export default SocialMediaLink;
