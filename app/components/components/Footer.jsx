import React from 'react'

const Footer = () => {
  return (
 
     
        <footer className="bg-gray-900 text-white p-8 rounded-lg">
          {/* Header with logo and navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Logo section */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative mr-2">
                <div className="bg-lime-300  rounded-full h-10 w-10 flex items-center justify-center">
                  <span className="text-white font-bold text-xl"> <svg
              width="25"
              height="25"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9555 6.03472L35.5135 0.849121L30.3904 18.5001L35.5135 36.1012L17.9555 30.9655L0.347656 36.1012L5.52057 18.5001L0.347656 0.849121L17.9555 6.03472Z"
                fill="black"
              />
            </svg></span>
                </div>
              </div>
              <span className="text-white text-2xl font-bold">Airia</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white">About us</a>
              <a href="#" className="text-gray-300 hover:text-white">Services</a>
              <a href="#" className="text-gray-300 hover:text-white">Use Cases</a>
              <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white">Blog</a>
            </nav>
            
            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="#" className="text-white">
                <div className="rounded-full border border-white h-8 w-8 flex items-center justify-center">
                  <span className="text-sm">in</span>
                </div>
              </a>
              <a href="#" className="text-white">
                <div className="rounded-full border border-white h-8 w-8 flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
              </a>
              <a href="#" className="text-white">
                <div className="rounded-full border border-white h-8 w-8 flex items-center justify-center">
                  <span className="text-sm">t</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Middle section with contact info and subscription */}
          <div className="flex flex-col md:flex-row justify-between mb-8">
            {/* Contact information */}
            <div className="mb-6 md:mb-0">
              <div className="bg-lime-300 text-black font-semibold px-3 py-1 rounded-md inline-block mb-4">
                Contact us:
              </div>
              <div className="space-y-2">
                <p>Email: Pratikkuril@gmail.com</p>
                <p>Phone: 983956909</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
            
            {/* Subscription form */}
          
             
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>
          
          {/* Copyright and policy */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
  <p className="text-gray-400 mb-2 sm:mb-0">© 2025 Airia. All Rights Reserved.</p>
  <div className="flex gap-4">
    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
    <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
  </div>
</div>

        </footer>
  )
}

export default Footer
