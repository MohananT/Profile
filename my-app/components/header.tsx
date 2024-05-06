import ThemeSwitch from "@/app/theme-switch"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="">
            <div className="float-left">
                <div className="grid grid-cols-2 gap-2 mt-5 mb-5">
                    <div className="text-md opacity-75 hover:opacity-100  transition duration-200">
                        <Link href="/">home</Link>
                    </div>
                    <div className="text-md opacity-75 hover:opacity-100">
                        <Link href="/contact">contact</Link>
                    </div>
                </div>
            </div>
            <div className="float-right">
                <div className="mt-5 mb-5">
                    <ThemeSwitch />
                </div>

            </div>
        </nav>
    )
}