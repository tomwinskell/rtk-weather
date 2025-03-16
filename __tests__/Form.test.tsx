import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '@/app/ui/form/Form';
import { renderWithStore } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('button is disabled on load', () => {
    renderWithStore(<Form />);
    expect(
      screen.getByRole('button', {
        name: /get charts/i,
      })
    ).toBeDisabled();
  });
  
  it('button is enabled when valid city is selected', async () => {
    const user = userEvent.setup();
    const city = 'Montreal';
    renderWithStore(<Form />);
    await user.click(screen.getByRole('combobox'));
    await user.keyboard(city);
    await user.keyboard('{Enter}');
    expect(
      screen.getByRole('button', {
        name: /get charts/i,
      })
    ).toBeEnabled();
  });
});
