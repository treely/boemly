import React from 'react';
import { ProjectCard } from '.';
import { render, screen } from '../../test/testUtils';
import { ProjectCardProps } from './ProjectCard';

const defaultProps: ProjectCardProps = {
  title: 'Title',
  facts: [
    { id: 1, text: 'Fact 1' },
    { id: 2, text: 'Fact 2' },
  ],
  footerTitle: 'Footer title',
  footerSubTitle: 'Footer sub title',
  image: <img alt="Alt text" src="/src" />,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<ProjectCard {...combinedProps} />);
};

describe('The ProjectCard component', () => {
  it('displays the title', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the footer title and sub title', () => {
    setup();

    expect(screen.getByText(defaultProps.footerTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.footerSubTitle)).toBeInTheDocument();
  });

  it('displays the facts', () => {
    setup();

    expect(screen.getByText(defaultProps.facts[0].text)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.facts[1].text)).toBeInTheDocument();
  });
});
