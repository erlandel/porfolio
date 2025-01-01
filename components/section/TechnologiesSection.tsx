import { FluentGlobeDesktop24Filled } from '@/icons/icons'
import React from 'react'
import CarouselFooter from '../carouselTechnoligies/CarouselTechnoligies'
import ImagenCarousel from '../carouselTechnoligies/ImagenCarousel'
import { NameIcons } from '../carouselTechnoligies/NameIcons'

export const TechnologiesSection = () => {
    return (
        <div className='mt-[10rem] mx-4 '>

            <div className="flex items-center justify-center">
                <FluentGlobeDesktop24Filled className="mr-2" />
                <h2 className="text-2xl ">Tecnologías</h2>
               

            </div>

            <div className='mt-10 sm:mt-[5rem] mx-4 '>
                <CarouselFooter images={ImagenCarousel} names={NameIcons} />
            </div>



        </div>
    )
}
