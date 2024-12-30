import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import {useUtils} from '../context/UtilsContext';

function Sidebar() {

    const {isSidebar,mobileShow,setMobileShow}=useUtils();

    const SidebarItems = [{
        groupName: "Home",
        groupItems: [
            {
                id: 1,
                name: "Home",
                icon: <GoHome />
            },
            {
                id: 2,
                name: "Shorts",
                icon: <SiYoutubeshorts />
            },
            {
                id: 3,
                name: "Subscription",
                icon: <MdOutlineSubscriptions />
            },

        ],
    },
    {
        groupName: "You",
        groupItems: [
            {
                id: 1,
                name: "Your channel",
                icon: <GoHome />
            },
            {
                id: 2,
                name: "History",
                icon: <SiYoutubeshorts />
            },
            {
                id: 3,
                name: "Playlists",
                icon: <MdOutlineSubscriptions />
            },
            {
                id: 4,
                name: "Your videos",
                icon: <FaYoutube />
            },
            {
                id: 5,
                name: "Watch Later",
                icon: <SiYoutubestudio />
            },
            {
                id: 6,
                name: "Liked videos",
                icon: <MdOutlineSubscriptions />
            },
        ],
    },
    {
        groupName: "Explore",
        groupItems: [
            {
                id: 1,
                name: "Trending",
                icon: <SiTrendmicro />
            },
            {
                id: 2,
                name: "Shopping",
                icon: <HiOutlineShoppingBag />
            },
            {
                id: 3,
                name: "Music",
                icon: <SiYoutubemusic />
            },
            {
                id: 4,
                name: "Films",
                icon: <PiFilmSlateLight />
            },
            {
                id: 5,
                name: "Live",
                icon: <CgMediaLive />
            },
            {
                id: 6,
                name: "Gaming",
                icon: < SiYoutubegaming />
            },
            {
                id: 7,
                name: "News",
                icon: <FaRegNewspaper />
            },
            {
                id: 8,
                name: "Sport",
                icon: <TfiCup />
            },
            {
                id: 9,
                name: "Courses",
                icon: <SiStylelint />
            },
            {
                id: 10,
                name: "Fashion & Beauty",
                icon: <PiLightbulbLight />
            },
            {
                id: 11,
                name: "Podcasts",
                icon: <MdPodcasts />
            },

        ],
    },
    {
        groupName: "More From Youtube",
        groupItems: [
            {
                id: 1,
                name: "Youtube Premium",
                icon: <FaYoutube />
            },
            {
                id: 2,
                name: "Youtube studio",
                icon: <SiYoutubestudio />
            },
            {
                id: 3,
                name: "Youtube Music",
                icon: <SiYoutubemusic />
            },
            {
                id: 4,
                name: "Youtube Kids",
                icon: <SiYoutubekids />
            },

        ],
    },
    ]

    const ModelOverlay=()=>{
        return(
            <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30' onClick={()=> setMobileShow(!mobileShow)}>

            </div>
        )
    }
    return (
        <>
             <div className={`${mobileShow ? 'fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[25%] sm:-w-[30%]'
                :'hidden h-[calc(100vh-6.625rem)] w-[18%]'
                } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-hidden scrollbar-thin`}>
            <div className='space-y-3 items-center'>
                {
                    SidebarItems.map((group) => {
                        return (
                            <div className='mb-5'>
                                <h1 className='font-bold'>{group.groupName}</h1>
                                {
                                    group.groupItems.map((item) => {
                                        return (
                                            <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3'>
                                                <div className='text-sm cursor-pointer'>{item.icon} </div>
                                                <span className='text-sm cursor-pointer'>{item.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            <br />
            <span className='text-xs font-semibold text-gray-500'>About Press Copyright <br />Contact us Creator <br />Advertise Developers<br />
                <p>Terms Privacy Policy & Safety<br />How YouTube works <br />Test new features</p></span>
            <br />
            <p className='text-xs text-gray-800 mt-1'>© 2024 Google LLC</p>
        </div>

        {mobileShow? <ModelOverlay /> : null}
        </>
        
    );
}

export default Sidebar;