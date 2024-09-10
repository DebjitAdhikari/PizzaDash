function UserLogo({userName}) {
    return (
        <div className='sm:flex hidden flex-wrap items-center gap-3 py-2 px-3 '>
            <div className="relative w-8 h-8 overflow-hidden border-[0.5px] border-slate-600 bg-gray-100 rounded-full dark:bg-gray-400">
                <svg className="absolute w-10 h-10 text-gray-500 -left-[5px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <span className='max-w-[200px] break-words font-mono text-white'>{userName.slice(0,6)}{userName.length>6 && "..."}</span>
        </div>
    )
}

export default UserLogo
