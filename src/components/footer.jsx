import { Link } from "react-router-dom";

export default function Footer() {
    return (
        // <footer
        //     className="flex flex-col items-center text-center bg-gray-100 drop-shadow-md shadow-md mt-auto"
        // >
        //     <div className="container p-6">
        //         <div className="">
        //             <p className="flex items-center justify-center">
        //                 Hello :wave:
        //             </p>
        //         </div>
        //     </div>

        //     <div
        //         className="w-full p-4 text-center"
        //     >
        //         © 2024 Copyright: Me
        //     </div>
        // </footer> 

        <footer className='flex flex-col items-center mt-auto justify-center bg-green-500 text-white p-6'>
            <div className='mb-2'>
                <Link to='/privacy' className='mr-4 hover:text-green-200 transition-colors duration-300'>Privacy Policy</Link>
                <Link to='/terms' className='hover:text-green-200 transition-colors duration-300'>Terms of Service</Link>
            </div>
            <div>
                © 2024 PranaSync. All rights reserved.
            </div>
        </footer>
        
    )
}