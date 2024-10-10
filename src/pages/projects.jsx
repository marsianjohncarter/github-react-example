import './index.css';
import AppBar from '../components/app-navbar/app-navbar';

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  const projectsNavigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/projects", current: true },
    { name: "MediaScroll", href: "/media", current: false, new: true },
  ];
  
function Projects() {
    return (
      <>
        <AppBar navigation={projectsNavigation}/>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                      <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
        
        <h1 className="text-center">Visit my <a className="active:text-blue-700 target:shadow-lg text-blue-600 visited:text-purple-600" href="https://github.com/marsianjohncarter"><u>Github</u></a> to see what I am working on.</h1>
        </>
    );
}

export default Projects;