import Link from "next/link";

export default function TOC() {
  return (
    <>
      <div id="wd-toc-signature">
        <b>Paturi Siva Sathvik</b>
        <br />
        <i>Build it, break it, fix it.</i>
      </div>
      <ul id="wd-toc">
        <li>
         <Link href="/labs" id="wd-home-link">
          Home
        </Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
         <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
        <li>
          <Link href="https://webdev-client.vercel.app/book/ch1#intro" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="https://github.com/sivasathvik">My GitHub</Link>
        </li>
      </ul>
    </>
  );
}
