import * as React from 'react'
import '../css/react-base.css'
import '../css/animations.css';
import '../css/second_section.css';
import '../css/roadmap.css';
import '../css/real_roadmap.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Landing () {
    return (
      <div className="App">
        <Navbar />
        <div className='relative h-full pt-6' style={{backgroundColor: "#1F2633"}}>
          <div className='mt-6 flex h-full flex-col items-center relative'>
              {/* Background */}
              
              <img className='absolute top-24 _md:hidden' src="https://raydium.io/backgroundImages/home-bg-element-1.png"></img>
              {/* FirstSection Content */}
              <div className='first_section relative px-4 sm:px-6 flex flex-col justify-center items-center w-full' style={{height: "1000px"}}>
                {/* Background */}
                <div className="absolute inset-0">
                  <video autoPlay loop muted className="absolute h-full w-full object-cover">
                    <source src="img/hero.webm" type="video/webm"></source>
                  </video>
                </div>
                {/* Staking */}
                <div class="roadmap_card rgb pt-4 px-4 flex flex-col" style={{width: "400px", height: "600px", backgroundColor: "rgba(0,0,0,0.9)"}}>
                    <div className='text-white text-xl font-bold my-5 mb-10 text-center' style={{height: "30px"}}>SUKIW-USDT</div>
                    
                    <div id='devote' className='my-3 flex justify-center tabcontent' style={{height: "450px"}}>
                        <div className='border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                            
                          <div className='grid grid-cols-1 pt-5'>
                                <div className='flex flex-col mr-1'>
                                    <div className='flex flex-row justify-between pb-3'>
                                        <p className='text-white text-sm'>From</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input className='bg-white text-white w-full rounded-l-md text-sm px-3 py-1 border border-gray-700' type='text' placeholder='20000' style={{backgroundColor: "transparent", width: "220px", height:"40px"}}></input>      
                                        <div className='flex flex-row border border-gray-700 rounded-r-lg items-center' style={{width:"100px"}}>
                                            <p className='text-base pl-5 text-white'>UDST</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col ml-1 mt-5'>
                                    <div className='flex flex-row justify-between pb-3 _md:pt-3'>
                                        <p className='text-white text-sm'>To</p>
                                        <p className='text-white text-sm'></p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input className='bg-white text-white w-full rounded-l-md text-sm px-3 py-1 border border-gray-700' type='text' placeholder='0' style={{backgroundColor: "transparent", width: "220px", height:"40px"}}></input>      
                                        <div className='flex flex-row border border-gray-700 rounded-r-lg items-center' style={{width:"100px"}}>
                                            <p className='text-base pl-4 text-white'>SUKIW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row justify-end py-5'>
                                <p className='text-white text-sm pr-2'>Automatic Swap</p>
                                <label className="switch" style={{height: "20px", width: "50px"}}>
                                    <input type="checkbox"></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='flex flex-row justify-end'>
                              <p className='text-white text-sm flex items-center pr-3'>Swap Period</p>
                              <input className='bg-white text-white w-full rounded-md text-sm px-3 py-1 border border-gray-700' type='text' placeholder='5' style={{backgroundColor: "transparent", width: "100px", height:"30px"}}></input>
                              <p className='text-white text-sm flex items-center pl-1'>Minutes</p>
                            </div>

                            <div className='hover:cursor-pointer w-full mt-7 py-3 rounded-md font-bold text-white lorswap_vote text-center'>
                                SWAP
                            </div>
                            <div className='w-full mt-4 py-3 rounded-md text-purple-900 font-bold lorswap_vote text-center' style={{backgroundColor: "white"}}>
                                Change Pair
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* footer */}
        <div className='footer py-12 flex justify-center border border-gray-800'>
          <div className='text-left grid grid-cols- _lg:grid-cols-1 _md:grid-cols-1 _sm:grid-cols-1'>
            <div className='flex justify-start flex-col items-center pt-5'>
              <p className='text-sm text-gray-300 font-bold py-2'>Follow us</p>
              <div className='flex flex-row py-1 justify-start'>
                  <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                  <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                  <a href="https://medium.com/@babybornlabs" target="_blank"><img src="https://app.mopots.io/static/media/medium.88b1df0cd4fba32a91140609053abfce.svg"></img></a>
              </div>
              <div className='text-sm text-gray-400 py-3'>
                  Copyright 2023 SUKIW All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
