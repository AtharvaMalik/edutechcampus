// pages/services.tsx
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const services = [
  "आधार से पेमेंट",
  "पैसा निकालना",
  "पैसा भेजना",
  "ए टी एम सुविधा",
  "पैन कार्ड 2.0 आवेदन व सुधार",
  "उद्यम रजिस्ट्रेशन व सुधार",
  "सभी प्रकार का बीमा हैल्थ/गाड़ी/लाइफ",
  "कारों के फास्टैग",
  "ब्राडबेंड बिल/रिचार्ज",
  "जीवन प्रमाण पत्र",
  "दपमसमज के कोर्स",
  "आवास योजना के फार्म व पेमेंट",
  "नये बैंक खाते",
  "पी सी सी/पासपोर्ट",
  "लाइसेंस आवेदन",
  "पी.एफ/एन पी एस के वाई सी व नामिनेशन",
  "आय/जाति/रिहायशी प्रमाण पत्र के आवेदन",
  "आधार/वोटर/आयुष्मान कार्ड के प्रिन्ट",
  "बिजली/पानी/मोबाइल के बिल की अदायगी",
  "प्रापर्टी टैक्स व अन्य टैक्स की अदायगी",
  "छात्रवृति/एसएससी/यूपीएससी  के फार्म",
  "ई एस आई/वाहन/जी एस टी चालान की पेमंेट",
//   "सिबिल/क्रेडिट स्कोर जांच",
  "लोन्स के आवेदन कार लोन, विद्यालक्ष्मी लोन, मुद्रा लोन, प्रापर्टी लोन, गोल्ड लोन",
  "सभी प्रकार की स्टेशनरी, फोटोकापी व अन्य सुविधाएं उपलब्ध हैं।"
];

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edutech Campus - सेवाएं</title>
        <meta name="description" content="Edutech Campus द्वारा प्रदान की जाने वाली सेवाओं की सूची।" />
      </Head>
      <Navbar   />
      <main className="min-h-screen py-8 px-4">
        <section className="max-w-6xl mx-auto">
            <h1 className="Glow mt-5 xl:mt-2 xl:mb-0 text-center text-3xl xl:text-6xl font-black">सेवाएं</h1>
          <div className="xl:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href="/contact" key={index} passHref>
                <div className="service-box font-bold cursor-pointer bg-white bg-opacity-20 border p-6 shadow-md rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
                  {service}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;