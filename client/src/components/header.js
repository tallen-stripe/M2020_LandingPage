import React from 'react';
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

function Header(props) {
    const demoLinks = [
        {
          name: 'Marketplace',
          href: '#',
          description:
            'This is a demo of a physical goods marketplace similar to Etsy. ',
          image: 'img/marketplace.png',
        },
        {
          name: 'Hotel',
          href: '#',
          description:
            'Rentwell is a Stripe Custom Connect + global payments demo with. It features a rental marketplace similar to AirBnB or Vrbo. There are two personas, the host and renter.',
          image: 'img/hotel.png',
        },
        {
          name: 'Billing',
          href: '#',
          description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
          image: 'img/marketplace.png',
        },
      ]

    return (
    <>
        <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://unsplash.com/photos/xQQShnDWY-Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fGFtc3RlcmRhbXxlbnwwfHx8fDE2NTIyNjA4MzE&force=true"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Live Demos</h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {demoLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-2 inline-block bg-stripe rounded-xl shadow-lg transform -translate-y-1/2">
                  <img src={link.image} style={{height: '200px', width:'300px'}}></img>
                </div>
                <h3 className="text-xl font-medium mt-12 text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Demo<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>);
}

export default Header;