import { socialMediasInfo } from "@/constants/socialMediasInfo";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute min-w-full top-0 p-4 bg-white">
      <div className="flex flex-row items-center sm:justify-end justify-evenly gap-10">
        {socialMediasInfo.map((item) => (
          <Link href={item.link} target="_blank">
            <Image src={item.photo} alt={item.media} width={20} height={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
