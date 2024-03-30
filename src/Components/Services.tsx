import React from 'react'
import Dash from './Dash'
import ServiceCard from './ServiceCard'

const ServicesData = [
    {
        img: '/services__1.png',
        title: 'Professional Kitchen',
        desc: 'Lorem iPsum dolor sit amet Consectetur'
    },
    {
        img: '/services__2.png',
        title: 'Professional Kitchen',
        desc: 'Lorem iPsum dolor sit amet Consectetur'
    },
    {
        img: '/services__3.png',
        title: 'Professional Kitchen',
        desc: 'Lorem iPsum dolor sit amet Consectetur'
    },
    {
        img: '/services__4.png',
        title: 'Professional Kitchen',
        desc: 'Lorem iPsum dolor sit amet Consectetur'
    },
]

const Services = () => {
  return (
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-accent'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Choose Best <span className='text-accent'>Service</span>
            </h2>
            <p className='text-gray-700'>
            Lorem iPsum dolor sit amet Consectetur <br />
            quidem esse eum amimal
            </p>
            <div className='w-fit mx-auto'>
                <Dash />
            </div>
        </div>

        <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>
             {ServicesData.map((item, index) => ( <ServiceCard
             key={index} 
             img={item.img} 
             title={item.title} 
             desc={item.desc} />
             ))}
        </div>
    </div>
  )
}

export default Services