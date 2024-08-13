import React from "react";
import Link from "next/link";

// create new component

function Navbar() {

    return (
        <div className="navbar bg-base-100 px-0 sm:px-1">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl normal-case">
              Bug Bash Party 
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal flex items-center gap-2 sm:gap-4">
             
            </ul>
          </div>
        </div>
    )
}

export default Navbar;