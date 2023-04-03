import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <div className='header'>
        <Link href='/'>Create User</Link>
        <Link href='/about'>Users</Link>
        <Link href='/editUser'>Edit User</Link>
      </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
