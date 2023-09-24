import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialEntries) => (initialEntries ? render(<MemoryRouter initialEntries={[initialEntries]}>{component}</MemoryRouter>) : render(component, { wrapper: MemoryRouter }));

export default renderWithRouter;
