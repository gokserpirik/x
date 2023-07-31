"use client";

import { Inter } from 'next/font/google'
import Tweet from './Tweet'
import {  useState, useEffect } from 'react'
import SendTweet from './sendTweet'



const inter = Inter({ subsets: ['latin'] })

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}


export default function Home() {
  const [posts, setPosts] : any = useState([])

  useEffect(() => {
    async function fetchPosts() {

      // deleting this code ONLY FOR GITHUB
     // const res = await fetch('/api/posts')
     // const data = await res.json()
     // setPosts(data)

     /* uses static JSON instead of a MongoDB server for gh-pages */
     const res = await fetch('/x/posts.json')
      const data = await res.json()
      setPosts(data)
      console.log(posts.length)

    }
    fetchPosts()
    
  }, [])


  
  return (
    

    <section className='twitter-home '>
      <div className=' font-bold text-2xl text-black flex text-left w-full p-5 border-b-2 border-gray-light '>
      Home
      </div>
       
      <SendTweet /> 

      { posts.length > 0 &&
       shuffleArray(posts).map((tweet : any, index : number) => {
       /*  const tweeti = JSON.parse(tweet.content) */
        const tweeti = tweet.content
        return <Tweet key={index} user={tweeti.user} tweet={tweeti.tweet} />;
      })

      }
      
  </section>
     
  )
}





