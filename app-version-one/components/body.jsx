import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { UserTab } from "./user-tab";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default function Body({ userName, photoURL }) {
    const router = useRouter;
   
    const logout = async () => {
        signOut(auth).then(() => {
            router.push('auth/login')
          }).catch((error) => {
            // An error happened.
          });
    }
      
    return (
        <div className=" max-w-5xl mx-auto p-10 pt-20">
            <div className="flex gap-4">
                <div className="h-[10rem]">
                    <div className="border-2 p-6 border-gray-200 rounded-md shadow-md">
                        <div>
                        <Avatar className="h-full w-full">
                            <AvatarImage src={photoURL} />
                        </Avatar>
                        </div>
                        <div className="my-4 flex-col border-b border-orange-400 py-4">
                            <h1 className="my-3 mx-auto font-semibold">{userName}</h1>
                            <Button className="bg-orange-500 text-white hover:bg-orange-500 rounded hover:bg-orange-500 hover:scale-105 transition"
                            onClick={logout}>Log Out</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-1">
                    <UserTab/>
                </div>
            </div>
        </div>
    )
}