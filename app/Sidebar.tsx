"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SvgItem } from './SvgItem';
const inter = Inter({ subsets: ['latin'] })
import { usePathname } from 'next/navigation';


export default function Sidebar() {
  const pathname = usePathname();
  interface MenuItem {
    name: string;
    icon: string;
    route?: string;
  }

  const sidebarItems: MenuItem[] = [ 
    { route:"/",name: 'Home', icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
    { route:"/explore" ,name: 'Explore', icon: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" },
    {name: "Notifications", icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"},
    {name: "Messages", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"},
    {name: "Bookmarks", icon: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" },
  ]

 


  return (
    <section className="twitter-sidebar">
      <div className=' flex flex-col items-center space-y-0 lg:items-start '>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="twitter-logo">
        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
        </svg>

      {sidebarItems.map((item, index) => (
        <section
          className={`twitter-sidebar-item stroke-2  ${pathname === item.route ? 'font-bold stroke-2' : ''}`}
          key={index}
        >
         <SvgItem className='lg:w-7 lg:h-7' d={item.icon} />

          <div className='hidden lg:block'>{item.name}</div>
        </section>
      ))}
      </div>

        <section className="twitter-sidebar-item text-base space-x-2   lg:w-52 lg:p-2 justify-between stroke-2 ">
          <Image
            src="https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=2&fit=crop"
            alt="Picture of the author"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className='flex-1 hidden lg:block'>
            <h1 className=' font-semibold'>X</h1>
            <h2 className='text-sm font-light  opacity-75'>@x</h2>
          </div>
          
          <SvgItem className='hidden lg:block ' d={"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"} />

        </section>
    </section>
  );
}


