import { expect, test, vi, describe, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { SearchForm } from '../app/components/SearchForm';
import userEvent from "@testing-library/user-event";

const mockedUseRouter = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
}));

beforeEach(() => {
  mockedUseRouter.mockReturnValue({
    push: vi.fn(),
  });
});

afterEach(() => {
  cleanup()
  vi.clearAllMocks();
});

describe('Search Form',() => {
    test('SearchFormで検索できる', async () => {
        render(<SearchForm />)
        const user = userEvent.setup();
        const budgetSelect = await screen.getByLabelText('予算');
        const spaceSelect = await screen.getByLabelText('スペース（横幅）');
        const colorSelect = await screen.getByLabelText('色');
        const submitButton = await screen.getByRole('button', { name: '検索' });

        // 予算を選択
        await user.selectOptions(budgetSelect, '100000');
        // スペースを選択
        await user.selectOptions(spaceSelect, '150');
        // カラーを選択
        await user.selectOptions(colorSelect, 'black');

        // フォームを送信
        await user.click(submitButton);

        // 選択した値が正しいか確認
        expect(budgetSelect).toHaveValue('100000');
        expect(spaceSelect).toHaveValue('150');
        expect(colorSelect).toHaveValue('black');
        expect(mockedUseRouter().push).toHaveBeenCalledWith('/search?budget=100000&space=150&color=black');

    });

    test('検索フォームに未入力の場合エラーが表示される', async () => {

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
        render(<SearchForm />)
        const user = userEvent.setup();
        const submitButton = await screen.getByRole('button', { name: '検索' });

        // フォームを送信 selectの場合は何もしない
        await user.click(submitButton);

        expect(alertMock).toHaveBeenCalledWith(
            '1つ以上条件を選択してください'
        );

    });

})