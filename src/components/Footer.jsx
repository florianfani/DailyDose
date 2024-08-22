import React from "react";

function Footer() {
  return (
    <div className="bg-slate-200 w-full py-5 flex justify-center left-0 bottom-0 right-0">
      <span>
        Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.
      </span>
    </div>
  );
}
export default Footer;
