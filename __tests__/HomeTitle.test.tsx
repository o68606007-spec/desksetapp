import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeTitle } from '../app/components/HomeTitle';

describe('Home Title',() => {
    test('Page', () => {
        render(<HomeTitle />)
        expect(screen.getByText('Desk Set founder')).toBeDefined();
    });

})