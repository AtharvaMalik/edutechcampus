import React from 'react';
import Image from 'next/image';
import { TransitionLink } from '@/lib/transitionLink';

const HeroContent: React.FC = () => {
    return (
        <div className="HeroContent xl:-mt-40">
            <div className="flex flex-col items-center justify-center p-1">
                <div className="relative flex justify-center">
                    <Image
                        src="/Speak.png" 
                        alt="Artboard" 
                        className="xl:mb-0 -z-1 absolute speak"
                        width={500}
                        height={500}
                        layout="none"
                    />
                    <div className="HeroHeading text-center">
                        <h1 className="text-6xl heightforedutech xl:leading-tight font-bold mt-8 xl:mt2">Edutech Campus</h1>
                    </div>
                </div>
                <h3 className="SubHead text-center p-10xl mt-2 xl:-mt-2 xl:p-1">Your Trusted Computer Service Center in Jagadhri</h3>
                <p className="literacy text-center xl:mt-1">Digital Literacy , Government Services, Utility Payments, and More</p>
                <div className="mt-5 text-white text-center font-libre-franklin text-xl leading-tight rounded-lg bg-gray-200 bg-opacity-35 shadow-md py-2.5 px-5">
                    <TransitionLink href="/services">
                        Explore Our Services
                    </TransitionLink>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
