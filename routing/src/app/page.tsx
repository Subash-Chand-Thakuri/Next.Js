import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </li>
    </ul>
  );
}

export default Home;
