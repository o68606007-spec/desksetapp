import { expect, test, vi, describe, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { WorkspaceList } from '../app/components/WorkspaceList';
import userEvent from "@testing-library/user-event";

const mockedNavigator = vi.fn();

vi.mock('next/link', () => ({
  default: ({href, children, ...props}: {  href: string;  children: React.ReactNode;  [key: string]: any;}) => (
    <a href={href} {...props} onClick={(e) => {e.preventDefault(); mockedNavigator(href);}}>
      {children}
    </a>
  ),
}));



describe('Workspace List',() => {
    test('WorkspaceListから移動できる', async () => {
        render(<WorkspaceList workspaceSets={[{ id: '1', title: 'Workspace 1', budget: 100000, space: 100, color: 'blue', image_url: 'https://example.com/image1.jpg' }]} searchParams={{budget: '100000', space: '100', color: 'blue'}} />)
        const user = userEvent.setup();
        const submitButton = await screen.getByRole('button', { name: '詳細を見る' });
        await user.click(submitButton);
        console.log('mockedNavigator calls:', mockedNavigator.mock.calls);
        expect(mockedNavigator).toHaveBeenCalledWith('/search/1?budget=100000&space=100&color=blue');
    });
});
 