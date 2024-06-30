/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { ReactNode, useState } from 'react';
import { AccordionTest } from './AccordionTest';

type TabsProps = {
    tabs?: string[]
    tabsContent?: ReactNode[]
}
const tabsExample = ['Matemáticas', 'Español', 'Sociales'];
  const tabContentExample = [
    <AccordionTest children={'Preguntas materia'}/>,
    'Content for Tab 2',
    'Content for Tab 3',
  ];

export const Tabs = ({
    tabs= tabsExample,
    tabsContent=tabContentExample 
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  

  return (
    <div className="bg-principal-150 rounded-12 w-full h-lvh mx-auto">
        <div className="flex border-b">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`py-2 px-4 transition-colors duration-300 ${
                    activeTab === index
                        ? 'font-semibold border-b-2 border-principal-100 bg-principal-250'
                        : 'border-transparent text-gray-500 hover:text-blue-500'
                    } ${index===0 && 'rounded-tl-12'}`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab}
                </button>
            ))}
        </div>
      <div className="p-5">
        {tabsContent[activeTab]}
      </div>
    </div>
  );
};

