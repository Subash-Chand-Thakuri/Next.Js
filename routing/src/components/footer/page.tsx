import React from "react";

interface FooterProps {
  title: string;
}

function Footer({ title }: FooterProps) {
  return (
    <header className="text-2xl font-bold ">
      <p
        style={{
          backgroundColor: "ghostwhite",
          paddingLeft: "1rem",
        }}
      >
        {title}
      </p>
    </header>
  );
}

export default Footer;
