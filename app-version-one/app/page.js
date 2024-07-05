'use client'

import Body from "@/components/body";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import NavBar from "@/components/nav-bar";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const [photoURL, setPhotoURL] = useState('')
  const router = useRouter()

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) =>{
      if ( user ) {

        router.push('/')
        const user = auth.currentUser
        const uid = user.uid
        const photoURL = user?.photoURL
        setUserName(user.displayName || user.email || "User")
        setPhotoURL(photoURL)

      } else {
        router.push('/auth/login')
      }

      setLoading(false)
      
    })

    return () => unsubscribe()

  }, [router])
  
  if(loading) {
    return <Loading loading={loading} />
  }

  return (
    <div className="">
      <NavBar photoURL={photoURL}/>
      <Body userName={userName}
        photoURL={photoURL}/>
      <Footer/>
    </div>
  )
}
