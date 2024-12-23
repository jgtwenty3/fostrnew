import { createClient } from "@/utils/supabase/server";

import Image from "next/image"


const Navbar = async () => {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

 
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/icons/search.svg" alt="" width={20} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none text-darkBlue"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/icons/messages.svg" alt="" width={20} height={20}/>
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/icons/announcement.svg" alt="" width={20} height={20}/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-fostrBlue text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
        <span className="text-sm leading-3 font-medium text-fostrBlue">
          {user?.user_metadata.first_name} {user?.user_metadata.last_name}
        </span>
          <span className="text-sm text-fostrBlue text-right">{user?.user_metadata?.role as string}</span>
        </div>
         
      </div>
    </div>
  )
}

export default Navbar