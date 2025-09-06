import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Websites
  { name: "Custom Website Development", level: "Business sites, Personal sites, Portfolios", category: "Websites" },
  { name: "E-Commerce Solutions", level: "Shopify, WooCommerce, Custom MERN Stack Stores", category: "Websites" },
  { name: "CMS Developmentact", level: "WordPress, Webflow, Custom CMS", category: "Websites" },
  { name: "SEO Optimization", level: "Technical + On-page SEO", category: "Websites" },
  { name: "Website Maintenance & Support", level: "", category: "Websites" },
  

  // Apps
  { name: "Mobile App Development", level: "iOS & Android – React Native/Flutter", category: "Apps" },
  { name: "Web Apps", level: "Custom dashboards, SaaS platforms, Internal systems", category: "Apps" },
  { name: "API Development & Integration", level: "", category: "Apps" },
  { name: "Cross-Platform Apps", level: "", category: "Apps" },
  { name: "App Maintenance & Updates", level: "", category: "Apps" },

  // UI/UX
  { name: "User Interface Design", level: "", category: "UI/UX" },
  { name: "User Experience Research & Wireframing", level: "", category: "UI/UX" },
  { name: "Prototyping & Interactive Mockups", level: "Figma, Adobe XD", category: "UI/UX" },
  { name: "Brand Identity & Design Systems", level: "", category: "UI/UX" },
  { name: "Responsive Design for all devices", level: "", category: "UI/UX" },
];

const categories = ["all", "Websites", "Apps", "UI/UX"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary"> Services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "" }} 
                  
                  
                />
                
              </div>

              <div className="text-left mt-1 ">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
