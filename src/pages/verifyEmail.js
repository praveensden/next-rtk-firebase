import Link from "next/link";

export default function verifyEmail() {
  return (
    <div>
      <h1>Login Successful</h1>
      
      <div>
        <Link href="/">
          Home
        </Link>
     <Link
          href={{
            pathname: "/blog/[slug]",
            query: { slug: "123" },
          }}
        >
      My Blog Post
              </Link>
              <Link href='/about'>
              About</Link>
              <Link href='/login'>
              Login</Link>
      </div>
    </div>
  );
}