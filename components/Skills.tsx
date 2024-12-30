import React from 'react'
import { skills } from '@/lib/data';
import IconCloud from './ui/icon-cloud';

const Skills = () => {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-4 md:px-8 lg:px-12 pt-8">
      <IconCloud iconSlugs={skills} />
    </div>
  );
}

export default Skills
