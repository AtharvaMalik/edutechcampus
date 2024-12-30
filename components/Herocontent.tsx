import React from 'react';

const HeroContent: React.FC = () => {
    return (
        <div className="HeroContent xl:-mt-40">
            <div className="flex flex-col items-center justify-center">
                <div className="relative flex justify-center">
                    <img 
                        src="Speak.png" 
                        alt="Artboard" 
                        className="xl:mb-0 -z-1 absolute speak"
                    />
                    <div className="HeroHeading text-center">
                        <h1 style={{ fontSize: "5rem", fontWeight: "bold", marginTop: "0" }}>Edutech-Campus</h1>
                    </div>
                </div>
                <h3 className="SubHead text-center p-2">Your Trusted Computer Service Center in Jagadhri</h3>
                <p className="literacy text-center p-2">Digital Literacy , Government Services, Utility Payments, and More</p>
                <button className="text-white text-center font-libre-franklin text-xl leading-tight rounded-lg bg-gray-200 bg-opacity-35 shadow-md py-2.5 px-5 mt-5">
                    Explore Our Services
                </button>
            </div>
        </div>
    );
};

export default HeroContent;
