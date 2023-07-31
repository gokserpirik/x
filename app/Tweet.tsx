import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SvgItem } from './SvgItem';
const inter = Inter({ subsets: ['latin'] })



export default function Home({ user, tweet }: {user: {username:string, name:string, profile:string}, tweet: {tweet:string, when:string} }) {
  
    const date1 = new Date();
const date2 = new Date(tweet.when);
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffMinutes = Math.floor(diffTime / (1000 * 60));
const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
let timedif;

if (diffMinutes < 1) {
    timedif = "now";
}
else if (diffMinutes < 60) {
    timedif = diffMinutes + "m";
} else if (diffHours < 24) {
    timedif = diffHours + "h";
} else {
    timedif = diffDays + "d";
}

  return (
    

    <section className='twitter-home-tweet' >
        <div className='rounded-full' >
        <Image
            src={user.profile}
            alt='Twitter Home Tweet'
            width={50}
            height={50}
            className=" rounded-full"
        />
        </div>
          <div className='w-full flex flex-col'>
              <div className='flex flex-row justify-between w-full items-start'>

                <p className='font-bold'>{user.name} <span className=' font-normal opacity-75'> @{user.username} · {timedif}</span></p>      

                <SvgItem className='stroke-2 hover:stroke-blue hover:rounded-full hover:bg-sky-30 ' d={"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"} />
              </div>
              <p>
                {tweet.tweet}

              </p>

                <div className='flex flex-row w-3/4 justify-between items-start mt-2'>
                <SvgItem className='hover:stroke-blue  w-5 h-5 lg:mr-0 ' d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                <SvgItem className='hover:stroke-green lg:w-5 lg:h-5 lg:mr-0' d=" M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                <SvgItem className='hover:stroke-red lg:w-5 lg:h-5 lg:mr-0' d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                
                </div>
                
               

        </div>
  
    </section>
     
  )
}



