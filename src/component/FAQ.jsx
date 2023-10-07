import React from 'react'
import Accordion from './Accordion';


const FAQ = () => {
   const items = [
    {
      id: 'l2kj5',
      label: '1. What is special about comparing rental car deals?',
      content:
       'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies',
    },
    {
      id: 'lk2j35lkj',
      label: '2. How do I find the car rental deals?',
      content:
        'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions',
      
    },
    {
      id: 'l1kj2i0g',
      label: '3. How do I find such low rental car prices?',
      content:
       'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
    },
  ];
  return (
    <div className=' w-11/12 md:w-9/12 font-pop mx-auto py-10'>
        <div className="mx-auto items-center text-center  pb-10 flex flex-col gap-3">
                    <h3 className="text-sm tracking-wide font-pop  text-secondary-200 uppercase">FAQ</h3>
        <h3 className="text-xl md:text-3xl  tracking-wide font-pop font-bold text-secondary-200 ">Frequently Asked Questions</h3>
                    <p className="text-sm font-pop text-secondary-400 md:w-1/2 ">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>


      </div>
      

      <Accordion items={items}/>
    
    </div>
  )
}

export default FAQ
