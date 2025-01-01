// pages/about.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const About: NextPage = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>About Edutech Campus</title>
                <meta name="description" content="Learn more about Edutech Campus, our mission, and our services." />
            </Head>
            <h1 className="Glow mt-10 xl:mt-9 xl:mb-0 text-white text-center text-6xl font-bold">About Edutech Campus</h1>
            <main className="min-h-screen py-5 px-4">
                <section className="xl:mt-0 max-w-5xl mx-auto bg-gray-200 bg-opacity-20 p-6 shadow-md rounded-lg">
                    
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Welcome to <strong>Edutech Campus</strong>, your trusted Common Service Center (<strong>CSC</strong>) and technology solutions provider. Owned and managed by<strong> Digant Malik</strong>, we are committed to bridging the digital divide by offering a wide range of services tailored to meet your needs.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Located in Jagadhri, we operate from 10:00 AM to 9:00 PM, ensuring accessibility and convenience for our customers. Whether you need assistance with government services, digital payments, or educational resources, Edutech Campus is here to help.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Our mission is to empower individuals and businesses with the tools and knowledge they need to thrive in a digital world. We are proud to provide high-quality services and personalized support to our community.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        At Edutech Campus, we also offer comprehensive computer education programs. From basic computer literacy and typing skills to advanced courses in coding, including Python, Java, HTML, CSS, and web development, we are dedicated to helping you master the digital world.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        We also provide training in video editing and graphic designing. Our courses are designed to help you unleash your creativity and develop professional skills in tools and software used widely in the industry.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        In addition to our educational services, we sell high-quality refurbished laptops. These affordable options are perfect for students, professionals, and anyone looking for reliable computing solutions at a fraction of the cost of new devices.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Contact us today to learn more or visit us during our working hours. You can reach us at:
                    </p>
                    <ul className="text-white text-lg list-disc pl-5 mb-4">
                        <li>Phone: 9813207739</li>
                        <li>Email: <a href="mailto:ecjagadhri@gmail.com" className="text-blue-600 underline">ecjagadhri@gmail.com</a></li>
                    </ul>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Thank you for choosing Edutech Campus. We look forward to serving you and helping you achieve your goals.
                    </p>
                </section>
            </main>
        </>
    );
};

export default About;
