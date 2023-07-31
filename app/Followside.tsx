import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SvgItem } from './SvgItem'
const inter = Inter({ subsets: ['latin'] })

const trending = [  {    "category": "Turkey",    "tag": "#Elazığ",    "tweetVolume": 3274  },  {    "category": "Politics",    "tag": "#Election2022",    "tweetVolume": 12845  },  {    "category": "Technology",    "tag": "#AppleEvent",    "tweetVolume": 98521  },  {    "category": "Sports",    "tag": "#ChampionsLeague",    "tweetVolume": 37284  },  {    "category": "Entertainment",    "tag": "#Oscars2023",    "tweetVolume": 7638  },  {    "category": "Food",    "tag": "#VeganRecipes",    "tweetVolume": 6349  },  {    "category": "Travel",    "tag": "#BeachVacation",    "tweetVolume": 1289  },  {    "category": "Fashion",    "tag": "#FallFashion",    "tweetVolume": 2743  },  {    "category": "Fitness",    "tag": "#WorkoutMotivation",    "tweetVolume": 9826  },  {    "category": "Books",    "tag": "#NewRelease",    "tweetVolume": 563  }]


export default function Followside() {
  return (
    

      <section className='hidden xl:twitter-followside '>
        <section className='bg-gray-light rounded-full flex flex-row w-5/6 px-4 py-2 items-center '>
            <SvgItem d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            <div className='flex-1 '>
            <input  className=' border-0 bg-gray-light focus:outline-none focus:ring-0 focus:border-0  resize-none overflow-auto ' placeholder='Search Twitter' />
            </div>
        </section>
        <section className='bg-gray-light flex flex-col w-5/6 rounded-2xl '>
          <div className='font-bold p-2 text-lg px-4 '>Trends for you</div>
          <section >
            {trending.map((item, index) => (
                <section key={index} className='flex flex-row w-full items-start justify-between hover:bg-gray-300 px-4 py-2'>
                    <div className=' text-left'>
                        <p className=' font-light text-sm'>{item.category} - Trending</p>
                        <p className='font-bold'>{item.tag}</p>
                        <p className='font-light text-sm'>{item.tweetVolume} Tweets</p>

                    </div>
                    <div>
                        <SvgItem className='hover:stroke-blue hover:rounded-full hover:bg-sky-300' d={"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"}  />
                    </div>
                </section>
            ))} 
          </section>
        </section>
    
      </section>
     
  )
}


