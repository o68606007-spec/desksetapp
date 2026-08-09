import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComeBackButton } from '../app/components/ComeBackButton';
import userEvent from "@testing-library/user-event";

describe('Come Back Button',() => {
    test('ComeBackButtonで戻れる', async () => {
        render(<ComeBackButton />)
        const user = userEvent.setup();
        const comeBackButton = await screen.getByRole('link', { name: '戻る' });

        // 戻るボタンをクリック
        await user.click(comeBackButton);

        // ナビゲーションが呼び出されるか確認
        expect(comeBackButton).toHaveAttribute('href', '/');

    });
});
