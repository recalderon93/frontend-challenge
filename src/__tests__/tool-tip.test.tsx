import { render, cleanup, screen } from '@testing-library/react';
import ToolTip from '../components/tool-tip/tool-tip';

describe('@components/ToolTip', () => {
  const description = 'Test description';
  let toolTip: HTMLElement;

  beforeEach(() => {
    cleanup();
    render(<ToolTip description={description} />);
    toolTip = screen.getByRole('tooltip');
  });

  test('Expect the tooltip to have description text context', () => {
    expect(toolTip).toHaveTextContent(description);
  });
});
