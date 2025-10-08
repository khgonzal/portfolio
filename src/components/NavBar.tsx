import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-primary shadow-[0_4px_4px_var(--color-accent)]">
      <div className="text-xl font-serif color-secondary">
        <Link href="/" className="md:hover:text-gray active:text-gray">
          Katherine Gonzalez
        </Link>
      </div>
      <ul className="flex lg:gap-8 md:gap-2">
        <li></li>
        <li className="hidden md:block">
          <Link href="/#projects" className="flex font-sans hover:text-gray py-2">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/#connect"
            className="inline-block bg-secondary text-primary px-2 py-2 rounded-lg md:hover:bg-gray md:transition-colors active:bg-gray cursor-pointer md:font-bold"
          >
            Let&apos;s connect
          </Link>
        </li>
      </ul>
    </nav>
  )
}
