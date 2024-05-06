import ArrowIcon from "./ArrowIcon"

export default function Footer() {
    return (
        <ul className="flex flex-wrap gap-4 ">
            <li>
            <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:underline"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/mohanant/"
            >
                <ArrowIcon />
                <p className="h-7 ml-2">linkedin</p>
            </a>
            </li>
            <li>
            <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out hover:underline"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MohananT"
            >
                <ArrowIcon />
                <p className="h-7 ml-2">github</p>
            </a>
            </li>
        </ul>
    )
}