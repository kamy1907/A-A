import React from 'react';
import xIcon from './resources/1691832581twitter-x-icon-png.png'
import facebookIcon from './resources/facebook-logo.png'
import intsagramIcon from './resources/1725819461instagram-logo.png'
import './/style.css'

const Build = () => {
    const FirmName = "AFFIONG'S & ASSOCIATES";
  return (
    <div className=" background px-6 py-10 max-w-screen-xxl pt-40 mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-900 "style={{ textShadow: '0px 0px 8px rgba(255, 255, 255, 1), 0px 0px 15px rgba(255, 255, 255, 1)'}}>Welcome to {FirmName}</h1>
        <p className="text-xl text-center mb-6 text-blue-800" style={{ textShadow: '0px 0px 8px rgba(255, 255, 255, 1), 0px 0px 15px rgba(255, 255, 255, 1)'}}>Your Trusted Partner for Financial Success</p>
        <article className="mb-8 text-gray-700">
            At {FirmName}, we provide professional accounting services that help businesses and individuals navigate complex financial landscapes. Our expert team is committed to delivering accurate, timely, and tailored solutions to ensure your financial success. Whether you're a small business owner or an individual managing your personal finances, we’re here to help.
        </article>
        
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Services we offer</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Bookkeeping Services</h3>
                <p>Accurate, reliable bookkeeping that keeps your finances organized and compliant.</p>
            </div>

            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Tax Preparation</h3>
                <p>Expert tax preparation and planning to minimize your tax liability and maximize your refund.</p>
            </div>

            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Financial Reporting</h3>
                <p>Comprehensive financial reports that provide clear insights into your business’s performance.</p>
            </div>

            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Business Consulting</h3>
                <p>Tailored advice to help your business grow and thrive, from budgeting to financial forecasting.</p>
            </div>

            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Payroll Services</h3>
                <p>Efficient and accurate payroll management to ensure your employees are paid on time and in compliance.</p>
            </div>

            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="font-semibold text-blue-900">Auditing & Assurance</h3>
                <p>Detailed auditing services to help you assess your financial health and ensure transparency.</p>
            </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Why Choose Us</h2>
        <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-2">
                <span className="text-green-600">✔️</span>
                <p>Experienced Professionals: Our team brings years of experience to provide reliable financial guidance.</p>
            </li>
            <li className="flex items-center space-x-2">
                <span className="text-green-600">✔️</span>
                <p>Personalized Service: We work closely with you to understand your needs and create custom solutions.</p>
            </li>
            <li className="flex items-center space-x-2">
                <span className="text-green-600">✔️</span>
                <p>Proven Results: Our clients benefit from our hands-on approach and dedication to their financial growth.</p>
            </li>
        </ul>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 mb-8 block mx-auto hover:shadow-lg ">Schedule a Consultation</button>

        <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Us</h2>
            <p className="text-gray-700 mb-4">Founded in 1999, {FirmName} has established itself as a trusted provider of comprehensive accounting services. We pride ourselves on our client-centric approach and strive to build lasting relationships with every client. Our team consists of highly skilled professionals who are experts in tax laws, accounting principles, and financial strategies.</p>

            <article className="text-gray-700 mb-8">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Mission</h3>
                <p>To empower businesses and individuals with the financial insights and strategies they need to succeed.</p>
                <h3 className="text-xl font-semibold mb-2 mt-4 text-blue-900">Our Vision</h3>
                <p>To be the leading accounting firm recognized for professionalism, integrity, and excellence in client service.</p>
                <h3 className="text-xl font-semibold mb-2 mt-4 text-blue-900">Our Values</h3>
                <ul className="space-y-2">
                    <li>Integrity: We operate with honesty and transparency in all our dealings.</li>
                    <li>Professionalism: We maintain the highest standards of expertise and service.</li>
                    <li>Collaboration: We believe in working together with our clients to achieve their goals.</li>
                </ul>
            </article>

            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-blue-900">What Our Clients Are Saying</h2>
                <p className="italic">“The team at {FirmName} made our tax filing so easy! They saved us money and were incredibly professional.”<br />— [Client Name], Small Business Owner</p>
                <p className="italic mt-4">“I’ve never felt more confident about my financial planning. Thank you for your expert advice and guidance!”<br />— [Client Name], Individual Client</p>
            </div>
            <footer className="mt-8">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Contact Information</h3>
          <p>Email: <a href="mailto:affiongandassociates@gmail.com?subject=Inquiry&body=Hello, I would like more information about your services." className="text-blue-600 hover:text-pink-700">affiongandassociates@gmail.com</a></p>
          <p>Call us at: <a href="tel:+1234567890" className="text-blue-600 hover:text-pink-700">+1 (234) 567-890</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.twitter.com/aas" className="text-blue-500 hover:text-blue-700"><img className='size-10' src={xIcon} alt='twitter-x' /></a>
            <a href="https://www.instagram.com/aas" className="text-pink-500 hover:text-pink-700"><img className='size-10' src={intsagramIcon} alt='instagram' /></a>
            <a href="https://www.facebook.com/aas" className="text-blue-600 hover:text-blue-800"><img className='size-10' src={facebookIcon} alt='facebook' /></a>
          </div>
        </footer>
        </div>
    </div>
  );
}

export default Build;

