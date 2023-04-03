import { useRouter } from 'next/router'

// if we navigate to localhost:3000/blog/123...
export default function BlogPost() {
  const router = useRouter()
  console.log(router.query)
  const { asPath } = router

  return <p>Post: {asPath}</p> // ...you'll see "Post: 123"
}