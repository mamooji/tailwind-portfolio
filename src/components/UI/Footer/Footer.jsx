import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => (
  <footer className="border-t border-ink/15">
    <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-8 py-6 sm:flex-row sm:gap-8">
      <span className="mr-auto font-heading text-[12px] font-semibold uppercase tracking-[0.14em]">
        © 2020 Muhammad Mamooji
      </span>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
