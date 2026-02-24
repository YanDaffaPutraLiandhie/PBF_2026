import Link from 'next/link'
export default function profile() {
  return (
    <div>
    <h1>Halaman Profil</h1> <br />
    <Link href="/profile/edit">
           <p >edit profil</p>
        </Link>
        
  </div>
  )
}
