import React from 'react';

function Header() {
    return (<>
        <div className="">
        <div className="grid grid-cols-2 max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <img src='img/connect.svg' className="h-[100px]" />
            <div>
                <p className="mt-1 text-4xl ml-[-400px] pt-2 font-extrabold slate sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Connect Demos
                </p>
                <p className='mt-1 pl-5 ml-[-400px] font-medium slate  sm:tracking-tight '>
                    The fastest and easiest way to integrate payments into your software platform or marketplace.
                </p>
            </div>
        </div>
        </div>
    </>);
}

export default Header;