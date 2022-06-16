import React from 'react';
import ball from '../../assets/football.png';
import { FaBars, FaUsers } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Home = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <div className='flex flex-col items-end justify-right lg:hidden'><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden mr-2"><FaBars className=' text-xl text-center' /></label></div>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-2 overflow-y-auto w-20 bg-black text-base-content gap-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><img className='' src={ball} alt="Ball" /></li>
                        <li className='mx-auto'><CustomLink to='/'><FaBars className=' text-xl text-center' /></CustomLink></li>
                        <li className='mx-auto'><CustomLink to='/FormationOverview'><FaUsers className=' text-xl text-center' /></CustomLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;