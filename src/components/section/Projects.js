import React from 'react';
import Project from '../layouts/Project';
import ExercisesCard from '../layouts/ExercisesCard';
import {
  projectsSection,
  fullStackTitle,
  projects,
  frontEndTitle,
  miscellaneous,
  exercises,
  exercisesTitle,
  exercisesSubtitle,
} from '../../profile';

const Projects = () => (
  <section id='projects' className='section'>
    <div className='container'>
      <h2 className='section__title' data-aos='fade-up'>
        {projectsSection.title}
      </h2>
      <p className='section__intro' data-aos='fade-up'>
        {projectsSection.intro}
      </p>

      <h3 className='subsection__title'>{fullStackTitle}</h3>
      <div className='grid grid--3'>
        {projects.map((p) => (
          <Project key={p.id} {...p} />
        ))}
      </div>

      <h3 className='subsection__title'>{frontEndTitle}</h3>
      <div className='grid grid--3'>
        {miscellaneous.map((p) => (
          <Project key={p.id} {...p} />
        ))}
        <ExercisesCard title={exercisesTitle} subtitle={exercisesSubtitle} exercises={exercises} />
      </div>
    </div>
  </section>
);

export default Projects;
