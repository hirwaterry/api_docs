import BlurText from "./BlurText";


const MyComponent = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="flex justify-center items-center text-white">
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-9xl bebas font-extrabold pt-8"
      />
    </div>
  );
};

export default MyComponent;

