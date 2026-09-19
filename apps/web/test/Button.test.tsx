import { expect, test } from 'vitest';
import React from 'react';
import { Button } from '@aisha/ui';

test('Button renders with primary variant classes', () => {
  const btn = Button({ children: 'Explore Projects', variant: 'primary' });
  expect(btn.props.className).toContain('bg-cyan-400');
  expect(btn.props.className).toContain('text-navy-950');
});

test('Button renders with secondary variant classes', () => {
  const btn = Button({ children: 'Contact Me', variant: 'secondary' });
  expect(btn.props.className).toContain('bg-navy-800');
  expect(btn.props.className).toContain('border-navy-700');
});
