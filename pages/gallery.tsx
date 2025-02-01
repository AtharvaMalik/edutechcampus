import Navbar from "@/components/Navbar"
import Slideshow from '@/components/Slideshow';
import ParticlesBackground from "@/components/ParticlesBackground";
type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  { src: 'night.jpeg', alt: 'Slide 2' },
  { src: 'sir.jpeg', alt: 'Slide 3' },
  { src: 'center.jpeg', alt: 'Slide 1' },

];

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10 ">
        <div className="w-[380px] shadow-2xl ">
          <Slideshow images={images} />
        </div>
      </div>
      <div className='md:opacity-[15%] sm:opacity-20'>            <ParticlesBackground/>
      </div>    </>
  )
}