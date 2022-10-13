import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('test world in the document',()=>{
  render(<App/>);
  const linkElement1=screen.getByText(/world/i)
  expect(linkElement1).toBeInTheDocument();
})

test('find input placeholder in the document',()=>{
  render(<App/>);
  const linkElement2=screen.getByPlaceholderText(/pakistan/i);
  expect(linkElement2).toBeInTheDocument();
})