import { ClipLoader } from "react-spinners";

export default function Loading({ loading }) {
    return (
        <div className="h-dvh w-full grid items-center">
            <div className="mx-auto">
                <ClipLoader 
                    loading={loading}
                    size={50}
                />
            </div>

        </div>
    )
}