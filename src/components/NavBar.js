import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((item, i) => <a key={i} href={`#${item}`}>{item}</a>)}
    </nav>;
}

export default NavBar;
