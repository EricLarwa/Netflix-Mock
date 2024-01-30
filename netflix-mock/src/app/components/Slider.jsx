import React from "react"; 
import Slider from 'react-slick';

const Section = ({title, series}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    }

    return (
        <div className="section">
            <h2 className="title">{title}</h2>
            <Slider {...settings}>
                {series.map((serie) => (
                    <div key = {serie.id} className="serie">
                        <img src={serie.image} alt={serie.title} />
                        <p>{serie.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )

}

export default Section;