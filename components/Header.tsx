import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import '../styles/global';

export default function Header({ scrollHandler }) {
  const aboutRef = useRef(null);

  const handleButtonClick = () => {
    scrollHandler();
  };

  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute  carousel-wrapper">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              interval={5000}
              className="carousel custom-carousel"
            >
              <div className="carousel-item">
                <img src="/images/engineCode.png" alt="Image 2" />
              </div>
              <div className="carousel-item">
                <img src="/images/3screens.png" alt="Image 1" />
              </div>
              <div className="carousel-item">
                <img src="/images/codeScreen-2.png" alt="Image 3" />
              </div>
              <div className="carousel-item">
                <img src="/images/wordCloud.png" alt="Image 4" />
              </div>
            </Carousel>

            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide" style={{ color: '#ffd600', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Rogério Camarano - Full Stack Developer
            </p>

            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl" style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.8)' }}>
              <span className="block" style={{ color: '#FFFFFF' }}>Solving problems with</span>
              <span className="block" style={{ color: '#ffd600' }}>clean code!</span>
            </h1>
            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-400 shadow-sm hover:bg-orange-100 sm:px-8"
                onClick={handleButtonClick}
              >
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutRef} id="about" />
    </header>
  );
}
