import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a className="text-blue-900 font-bold hover:text-gray-400">
            Hakkımda
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-blue-900 font-bold hover:text-gray-400">
            Projeler
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-blue-900 font-bold hover:text-gray-400">Blog</a>
        </Link>
      </nav>
    </header>
  )
}
