export default function Footer() {
    return(
        <div className=" my-4 max-w-5xl text-sm mx-auto p-6 border-2 border-orange-200 hover:border-orange-500 shadow-md rounded-md hover:scale-105 transition items-center justify-around flex">
            <div className="p-2 border-r-2 pr-12 border-orange-300">
                <p>Home</p>
                <p>Services</p>
                <p>Orders</p>
            </div>
            <div className="p-2 border-r-2 pr-12 border-orange-300">
                <p>About Us</p>
                <p>Mission</p>
                <p>Customer Review</p> 
            </div>
            <div className="p-2">
                <p>Privacy policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}