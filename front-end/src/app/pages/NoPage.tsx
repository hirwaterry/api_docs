import FuzzyText from '@/app/components/Fuzz';

const NotFoundPage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <FuzzyText baseIntensity={0.2} hoverIntensity={1} enableHover={true} className="text-6xl font-bold">
          404
        </FuzzyText>
        
        <FuzzyText baseIntensity={0.1} hoverIntensity={0.8} enableHover={true} className="text-3xl font-semibold">
          not found
        </FuzzyText>
      </div>
    );
  };
  
  export default NotFoundPage;