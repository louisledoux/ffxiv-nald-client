import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';

describe('NavButton()', () => {
  it('should be defined', () => {
    const { baseElement } = render(<NavButton title="" url="" />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the given title', () => {
    const title = 'Test Title';
    render(<NavButton title={title} url="" />);

    const button = screen.getByText(title);
    expect(button).toBeInTheDocument();
  });
});
