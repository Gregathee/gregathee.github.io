import React from 'react';
import Tabs from '../components/Tabs'; // Import your generic Tabs component

const SkillsSection = () => {
  const skillsTabs = [
    {
      id: 'Unity',
      label: 'Unity',
      content: (
        <ul>
          <li>DOTS (Data-oriented Technology Stack)</li>
          <ul>
            <li>ECS (Entity Component System)</li>
            <li>Job System</li>
            <li>Burst Compiler</li>
          </ul>
          <li>Nav Mesh</li>
          <li>2D Tilemaps and Composite Colliders</li>
          <li>Advertisements</li>
          <li>Profiler</li>
          <li>Cinemachine and Timeline</li>
        </ul>
      ),
    },
    {
      id: 'Unreal',
      label: 'Unreal',
      content: (
        <ul>
          <li>Code Hierarchy</li>
          <li>Blue Prints</li>
        </ul>
      ),
    },
    {
      id: 'C++',
      label: 'C++',
      content: (
        <ul>
          <li>lvalues vs rvalues</li>
          <li>Move Semantics</li>
          <li>Threads</li>
          <li>noexcept</li>
          <li>Smart Pointers</li>
          <li>Linker</li>
          <li>Bitwise Operators</li>
          <li>Macros and Pre-Processor Directives</li>
        </ul>
      ),
    },
    {
      id: 'Python',
      label: 'Python',
      content: (
        <ul>
          <li>Pandas</li>
          <li>Flask</li>
          <li>Creating Modules</li>
          <li>Python Quirks</li>
        </ul>
      ),
    },
    {
      id: 'Design Patterns',
      label: 'Design Patterns',
      content: (
        <ul>
          <li>Composite</li>
          <li>Strategy</li>
          <li>Repository</li>
          <li>Unit of Work</li>
          <li>Decorator</li>
          <li>Proxy</li>
          <li>Factory</li>
          <li>Facade</li>
          <li>Observer</li>
          <li>Command</li>
          <li>Adapter</li>
          <li>Singleton</li>
          <li>Template</li>
          <li>State</li>
          <li>Iterator</li>
        </ul>
      ),
    },
    {
      id: 'Coding Practices',
      label: 'Coding Practices',
      content: (
        <ul>
          <li>SOLID</li>
          <li>TDD</li>
          <li>REST</li>
          <li>Sanitize Data</li>
          <li>Validate Input</li>
          <li>Principle of Least Privilege</li>
        </ul>
      ),
    },
  ];

  return <Tabs tabs={skillsTabs} />;
};

export default SkillsSection;
