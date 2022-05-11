import React from 'react';

const navigation = {
    products: [
      { name: 'Atlas', href: 'https://stripe.com/atlas' },
      { name: 'Billing', href: 'https://stripe.com/billing' },
      { name: 'Capital', href: 'https://stripe.com/capital' },
      { name: 'Checkout', href: 'https://stripe.com/checkout' },
      { name: 'Climate', href: 'https://stripe.com/climate' },
      { name: 'Connect', href: 'https://stripe.com/connect' },
      { name: 'Corporate Card', href: 'https://stripe.com/corporate-card' },
      { name: 'Elements', href: 'https://stripe.com/elements' },
      { name: 'Financial Connections', href: 'https://stripe.com/financial-connections' },
      { name: 'Identity', href: 'https://stripe.com/identity' },
      { name: 'Issuing', href: 'https://stripe.com/issuing' },
      { name: 'Payments', href: 'https://stripe.com/payments' },
      { name: 'Payouts', href: 'https://stripe.com/connect/payouts' },
      { name: 'Pricing', href: 'https://stripe.com/pricing' },
      { name: 'Radar', href: 'https://stripe.com/radar' },
      { name: 'Revenue Recognition', href: 'https://stripe.com/revenue-recognition' },
      { name: 'Sigma', href: 'https://stripe.com/sigma' },
      { name: 'Tax', href: 'https://stripe.com/tax' },
      { name: 'Terminal', href: 'https://stripe.com/terminal' },
      { name: 'Treasury', href: 'https://stripe.com/treasury' },
    ],
    developers: [
      { name: 'Documentation', href: 'https://stripe.com/docs' },
      { name: 'API Reference', href: 'https://stripe.com/docs/api' },
      { name: 'API Status', href: 'https://status.stripe.com/' },
    ],
    company: [
      { name: 'Customers', href: 'https://stripe.com/customers' },
      { name: 'Enterprise', href: 'https://stripe.com/enterprise' },
      { name: 'Partners', href: 'https://stripe.com/partners' },
      { name: 'Jobs', href: 'https://stripe.com/jobs' },
      { name: 'Blog', href: 'https://stripe.com/blog' },
      { name: 'Newsroom', href: 'https://stripe.com/newsroom' },
      { name: 'Sessions', href: 'https://stripe.com/sessions' },
    ],
    useCases: [
      { name: 'SaaS', href: 'https://stripe.com/use-cases/saas' },
      { name: 'Platforms', href: 'https://stripe.com/use-cases/platforms' },
      { name: 'Marketplaces', href: 'https://stripe.com/use-cases/marketplaces' },
      { name: 'Ecommerce', href: 'https://stripe.com/use-cases/ecommerce' },
      { name: 'Creator Economy', href: 'https://stripe.com/use-cases/creator-economy' },
      { name: 'Crypto', href: 'https://stripe.com/use-cases/crypto' },
      { name: 'Embedded Finance', href: 'https://stripe.com/use-cases/embedded-finance' },
    ],
  }

function Footer(props) {
    return (
        <>
        <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Products</h3>
                <ul role="list" className="mt-4 space-y-1">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Developers</h3>
                <ul role="list" className="mt-4 space-y-1">
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-1">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Use Cases</h3>
                <ul role="list" className="mt-4 space-y-1">
                  {navigation.useCases.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
}

export default Footer;