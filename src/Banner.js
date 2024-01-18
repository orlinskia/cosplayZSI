import './Banner.css'
import banner1 from './img/banner/banner1.png'
import banner2 from './img/banner/banner2.png'
import banner3 from './img/banner/banner3.png'
import { Carousel } from 'react-bootstrap'

let Banner = () => {
    return(
        
        <div className="Banner">
            <Carousel className='w-75 mx-auto' touch='true'>
                <Carousel.Item interval={3000}>
                    <img className = "bannerImage" src={banner1}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className = "bannerImage" src={banner2}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className = "bannerImage" src={banner3}/>
                </Carousel.Item>
            </Carousel>

    </div>
        
    )
}

export default Banner;