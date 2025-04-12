import FuzzyText from '@/components/Fuzz';

const NotFoundPage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <span className="text-6xl font-bold">
          <FuzzyText baseIntensity={0.2} hoverIntensity={1} enableHover={true}>
            404
          </FuzzyText>
        </span>
        
        <span className="text-3xl font-semibold">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.8} enableHover={true}>
            not found
          </FuzzyText>
        </span>
      </div>
    );
};

export default NotFoundPage;
