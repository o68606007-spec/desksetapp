import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchDetailTitle } from '../app/components/SearchDetailTitle';

describe('Search Detail Title',() => {
    test('Page', () => {
        render(<SearchDetailTitle />)
        expect(screen.getByText('Desk Set Detail')).toBeDefined();
    });

})