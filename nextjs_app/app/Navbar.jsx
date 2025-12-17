import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div>Navbar</div>

            <nav className="flex gap-4 bg-red-500 p-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/service">Service</Link>
            </nav>

        </div>
    )
}

export default Navbar
