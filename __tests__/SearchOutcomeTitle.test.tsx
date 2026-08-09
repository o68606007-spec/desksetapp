import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchOutcomeTitle } from '../app/components/SearchOutcomeTitle';

describe('Search Outcome Title',() => {
    test('Page', () => {
        render(<SearchOutcomeTitle />)
        expect(screen.getByText('Search Results')).toBeDefined();
    });

})