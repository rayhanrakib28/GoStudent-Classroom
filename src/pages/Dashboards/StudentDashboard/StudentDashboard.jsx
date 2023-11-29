import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useUserInfo from '../../../hooks/useUserInfo';

const StudentDashboard = () => {
    const [userInfo] = useUserInfo();
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const check = userInfo?.result?.email == email;
    const student = userInfo?.result;
    return (
        <div>
            <div class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div class="-mx-6 px-6 py-4">
                        <a href="/" title="Back To Home">
                            <img src="/logo.svg" class="w-32" alt="tailus logo" />
                        </a>
                    </div>

                    <div class="mt-8 text-center">
                        <img src={photoURL} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{displayName}</h5>
                        <span class="hidden text-gray-400 lg:block">{student?.role}</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">
                        <li>
                            <NavLink
                                to="/user-dashboard/profile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "-mr-1 font-medium px-4 py-3 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-primary to-green-600" : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                                }
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user-dashboard/class"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "-mr-1 font-medium px-4 py-3 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-primary to-green-600" : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                                }
                            >
                                My enroll class
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <Link to="/">
                        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span class="group-hover:text-gray-700">Back To Home</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <div className="drawer w-12 h-16 lg:hidden z-20">
                            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex items-center flex-col">
                                <div className="pt-2">
                                    <div className="flex-none lg:hidden mr-3">
                                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu flex gap-5 capitalize font-bold text-[#3f4563] p-4 w-80 min-h-full bg-slate-100 pt-10">
                                    <li>
                                        <NavLink
                                            to="/user-dashboard/profile"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "-mr-1 font-medium px-4 py-3 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-primary to-green-600" : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                                            }
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/user-dashboard/class"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "-mr-1 font-medium px-4 py-3 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-primary to-green-600" : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                                            }
                                        >
                                            My enroll class
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                        </svg>
                                    </span>
                                    <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                                </div>
                            </div>
                            <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                            </button>
                            <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </button>
                            <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default StudentDashboard;