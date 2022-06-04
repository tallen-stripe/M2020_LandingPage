import React from 'react';
import Carousel from './carousel';


function Cards(props) {
    const demoLinks = [
        {
          name: 'Marketplace',
          href: 'https://m2020-marketplace.stripedemos.com/',
          description:
            'A Marketplace showcasing the ability to leverage Stripe to build a physical goods marketplace using Express Connect.',
          src: 'img/marketplace.png',
          qr: 'img/qr/marketplace.png'
        },
        {
          name: 'Hotel',
          href: 'https://m2020-hotels.stripedemos.com/',
          description:
            'Showcasing how a hotel or short term rental platform can easily be created using Custom Connect, Payments and Identity.',
          src: 'img/hotel.png',
          qr: 'img/qr/hotel.png'
        },
        {
          name: 'B2B Platform',
          href: 'https://m2020-b2b-platform.stripedemos.com/',
          description:
            'A B2B SaaS platform that allows auto shops to manage their business by creating services, customers, and subscribing customers to services.',
          src: 'img/billing.png',
          qr: 'img/qr/b2b.png'
        },
      ]

    return (
    <>
      <div className="">
        {/* Overlapping cards */}
        <section
          className="mt-32 max-w-7xl mx-auto relative z-10 pb-5 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-21 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {demoLinks.map((link) => (
              <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl img__wrap">
                <div className="flex-1 mb-0 relative pt-16 px-6 pb-2 md:px-8 img__description_wrap">
                    <a href={link.href}><img src={link.src} className='transform -translate-y-1/2 absolute top-0 rounded-2xl shadow-lg' style={{height: '210px', width:'320px'}}></img></a>
                  <h3 className="text-3xl slate font-bold mt-14 text-gray-900">{link.name}</h3>
                  <div className='img__description'>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                  <p className="mt-4 font-bold stripe">Take this demo home:</p>
                  <img className="mx-auto w-[200px] h-[200px]" src={link.qr} />
                  </div>
                </div>
                <div className="p-6 bg-gray-50 stripe rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a href={link.href} className="text-base font-bold text-lg text-indigo-700 hover:text-indigo-600">
                    Click Here For Interactive Demo<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>);
}

export default Cards;