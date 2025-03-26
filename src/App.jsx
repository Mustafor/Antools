import './App.css'
import { Facebook, FolderIcon, Icon, Instagram, LikeIcon, LupaIcon, Twiteer } from './assets/images/Icon'
import Logo from './assets/images/Logo.svg'
import Hero from './assets/images/hero.png'
import Figma from './assets/images/Figma.svg'
import Briliant from './assets/images/Briliant.svg'
import vscode from './assets/images/vscode.svg'
import notion from './assets/images/notion.svg'
import slack from './assets/images/slack.svg'
import invision from './assets/images/invision.svg'
import Microsoft from './assets/images/microsoft.png'
import Google from './assets/images/google.png'
import Slack from './assets/images/slack.png'
import Wordpress from './assets/images/wordpress.png'
import Zeplin from './assets/images/Zeplin.svg'
import Ps from './assets/images/ps.svg'
import toolbox from './assets/images/toolbox.svg'
import Pro from './assets/images/pro.png'
import bro from './assets/images/bro.png'

function App() {
  return (
    <>
      <div className='px-[111px] flex items-center justify-between py-[26px] bg-[#283036]'>
        <a href="/">
          <img className='hover:scale-[1.1] duration-300' src={Logo} alt="logo" width={140} height={38}/>
        </a>
        <ul className='flex items-center justify-center gap-[35px]'>
          <li>
            <a className='text-[16px] font-medium active:scale-[1.1] text-[#FFFFFF8C] hover:text-green-500 duration-300' href="#">Home</a>
          </li>
          <li>
            <a className='text-[16px] font-medium active:scale-[1.1] text-[#FFFFFF8C] hover:text-green-500 duration-300' href="#">Categories</a>
          </li>
          <li>
            <a className='text-[16px] font-medium active:scale-[1.1] text-[#FFFFFF8C] hover:text-green-500 duration-300' href="#">My Collections</a>
          </li>
          <li>
            <a className='text-[16px] font-medium active:scale-[1.1] text-[#FFFFFF8C] hover:text-green-500 duration-300' href="#">Blog</a>
          </li>
        </ul>
        <div className='flex items-center gap-[41px]'>
          <a className='text-[16px] font-bold text-[#FFFFFF8C] hover:text-blue-600 duration-300' href="#">Login</a>
          <button className='w-[118px] py-[8px] bg-[#FF6E30] rounded-md text-white text-[16px] font-bold duration-300 hover:scale-[1.1] border-[2px] border-[#FF6E30]'>Sign Up</button>
        </div>
      </div>
      <div className='bg-[#283036] flex items-center justify-between'>
        <div className='pl-[111px] pt-[104px]'>
          <h2 className='text-[50px] text-white font-bold w-[600px] mb-[30px]'>Awesome tools for
          Designer & Developer.</h2>
          <p className='text-[14px] w-[350px] mb-[60px] text-[#FFFFFF8C]'>Antool is a web collection of information on paid or free Design and Development tools</p>
          <div className='flex items-center gap-[13px] mb-[110px] px-[12px] rounded-lg w-[497px] py-[8px] bg-[#FFFFFF1A]'>
            <LupaIcon/>
            <input className='bg-[#FFFFFF00] outline-none text-[14px] font-medium text-white' type="text" placeholder='find more than 430+ tools...' />
            <button className='w-[130px] py-[12px] ml-[111px] bg-[#FF6E30] rounded-md border-[2px] border-[#FF6E30] text-white text-[14px] font-bold duration-300 hover:bg-transparent hover:text-[#FF6E30]'>Search</button>
          </div>
          <div className='flex gap-[40px]'>
            <a className='hover:scale-[0.9] rounded-md text-white hover:text-blue-500 w-[58px] h-[58px] bg-transparent hover:bg-[#12121226] flex items-center justify-center duration-300' href="#">
            <Facebook/>
            </a>
            <a className='hover:scale-[0.9] hover:w-[58px] hover:h-[58px] rounded-md text-white hover:text-[#C13584] w-[58px] h-[58px] bg-transparent hover:bg-[#12121226] flex items-center justify-center duration-300' href="#">
            <Instagram/>
            </a>
            <a className='hover:scale-[0.9] rounded-md text-white hover:text-blue-500 w-[58px] h-[58px] bg-transparent hover:bg-[#12121226] flex items-center justify-center duration-300' href="#">
            <Twiteer/>
            </a>
          </div>
        </div>
        <img src={Hero} alt="hero" width={589} height={892}/>
      </div>
      <div className='px-[111px] bg-[#283036] py-[100px]'>
        <h2 className='text-[48px] font-bold mx-auto text-white mb-[25px] w-[455px]'>Most Popular Tools</h2>
        <p className='text-[14px] text-[#FFFFFF8C] mb-[90px] w-[427px] text-center mx-auto'>Tools for the best Designers and Developers
        most popularly used in the world</p>
        <ul className='flex flex-wrap items-center mb-[100px] justify-between gap-[20px]'>
          <li className='rounded-md w-[372px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black p-[30px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={Figma} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>FIGMA</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='rounded-md p-[30px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black w-[372px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={Briliant} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Sketch</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Trial & Paid</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='rounded-md p-[30px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black w-[372px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={vscode} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Visual Studio Code</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='rounded-md p-[30px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black w-[372px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={notion} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Notion</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free & Paid</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='rounded-md p-[30px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black w-[372px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={slack} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Slack</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free & Paid</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='rounded-md p-[30px] cursor-pointer hover:shadow-2xl duration-300 hover:scale-[0.9] active:shadow-black w-[372px]'>
            <div className='flex mb-[30px] gap-[30px]'>
              <img src={invision} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Invision</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free & Paid</span>
              </div>
            </div>
            <p className='w-[326px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[78px] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
        </ul>
        <div className='flex items-center justify-center'>
          <button className='w-[184px] bg-transparent rounded-md py-[10px] border-[2px] border-[#FFFFFF1A] text-[#FF6E30] font-bold text-[20px] hover:bg-[#FF6E30] hover:text-white hover:border-[#FF6E30] duration-300'>Load more</button>
        </div>
      </div>
      <div className='px-[111px] py-[100px] bg-[#283036]'>
        <div className='py-[55px] px-[82px] bg-[#2C353D33] rounded-2xl'>
          <h2 className='flex items-center justify-center font-bold text-[24px] mb-[55px] text-white'>Trusted more than 150+ brand</h2>
          <div className='flex items-center justify-between'>
            <img className='cursor-pointer hover:scale-[1.1] duration-300' src={Microsoft} alt="microsoft" width={193} height={42}/>
            <img className='cursor-pointer hover:scale-[1.1] duration-300' src={Google} alt="google" width={157} height={51}/>
            <img className='cursor-pointer hover:scale-[1.1] duration-300' src={Slack} alt="salack" width={194} height={49}/>
            <img className='cursor-pointer hover:scale-[1.1] duration-300' src={Wordpress} alt="wordpress" width={194} height={44}/>
          </div>
        </div>
      </div>
      <div className='px-[111px] py-[100px] bg-[#283036] flex items-center justify-between gap-[130px]'>
        <div>
          <h2 className='font-bold text-[48px] text-[#FFFFFFE5] mb-[30px]'>Newcomer Tools</h2>
          <p className='w-[427px] text-[18px] text-[#FFFFFF8C] mb-[60px]'>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
          <button className='w-[198px] py-[15px] bg-[#FF6E30] border-[2px] border-[#FF6E30] rounded-md text-white text-[18px] font-bold hover:bg-transparent hover:text-[#FF6E30] duration-300 hover:scale-[1.1]'>Explore more</button>
        </div>
        <ul className='flex items-center flex-wrap gap-[24px]'>
          <li className='w-[288px] hover:shadow-2xl duration-300 hover:shadow-black hover:scale-[0.9] active:shadow-white p-[20px] rounded-md'>
          <div className='flex mb-[30px] gap-[30px]'>
              <img src={Zeplin} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Zeplin</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free & Paid</span>
              </div>
            </div>
            <p className='w-[245px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='w-[288px] hover:shadow-2xl duration-300 hover:shadow-black hover:scale-[0.9] active:shadow-white p-[20px] rounded-md'>
          <div className='flex mb-[30px] gap-[30px]'>
              <img src={Ps} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>PHPStorm</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free</span>
              </div>
            </div>
            <p className='w-[245px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='w-[288px] hover:shadow-2xl duration-300 hover:shadow-black hover:scale-[0.9] active:shadow-white p-[20px] rounded-md'>
          <div className='flex mb-[30px] gap-[30px]'>
              <img src={toolbox} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Toolbox</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Free</span>
              </div>
            </div>
            <p className='w-[245px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
          <li className='w-[288px] hover:shadow-2xl duration-300 hover:shadow-black hover:scale-[0.9] active:shadow-white p-[20px] rounded-md'>
          <div className='flex mb-[30px] gap-[30px]'>
              <img src={Pro} alt="figma" width={64} height={64}/>
              <div>
                <strong className='font-bold text-[24px] text-[#FFFFFFC7] block mb-[3px]'>Procreate</strong>
                <span className='text-[18px] text-[#FFA5378C] '>Paid</span>
              </div>
            </div>
            <p className='w-[245px] block text-[14px] text-[#FFFFFF8C] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[25px]'>
                <span className='hover:text-red-500 hover:w-[42px] hover:h-[42px] hover:rounded-md hover:bg-[#12121226] flex items-center justify-center w-[42px] h-[42px] bg-transparent cursor-pointer duration-300 text-[#FFFFFF61]'>
                  <LikeIcon/>
                </span>
                <span className='text-[#FFFFFF61] hover:text-green-500 w-[42px] h-[42px] bg-transparent rounded-md hover:bg-[#12121226] flex items-center justify-center duration-300 cursor-pointer'>
                  <FolderIcon/>
                </span>
                <button className='w-[106px] ml-[] py-[9px] bg-transparent rounded-md border-[2px] border-transparent text-[16px] font-bold text-white hover:border-[#FF6E30] hover:bg-[#FF6E30] duration-300'>Visit</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='px-[111px] py-[100px] bg-[#283036] flex items-center justify-center gap-[57px]'>
        <img src={bro} alt="bro" width={399} height={492}/>
        <div className='w-[398px] relative'>
          <div className='absolute top-[-50px] left-[-50px] z-0'>
            <Icon/>
          </div>
          <p className='text-[#FFFFFFC7] leading-[30px] text-[14px] z-10'>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
        </div>
      </div>
      <div className='px-[111px] py-[100px] bg-[#283036]'>
        <h2 className='flex items-center justify-center font-bold text-white text-[48px] mb-[25px]'>Become a contributor?</h2>
        <p className='w-[427px] mx-auto text-center text-[#FFFFFF8C] text-[18px] mb-[100px]'>Join us and get tips & tricks to become a great Designer and Developer</p>
        <div className='flex items-center gap-[13px] mx-auto mb-[110px] px-[24px] rounded-lg w-[549px] py-[8px] bg-[#FFFFFF1A]'>
            <input className='bg-[#FFFFFF00] outline-none text-[14px] font-medium text-white' type="text" placeholder='Enter your email...' />
            <button className='w-[130px] py-[12px] ml-[190px] bg-[#FF6E30] rounded-md border-[2px] border-[#FF6E30] text-white text-[14px] font-bold duration-300 hover:bg-transparent hover:text-[#FF6E30]'>Join Us</button>
          </div>
      </div>
      <span className='border-b-[2px] bg-[#283036] border-b-[#FFFFFF26] w-[1380px] block'></span>
      <footer className='px-[111px] bg-[#283036] py-[70px] flex justify-between gap-[156px]'>
        <div>
          <a href="/">
            <img className='hover:scale-[1.1] duration-300' src={Logo} alt="logo" width={140} height={38}/>
          </a>
            <span className='text-[16px] font-bold mt-[25px] block text-[#FFFFFFE5] mb-[21px]'>Copyright 2021. Antools</span>
            <p className='w-[260px] text-[#FFFFFF8C] text-[14px]'>Antool is a web collection of information on paid or free Design and Development tools</p>
        </div>
        <ul>
          <strong className='text-[#FFFFFFE5] block text-[20px] font-bold mb-[20px]'>Contact Us</strong>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">+621987463</a>
          </li>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">M Building, No.10 A</a>
          </li>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] hover:text-green-500 duration-300' href="#">antools@awesome.com</a>
          </li>
        </ul>
        <ul>
          <strong className='text-[#FFFFFFE5] block text-[20px] font-bold mb-[20px]'>Categories</strong>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">Design</a>
          </li>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">Development</a>
          </li>
        </ul>
        <ul>
          <strong className='text-[#FFFFFFE5] block text-[20px] font-bold mb-[20px]'>Company Info</strong>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">About Us</a>
          </li>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">Our Partners</a>
          </li>
          <li>
            <a className='text-[#FFFFFF8C] text-[16px] mb-[10px] block hover:text-green-500 duration-300' href="#">Blog</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
