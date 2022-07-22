import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo.svg" width={18} height={18} alt="logo" />
    <p>&copy; Copyright 2022 Chika & Tatsuya</p>
  </footer>
);
export default Footer;
