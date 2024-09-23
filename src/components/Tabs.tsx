import React, { useState } from 'react';
import styled from 'styled-components';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string; 
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId }) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0].id);

  const openTab = (tabId: string) => setActiveTab(tabId);

  return (
    <TabsContainer>
      <TabButtons>
        {tabs.map((tab) => (
          <TabButton key={tab.id} isActive={activeTab === tab.id} onClick={() => openTab(tab.id)}>
            {tab.label}
          </TabButton>
        ))}
      </TabButtons>

      <TabContent>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <TabPanel key={tab.id}>
                <h3>{tab.label}</h3>
                {tab.content}
                <CloseButton onClick={() => setActiveTab('')}>Close</CloseButton>
              </TabPanel>
            )
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;

// Styled components
const TabsContainer = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background for a bubble-like effect */
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds shadow to match bubble effect */
    backdrop-filter: blur(5px); /* Adds a subtle blur to make it more glass-like */
`;

const TabButtons = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3); /* Dark semi-transparent background for tab buttons */
    border-radius: 15px; /* Bubble effect on the tab buttons container */
`;

const TabButton = styled.button<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
            isActive ? 'rgba(156, 39, 176, 0.8)' : 'rgba(255, 255, 255, 0.2)'};
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: ${({ isActive }) =>
            isActive ? '0 4px 8px rgba(156, 39, 176, 0.6)' : 'none'}; /* Shadow for active tab */
    transform: ${({ isActive }) => (isActive ? 'scale(1.05)' : 'none')}; /* Slight scale effect on active tab */

    &:hover {
        background-color: ${({ isActive }) =>
                isActive ? 'rgba(171, 71, 188, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
        transform: scale(1.05); /* Hover effect to match active tab's scale */
    }
`;

const TabContent = styled.div`
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 15px;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for content */
    backdrop-filter: blur(5px); /* Adds blur effect for the bubble look */
`;

const TabPanel = styled.div`
    h3 {
        color: #9c27b0; /* Match heading color with active tab color */
        text-shadow: 1px 1px 1px #000000;
    }

    ul {
        list-style-type: disc;
        padding-left: 2rem;
    }
`;

const CloseButton = styled.button`
    background-color: #f44336;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e57373;
    }
`;