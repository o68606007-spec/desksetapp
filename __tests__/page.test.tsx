import { expect, test, vi, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page',() => {
    test('Page', () => {
        render(<Page />)
        expect(screen.getByText('Hello world!')).toBeDefined();
    });

})