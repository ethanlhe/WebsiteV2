import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const ProjectPreview = () => (
  <div className="w-64 p-3 space-y-3">
    <div className="grid grid-cols-2 gap-2">
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        alt="AI Chat Application"
        className="w-full h-20 object-cover rounded"
        loading="eager"
      />
      <img 
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        alt="E-commerce Platform"
        className="w-full h-20 object-cover rounded"
        loading="eager"
      />
    </div>
    <p className="text-xs font-mono text-center">hover to preview projects</p>
  </div>
);

const ExperienceItem = ({ company, description, index }: { company: string; description: string; index: number }) => {
  const isBottomRow = index >= 2; // For 2x2 grid, bottom row starts at index 2

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button className="py-2 px-4 rounded font-mono text-sm bg-white hover:bg-gray-100 dark:bg-[#333333] dark:hover:bg-[#444444] transition-colors">
          {company}
        </button>
      </TooltipTrigger>
      <TooltipContent 
        side={isBottomRow ? "bottom" : "top"}
        className="bg-white dark:bg-[#222222] border-none max-w-[200px] z-[9999]"
      >
        <p className="text-xs font-mono">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navigate = useNavigate();

  useEffect(() => {
    // Preload images
    const images = [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("ethanhe0716@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const boxClasses = `p-4 rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

  const experiences = [
    {
      company: "render",
      description: "Led development of cloud infrastructure monitoring tools and improved system reliability by 40%"
    },
    {
      company: "vimbly",
      description: "Developed booking platform features and integrated payment processing systems"
    },
    {
      company: "codelab",
      description: "Built educational platform features and mentored junior developers"
    },
    {
      company: "castle hill",
      description: "Implemented financial data visualization tools and automated reporting systems"
    }
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Name Section */}
            <div className={boxClasses}>
              <h1 className="text-xl font-mono">ethan he</h1>
              <p className="text-muted-foreground font-mono">software engineer</p>
            </div>

            {/* Projects Section */}
            <div className={boxClasses}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono">projects</span>
                <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
              </div>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => navigate('/portfolio')}
                    className={`w-full py-2 px-4 rounded font-mono text-sm ${
                      theme === "dark" 
                        ? "bg-white text-black hover:bg-gray-200" 
                        : "bg-black text-white hover:bg-gray-800"
                    } transition-colors`}
                  >
                    view
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  side="left" 
                  sideOffset={20}
                  className="bg-white dark:bg-[#222222] border-none z-[9999]"
                >
                  <ProjectPreview />
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Blog Section */}
            <div className={boxClasses}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono">blog</span>
                <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>soon</span>
              </div>
              <button 
                disabled
                className={`w-full py-2 px-4 rounded font-mono text-sm ${
                  theme === "dark" ? "bg-[#333333]" : "bg-white"
                } transition-colors opacity-50 cursor-not-allowed`}
              >
                read
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* About Section */}
            <div className={boxClasses}>
              <h2 className="font-mono mb-3">about me</h2>
              <p className={`font-mono leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
              </p>
              <p className="font-mono mt-2">davis, california based</p>
            </div>

            {/* Experience Section */}
            <div className={boxClasses}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono">experience</span>
                <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>2+ years</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {experiences.map((exp, index) => (
                  <ExperienceItem 
                    key={index} 
                    company={exp.company} 
                    description={exp.description} 
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className={boxClasses}>
              <h2 className="font-mono mb-3">contact me</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleEmailClick}
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  email
                </button>
                <a
                  href="https://www.linkedin.com/in/ethanlhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  linkedin
                </a>
                <a
                  href="https://github.com/ethanlhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  github
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className={boxClasses}>
              <span className="font-mono block mb-3">theme</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setTheme("light")}
                  className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
                    theme === "light" 
                      ? "bg-black text-white" 
                      : "bg-[#333333] text-white hover:bg-[#444444]"
                  }`}
                >
                  light
                </button>
                <button 
                  onClick={() => setTheme("dark")}
                  className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
                    theme === "dark" 
                      ? "bg-white text-black" 
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
