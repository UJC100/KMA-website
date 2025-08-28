import AnimateOnScroll from '../AnimationOnScroll';


interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
  flip?: boolean;
}


const PhotoText = ({flip = false, image, title, description}: HeroSectionProps) => {
  return (
        <div className={`flex flex-col-reverse md:flex-row items-center bg-[#f6f4f0]  ${
        flip ? 'md:flex-row-reverse ' : ''
      }`}>
        <img src={image} alt={title} className='object-cover w-full md:w-1/2 h-[400px] md:h-[700px] bg-black/50' />
         <AnimateOnScroll
          direction="zoom"
          scaleLevel={0.7}
          className="flex flex-col justify-center items-start md:text-left w-full md:max-w-1/2 px-10 py-5 md:py-5">
        <h1 className="text-5xl md:text-6xl mb-8 font-light">{title}</h1>
        <p className="text-lg font-extralight ">{description}</p>
      </AnimateOnScroll>
        </div>
    );
};

export default PhotoText;