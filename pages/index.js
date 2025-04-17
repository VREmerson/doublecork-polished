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
    setMatches
