import Link from 'next/link'

type Props = {
    icon: JSX.Element,
    text: string,
    route: string,
}

export default function NavbarSelect({icon, text, route}: Props) {
    const fullRoute = `/${route}`
    return (
        <Link href={fullRoute} className="text-black">
            <div className="flex flex-col items-center">
                {icon}
                <p>{text}</p>
            </div>
        </Link>
    )
}