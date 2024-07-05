'use client'

import { auth, provider } from "@/firebase"
import { signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowBigRight } from "lucide-react"
import Loading from "@/components/loading"
import { useState } from "react"

export default function LoginPage() {
    
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function login() {
        setLoading(true)
        return signInWithPopup(auth, provider)
            .then (() => {
                router.push('/')
                setLoading(false)
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message

                return console.log(errorCode, errorMessage)
            })
    }

    if( loading ) {
        return <Loading/>
    }

    return (
        <div className="h-dvh w-dvw grid bg-orange-200">
        <div className="bg-white w-2/3 h-2/3 mx-auto my-auto rounded-md shadow-md grid md:grid-cols-2">
            <div className="p-8">
                <h1 className="my-12 font-bold text-xl drop-shadow-md">Express Ship</h1>
                <div className="h-1 border-t border-orange-300 w-2/3 mt-32"></div>
                <p className="my-2 flex items-center">Sign In to Get Started<span className="mx-3"><ArrowBigRight className="bg-orange-300"/></span></p>

            </div>
            <div className="grid items-center border-l border-orange-300">
                <Button 
                    onClick={login}
                    className="px-2 flex mx-auto bg-orange-500 rounded text-white hover:bg-orange-500 hover:scale-105 transition shadow-md"
                >Sign In With Google</Button>

            </div>

        </div>
    </div>
    )
}