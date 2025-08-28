export default function Navbar() {
  return (
    <nav className="p-6 bg-gray-800 text-white">
      <a href="/" className="site-title">Site Name</a>
      <ul>
        <li>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  )
}