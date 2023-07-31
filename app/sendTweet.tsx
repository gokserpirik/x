import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

import { SvgItem } from './SvgItem'


export default function PostForm() {

    const [postContent, setPostContent] = useState('')
    useEffect(() => {
    }, [postContent])

    const handleSubmit = async (event: FormEvent) => {
        if (postContent === '') return
        event.preventDefault()
        // Submit the post data to the API
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "user": {
                        "username": "bobsmith",
                        "name": "Bob Smith",
                        "profile":
                            "https://images.pexels.com/photos/5732993/pexels-photo-5732993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
                    },
                    "tweet": {
                        "tweet": `${postContent}`,
                        "when": "2022-04-17T20:45:00Z",
                    },
                },
            )
        })
        // Handle the response
        if (res.ok) {
            // Clear the form
            setPostContent('')
        } else {
            // Handle error
        }
    }

    return (
        <section className='twitter-home-tweet  space-x-2 my-5' >
            <div>
                <Image
                    src="https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=2&fit=crop"
                    alt='Twitter Home Tweet'
                    width={55}
                    height={55}
                    className="rounded-full"
                />
            </div>
            <div className='w-full flex flex-col'>


                <input
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                    className=' w-full border-0  focus:outline-none focus:ring-0 focus:border-0 py-4 px-2 pt-1  resize-none overflow-auto text-lg ' placeholder='What is happening?' />

                <div className='flex flex-row w-4/5 lg:w-2/4 sm:w-3/5 justify-between items-start mt-2 '>
                    <SvgItem className='stroke-blue hover:bg-sky-200 stroke-2 hover:rounded-full  lg:w-7 lg:h-7 p-1 lg:mr-0 ' d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    <SvgItem className='stroke-blue hover:bg-sky-200 stroke-2 hover:rounded-full  lg:w-7 lg:h-7 p-1 lg:mr-0 ' d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    <SvgItem className='stroke-blue hover:bg-sky-200 stroke-2 hover:rounded-full  lg:w-7 lg:h-7 p-1 lg:mr-0 ' d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    <div className='flex flex-row items-center bg-blue hover:bg-sky-200 rounded-full text-white text-sm p-1 px-2 lg:mr-0 ' onClick={handleSubmit}>
                        Tweet
                    </div>
                </div>



            </div>

        </section>)


}



