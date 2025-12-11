// frontend/src/components/ModuleNav.tsx

import React from 'react';
import { Module } from '../types/module';
import clsx from 'clsx';

interface ModuleNavProps {
  modules: Module[];
  onSelectModule: (moduleId: string) => void;
  activeModuleId?: string;
}

const ModuleNav: React.FC<ModuleNavProps> = ({ modules, onSelectModule, activeModuleId }) => {
  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Modules</h2>
      <ul>
        {modules.map((module) => (
          <li key={module.id} className="mb-2">
            <button
              onClick={() => onSelectModule(module.id)}
              className={clsx(
                'w-full',
                'text-left',
                'p-3',
                'rounded-md',
                'transition-colors',
                'duration-200',
                'ease-in-out',
                activeModuleId === module.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-700'
              )}
            >
              {module.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ModuleNav;
