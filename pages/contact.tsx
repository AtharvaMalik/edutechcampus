// pages/contact.tsx
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';
import ParticlesBackground from "@/components/ParticlesBackground";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us - Edutech Campus</title>
                <meta name="description" content="Get in touch with Edutech Campus for any inquiries or support." />
            </Head>
            <Navbar/>
            <ParticlesBackground/>

            <main className="min-h-screen py-8 px-4 text-white">
                <h1 className="Glow mt-5 xl:mt-2 xl:mb-0 text-center text-3xl xl:text-6xl font-bold">Contact Us</h1>

                <section className="mt-3 xl:mt-4 max-w-5xl mx-auto bg-gray-200 bg-opacity-20 p-6 shadow-md rounded-lg">
                    <p className="text-lg leading-relaxed mb-6 text-center">
                        We value your questions and feedback. Please feel free to reach out to us through the following contact details or by filling out the contact form below.
                    </p>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2 text-center xl:mt-16 ">Contact Details</h2>
                        <ul className="text-lg list-disc xl:mt-3 max-w-5xl mx-auto bg-white bg-opacity-10 p-6 shadow-md rounded-lg">
                            <div className="Glow text-left p-1 tshadow-lg">
                                <p>Phone: 9813207739</p>
                                <p>Email: <a href="mailto:ecjagadhri@gmail.com" className="text-blue-600 underline">ecjagadhri@gmail.com</a></p>
                                <p>Address: School Road, Jagadhri</p>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
                        <form className="space-y-4" action="mailto:ecjagadhri@gmail.com" method="post">
                            <div>
                                <label htmlFor="name" className="block font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-black w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-black"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="text-black focus:text-black w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-medium">Message</label>
                                <textarea
                                    id="message"
                                    className="text-black focus:text-black w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                    rows={5}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
