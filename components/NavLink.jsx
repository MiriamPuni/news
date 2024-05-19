"use client"

import Link from 'next/link'

const { usePathname } = require("next/navigation")

const NavLink = ({href, text})=>{
    const path = usePathname()
    return <Link href={href}>{text}</Link>
}

export default NavLink