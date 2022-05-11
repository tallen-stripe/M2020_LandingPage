import React from 'react';

function Carousel(props) {

    const isFirst = (index)=>{
        if (index==0){
            return "active"
        }
    }
    return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
            {props.slides.map((slide, index) => (
            <div key={slide.name} className={"carousel-item relative float-left w-full " + isFirst(index)}>
            <a href={slide.href}>
                <img
                    src={slide.src}
                    className="block w-full"
                    alt="..."
                />
            </a>
            {/* <div className="carousel-caption hidden md:block mb-20 absolute text-center rounded-lg bg-slate-400/50">
                <h5 className="text-xl">{slide.name}</h5>
                <p>{slide.description}</p>
            </div> */}
            </div>
            ))}
            
        </div>
        <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>);
}

export default Carousel;