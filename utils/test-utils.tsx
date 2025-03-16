import { render } from "@testing-library/react";
import StoreProvider from '@/app/StoreProvider';

export function renderWithStore(ui: React.ReactNode) {
  return render(<StoreProvider>{ui}</StoreProvider>);
}
