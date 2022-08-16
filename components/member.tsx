import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
  bio: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link, bio }) => (
  <div>
    <Image
      src={`/assets/members/${id}.png`}
      alt={name}
      width={1000}
      height={1000}
    />
    <div className="text-4xl xl:text-5xl font-extrabold mt-4">{name}</div>
    <div className="text-2xl xl:text-3xl">
      <Link href={link}>
        <a
          className="text-purple-900 flex justify-center items-center m-5"
          target="_blank"
        >
          <IoLogoInstagram />
          {socialId}
        </a>
      </Link>
      <p>{bio}</p>
    </div>
  </div>
);

export default Member;
