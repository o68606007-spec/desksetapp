import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComeBackSearchButton } from '../app/components/ComeBackSearchButton';
import userEvent from "@testing-library/user-event";

describe('Come Back Search Button',() => {
    test('ComeBackSearch Buttonで戻れる', async () => {
        render(<ComeBackSearchButton query="test" />)
        const user = userEvent.setup();
        const comeBackButton = await screen.getByRole('link', { name: '戻る' });

        // 戻るボタンをクリック
        await user.click(comeBackButton);

        // ナビゲーションが呼び出されるか確認
        expect(comeBackButton).toHaveAttribute('href', '/search?test');

    });
});
