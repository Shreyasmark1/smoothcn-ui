import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Miain Page
      Navigate to components docs <Link href="/docs/components/">here.</Link>
    </main>
  );
}
