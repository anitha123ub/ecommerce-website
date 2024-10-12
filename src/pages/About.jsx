import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>


      </div>
      <div className='my-10 flex flex-col md:flex-row gap'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quam dolorem minus repellat eos sint quae minima facere asperiores laudantium? Itaque reiciendis numquam exercitationem cum.</p>
           <p> Adipisci sapiente! Dicta asperiores, eveniet repellendus voluptas totam explicabo voluptate unde perferendis amet impedit nobis assumenda? Dignissimos laborum dolorem libero incidunt impedit officia at hic non ab sequi!</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>We will also make products collection page to display all products added on this online shopping website. On this product collection page we will create product filter, product sort and product search features also.</p>

           </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Then we will create the product page where it will display product image gallery, title, price, description, add to cart button and Related products. After that we will create Place Order page, Cart page, My Order List page, About Page, Contact Page, Login and Signup page.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum, quos, sed ad aut, eum odit facilis voluptate quaerat officiis in eveniet explicabo id. Officiis quidem nisi cumque itaque temporibus?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>After completing this ecommerce website for customers, we will create the website for admin. Where admin can add new products on website, list and delete the products, display and update the orders.</p>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
