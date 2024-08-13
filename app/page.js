import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Anasayfa</h1>
      <Link href="/order-page"> Click to order page</Link>
    </>
  );
}
