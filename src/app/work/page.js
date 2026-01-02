import Cards from "../components/Cards";
import SectionTitle from "../components/SectionTitle";

export default function Work() {
  const data = [
    {
      company: "Genentech",
      location: "South San Francisco, CA",
      position: "IT Workplace Services Intern",
      duration: "May 2025 - Present",
      skills: [
        "Technical Support",
        "Customer Service",
        "Problem Solving",
        "Analytical Skills",
        "JavaScript",
        "Agile",
        "AI Tools",
        "Data Analysis",
        "Gemini",
        "NotebookLM",
        "ServiceNow",
        "Snowflake",
        "SQL",
      ],
      link: "https://www.linkedin.com/in/val-wong/details/experience/",
    },
    {
      company: "ARTR",
      location: "Remote",
      position: "Software Engineer II",
      duration: "Apr 2024 - Feb 2025",
      skills: [
        "React",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "GitHub",
        "Figma",
        "Agile",
      ],
      link: "https://www.linkedin.com/in/val-wong/details/experience/",
    },
    {
      company: "University of California, Riverside - Information Technology Services",
      location: "Riverside, CA",
      position: "Software Helpdesk Technician",
      duration: "Mar 2023 - June 2024",
      skills: [
        "Technical Support",
        "Customer Service",
        "Troubleshooting",
        "ServiceNow",
        "Conflict Resolution",
      ],
      link: "https://www.linkedin.com/in/val-wong/details/experience/",
    },
    {
      company: "University of California, Riverside - Information Technology Services",
      location: "Riverside, CA",
      position: "Fitwell Attendant",
      duration: "Sept 2021 - June 2022",
      skills: [
        "Customer Service",
        "Communication",
        "Teamwork",
        "Conflict Resolution",
        "Crowd and Flow Management",
        "Health and Safety Protocols",
      ],
      link: "https://www.linkedin.com/in/val-wong/details/experience/",
    },
    {
      company: "Dexterity",
      location: "Redwood City, CA",
      position: "Office Manager Assistant - Interim",
      duration: "Aug 2020 - Sept 2020",
      skills: [
        "Communication",
        "Team Management",
        "Organization",
        "Spreadsheets",
        "Administrative Support",
      ],
      link: "https://www.linkedin.com/in/val-wong/details/experience/",
    },
  ];

  return (
    <div id="work" className="min-h-screen bg-floralWhite">
      <SectionTitle title="Work Experience" />
      <Cards data={data} />
    </div>
  );
}
