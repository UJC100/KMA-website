import Title from './Title';
import { startJourneyCardData } from './demoData';
import AnimateOnScroll from './AnimationOnScroll';



const StartJourney = () => {
    
  return (
        <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 pt-20 pb-50">
            <AnimateOnScroll direction='down' distance={60}>
            <Title
            title='Start Your Mentorship Journey'
            subtitle='Getting started is simple. Follow these three steps.'
            font=''
            align=''
            />
            </AnimateOnScroll>

            <AnimateOnScroll direction='down' distance={60} delay={0.4}>

            <div className='flex flex-col md:flex-row justify-between items-center gap-5 mt-12'>
                {startJourneyCardData.map((data, i) => {
                    const IconComponents = data.icon
                   return (<div key={i} className=' flex flex-col items-center bg-amber-50 rounded-md p-6 shadow-xl cursor-pointer'>

                     
                        <span className=' rounded-full p-2 bg-green-100 mb-3'>
                           <IconComponents className='h-5 w-5  '/>
                        </span>
                        <h2 className='font-playfair text-xl font-bold text-blue-950'>{data.title}</h2>
                        <p className='text-sm text-gray-500 text-center'>{data.subtitle}</p>
                    </div>)
})}
            </div>
            </AnimateOnScroll>
        </div>
    );
};

export default StartJourney;