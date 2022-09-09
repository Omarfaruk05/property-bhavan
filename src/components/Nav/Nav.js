import React from 'react';

const Nav = ({children}) => {
    return (
        <div>
            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar border-b-2 border-gray-300 shadow-md px-4 md:px-12">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="flex-1 px-2 mx-2 font-semibold text-xl text-black">Propertybhavan</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                        {/* <!-- Navbar menu content here --> */}
                        <li><a>Home</a></li>
                        <li><a>List your Property</a></li>
                        <li><a>Blog</a></li>
                        <li><a>img</a></li>
                        </ul>
                    </div>
                    </div>
                    {/* <!-- Page content here -->
                    Content */}
                    {children}
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Home</a></li>
                    <li><a>List your Property</a></li>
                    <li><a>Blog</a></li>
                    <li><a>img</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;