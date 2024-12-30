import React from 'react';
import Image from 'next/image';

const HeroContent: React.FC = () => {
    return (
        <div className="HeroContent xl:-mt-40">
            <div className="flex flex-col items-center justify-center">
                <div className="relative flex justify-center">
                    <Image
                        src="/Speak.png" 
                        alt="Artboard" 
                        className="xl:mb-0 -z-1 absolute speak"
                        layout="fill"
                    />
                    <div className="HeroHeading text-center">
                        <h1 className="text-7xl font-bold mt-7 xl:mt-12">Edutech Campus</h1>
                    </div>
                </div>
                <h3 className="SubHead text-center p-10xl :mt-3 xl:p-1">Your Trusted Computer Service Center in Jagadhri</h3>
                <p className="literacy text-center xl:mt-1">Digital Literacy , Government Services, Utility Payments, and More</p>
                <button className="text-white text-center font-libre-franklin text-xl leading-tight rounded-lg bg-gray-200 bg-opacity-35 shadow-md py-2.5 px-5 mt-5">
                    Explore Our Services
                </button>
            </div>
        </div>
    );
};

export default HeroContent;
