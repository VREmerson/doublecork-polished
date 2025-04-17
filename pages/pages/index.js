import React, { useState } from 'react';

const sampleRecruiters = [
  {
    name: "TechRise Partners",
    industry: "Software Engineering, DevOps, Cloud",
    location: "New York, NY",
    description: "We specialize in placing full-stack developers, DevOps engineers, and cloud architects at hyper-growth startups.",
    email: "connect@techrisepartners.com"
  },
  {
    name: "DataWave Search",
    industry: "AI, Data Science, Analytics",
    location: "San Francisco, CA",
    description: "Focused exclusively on AI and data-driven companies, from stealth mode to IPO.",
    email: "contact@datawavesearch.com"
  },
  {
    name: "ExecPro Talent",
    industry: "Executive & Leadership Roles",
    location: "Remote / Global",
    description: "Placing VP+ roles across Product, Engineering, Marketing, and Finance.",
    email: "hello@execprotalent.com"
  }
];

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const findMatches = async () => {
    setLoading(true);
    const topMatches = sampleRecruiters.slice(0, 3);
    await new Promise(res => setTimeout(res, 1000));
    setMatches(topMatches);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">🔍 Find the Right Recruiter</h1>
        <textarea
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your resume or LinkedIn summary here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
        <button
          onClick={findMatches}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Finding Matches..." : "Match Me with Recruiters"}
        </button>

        {matches.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Top Matches</h2>
            {matches.map((match, idx) => (
              <div key={idx} className="border border-gray-300 rounded-md p-4 shadow-sm bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">{match.name}</h3>
                <p><strong>Specialty:</strong> {match.industry}</p>
                <p><strong>Location:</strong> {match.location}</p>
                <p className="text-gray-700 mb-2">{match.description}</p>
                <a href={`mailto:${match.email}`} className="text-blue-600 underline">Email Recruiter</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
