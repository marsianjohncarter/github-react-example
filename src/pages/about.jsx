import './index.css'
import AppBar from '../components/app-navbar/app-navbar';

const aboutNavigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: true },
  { name: "Projects", href: "/projects", current: false },
  { name: "MediaScroll", href: "/media", current: false, new: true },
];

function About() {
  return (
    <>
    <AppBar navigation={aboutNavigation}/>
      {/* component */}
      <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
          Latest Achievements
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>
        <a href="https://www.material-tailwind.com/" target="_blank">
          Generated with <b>Magic AI Blocks</b> by Creative Tim
        </a>
        .
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Record-breaking Profits
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                We are proud to announce that our bank has achieved
                record-breaking profits this year. Thanks to our dedicated team
                and loyal customers, we have surpassed all expectations and set
                new industry standards. Read more to learn about our success
                story.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Expansion into New Markets
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                We are excited to share that our bank has successfully expanded
                into new markets. With strategic partnerships and innovative
                solutions, we have established a strong presence in
                international markets. Learn more about our expansion journey
                and the opportunities it brings.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Digital Transformation Success
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                Our bank has undergone a successful digital transformation,
                revolutionizing the way we serve our customers. From seamless
                online banking experiences to advanced security measures, we
                have embraced technology to enhance customer satisfaction.
                Discover the key milestones of our digital transformation
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default About;