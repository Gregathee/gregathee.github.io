import React from 'react';
import Tabs from '../components/Tabs'; // Import your generic Tabs component

const EducationSection = () => {
  const educationTabs = [
    {
      id: 'Computer Science',
      label: 'Computer Science',
      content: (
        <ul>
          <li>Software Engineering Principles</li>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li>Multi-threading</li>
          <li>Relational Database Design</li>
          <li>Network Programming</li>
          <li>Operating Systems</li>
          <li>Data Science</li>
          <li>Network Security</li>
          <li>Computer Architecture</li>
        </ul>
      ),
    },
    {
      id: 'Math',
      label: 'Math',
      content: (
        <ul>
          <li>Linear Algebra</li>
          <li>Discrete Math</li>
          <li>Calculus I, II</li>
          <li>Probability and Statistics</li>
        </ul>
      ),
    },
    {
      id: 'Game Development',
      label: 'Game Development',
      content: (
        <ul>
          <li>Unity</li>
          <li>Game Modification</li>
          <li>Game Design</li>
          <li>QA in Games</li>
        </ul>
      ),
    },
  ];

  return <Tabs tabs={educationTabs} />;
};

export default EducationSection;