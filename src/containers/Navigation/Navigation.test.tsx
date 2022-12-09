import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation()', () => {
  it('should be defined', () => {
    const { baseElement } = render(<Navigation routes={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
