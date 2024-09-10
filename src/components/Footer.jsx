function Footer() {
    return (
        <div>
        <footer className="bg-[#484848] min-h-[80px] text-white px-3 py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm sm:text-lg font-light tracking-wide ">&copy; 2024 Debjit Adhikari. All rights reserved.</p>
            <ul className="text-xs sm:text-sm mt-2 mx-auto flex flex-wrap max-w-[500px] justify-center gap-1">
            <li className="text-gray-400 hover:text-white cursor-pointer mx-2">Privacy Policy</li>
            <li className="text-gray-400 hover:text-white cursor-pointer mx-2">Terms of Service</li>
            <li className="text-gray-400 hover:text-white cursor-pointer mx-2">Contact Us</li>
            </ul>
        </div>
        </footer>
        </div>
    )
}

export default Footer
