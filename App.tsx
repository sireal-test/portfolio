import React, { useState, useEffect } from 'react';
import { SectionHeader } from './components/SectionHeader';
import { EXPERIENCES, PROJECTS, PUBLICATIONS, SKILLS } from './constants';
import { ProjectItem } from './types';
import { 
  Globe, 
  Mail, 
  Facebook, 
  Youtube, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight,
  Monitor,
  Database,
  Cpu,
  X,
  Building2
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen selection:bg-green-100 relative">
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setSelectedProject(null)} 
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 fade-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-20 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image Side - Fixed to prevent cutting off */}
              <div className="h-[40vh] md:h-auto bg-gray-50 flex items-center justify-center overflow-hidden border-r border-gray-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain p-4 md:p-8"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-14">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-[#e2f3e4] text-[10px] font-bold uppercase tracking-widest rounded-full text-green-800">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="space-y-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.longDescription && (
                    <p className="text-gray-500 leading-relaxed italic border-l-2 border-[#e2f3e4] pl-4 text-base">
                      {selectedProject.longDescription}
                    </p>
                  )}

                  {/* Partners Section */}
                  {selectedProject.partnersList && (
                    <div className="pt-8 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-6 text-gray-400">
                        <Building2 size={16} />
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Partner Companies</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {selectedProject.partnersList.map((partner, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-200 group-hover:bg-green-500 transition-colors" />
                            <span className="text-sm font-medium text-gray-700">{partner}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.tags && (
                    <div className="flex flex-wrap gap-2 pt-4">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-medium rounded-full text-gray-400 border border-gray-100">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-14">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 bg-black text-white text-sm font-medium rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
                  >
                    Close Project Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tighter">SIREAL</div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          </div>
          <a 
            href="https://sireal.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#e2f3e4] hover:bg-[#d4e9d6] text-black text-sm font-medium rounded-full transition-all duration-300"
          >
            Visit Website
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
                Strategic <br />
                Systems for <br />
                Your Workflow
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed">
                "도구를 넘어 일하는 방식을 설계합니다." <br />
                생산성 컨설턴트 <strong>전시진</strong>입니다. 
                조직과 개인이 더 본질적인 업무에 집중할 수 있도록 '일하는 문화와 시스템'을 구축합니다.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2f3e4]/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">About Me</h3>
                <p className="text-gray-800 leading-relaxed mb-8">
                  국내 최대 노션 커뮤니티인 'Notion 한국 사용자 모임'을 운영하며, 
                  다양한 기업과 기관에 협업 툴 컨설팅 및 교육을 제공하고 있습니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e2f3e4] flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-green-700" />
                    </div>
                    <span className="text-sm font-medium">Vision: 도구를 통한 삶의 여유</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e2f3e4] flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-green-700" />
                    </div>
                    <span className="text-sm font-medium">Notion Certified Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Driving efficiency" 
            subtitle="조직의 성장을 돕는 탄탄한 커리어 경험"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group border-t border-gray-200 pt-8 hover:border-black transition-colors duration-500">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-serif mb-2">{exp.company}</h3>
                <p className="text-lg font-medium text-gray-500 mb-6">{exp.title}</p>
                <ul className="space-y-3">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-gray-600 flex items-start gap-2 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Highlights */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader 
              title="Work highlights" 
              subtitle="복잡한 프로세스를 단순하게 바꾸는 프로젝트"
            />
            <button className="px-8 py-3 bg-[#e2f3e4] hover:bg-black hover:text-white text-black text-sm font-medium rounded-full transition-all duration-300 self-start md:self-end">
              View all works
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:underline underline-offset-4 decoration-1">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                {project.partnersList && (
                  <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {project.partnersList.length}+ Clients including {project.partnersList[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 px-6 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Insights & Media" 
            subtitle="기록과 교육을 통한 가치 전달"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="text-lg text-gray-500 italic font-serif mb-8">
                  "일의 본질은 도구를 잘 쓰는 것이 아니라, <br />
                  도구를 통해 삶의 여유를 확보하는 것입니다."
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-1 bg-black rounded-full"></div>
                  <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl flex flex-col md:flex-row gap-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-gray-400">
                    {pub.type === 'book' ? <Database size={32} /> : pub.type === 'lecture' ? <Monitor size={32} /> : <Cpu size={32} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-700 bg-green-50 px-2 py-0.5 rounded">
                        {pub.type}
                      </span>
                      {pub.year && <span className="text-[10px] text-gray-400 font-medium">{pub.year}</span>}
                    </div>
                    <h4 className="text-xl font-medium mb-3">{pub.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{pub.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Expertise & Tools</h2>
            <p className="text-gray-500 max-w-xl mx-auto">효율적인 워크플로우를 위해 검증된 도구와 방법론을 제안합니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className={`${skill.color} p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500`}>
                <h3 className="text-4xl font-serif mb-6">{skill.items.length}+</h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">{skill.name}</p>
                <div className="space-y-2">
                  {skill.items.map((item, iIdx) => (
                    <p key={iIdx} className="text-sm font-medium text-black/70">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                Ready to <br />
                redesign your <br />
                working way?
              </h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://sireal.co" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-[#e2f3e4] text-black font-semibold rounded-full hover:bg-white transition-all flex items-center gap-3"
                >
                  <Globe size={18} />
                  Visit Sireal
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-8">Navigation</h4>
              <ul className="space-y-4 text-lg">
                <li><a href="#about" className="hover:text-green-200 transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-green-200 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-green-200 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-green-200 transition-colors">Skills</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-8">Get in touch</h4>
              <div className="space-y-6">
                <a href="https://sireal.co" target="_blank" className="flex items-center gap-4 text-xl group">
                  <Globe className="text-gray-500 group-hover:text-white" />
                  <span>sireal.co</span>
                  <ArrowUpRight size={16} className="text-gray-600" />
                </a>
                <div className="flex gap-6 mt-12">
                  <a href="https://facebook.com/groups/notion.so" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="https://youtube.com/@sireal" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold tracking-tighter">SIREAL</span>
              <span className="text-gray-500 text-sm">© 2026 Jeon Si-jin.</span>
            </div>
            <p className="text-gray-500 text-xs">Built with Passion for Productivity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
