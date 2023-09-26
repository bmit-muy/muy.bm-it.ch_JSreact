import React from "react";

function Footer() {
    const curYear = new Date().getFullYear()
    return(
        <p>
        © {curYear} Müller Yannick
        </p>
    );
}

export default Footer;