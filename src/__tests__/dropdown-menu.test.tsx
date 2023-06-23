import { render, screen, cleanup, waitFor, within, fireEvent } from '@testing-library/react';
import DropdownMenuItem from '../components/dropdown-menu/components/item';
import DropdownMenuItemsWrapper from '../components/dropdown-menu/components/menu';
import DropdownMenu from '../components/dropdown-menu/dropdown-menu';
import Icon1 from '../images/Icons-dots-vertical.svg';
import Icon2 from '../images/Logo.svg';

const list: MenuItem[] = [
  { caption: 'Caption 1', href: 'http://www.test1.com/', icon: Icon1 },
  { caption: 'Caption 2', href: 'http://www.test2.com/', icon: Icon2 },
];

describe('DropdownMenuItem', () => {
  // Constants
  const itemCaption = 'Item caption';
  const href = 'https://www.google.com';

  beforeEach(() => {
    cleanup();
  });

  test('Check if the component renders the Item caption', () => {
    render(<DropdownMenuItem caption={itemCaption} href={href} />);
    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent(itemCaption);
  });

  test('Check if href is passed', () => {
    render(<DropdownMenuItem caption={itemCaption} href={href} />);
    const menuItem = screen.getByRole('menuitem');
    const link = within(menuItem).findByRole('link');
    waitFor(() => expect(link).toHaveAttribute('href', href));
  });

  test('Check that not renders any image tag if the prop icon is not passed', () => {
    render(<DropdownMenuItem caption={itemCaption} href={href} />);
    const menuItem = screen.findByRole('img');
    waitFor(() => expect(menuItem).not.toBeInTheDocument());
  });

  test('Check that renders an image tag if the prop icon is passed', () => {
    render(<DropdownMenuItem caption={itemCaption} icon={Icon1} href={href} />);
    const menuItem = screen.getByRole('img', { name: new RegExp(`${itemCaption}-icon`, 'i') });
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveAttribute('src', Icon1);
  });
});

describe('DropdownMenuItemsWrapper', () => {
  let Menu: HTMLElement;

  beforeEach(() => {
    cleanup();
    render(<DropdownMenuItemsWrapper options={list} />);
    Menu = screen.getByRole('menu');
  });

  test('Check if the menu is rendered', () => {
    expect(Menu).toBeInTheDocument();
  });

  test('Check if the menu is rendering all the options', async () => {
    const MenuOptions = await waitFor(() => within(Menu).findAllByRole('menuitem'));
    expect(MenuOptions).toHaveLength(list.length);
  });

  test('Check if the captions and ref are passed correctly to the Menu Item', async () => {
    const MenuOption = await waitFor(() => within(Menu).findByText(list[0].caption));
    expect(MenuOption).toBeInTheDocument();
    expect(MenuOption).toHaveProperty('href', list[0].href);
  });
});

describe('DropdownMenu', () => {
  let DropdownButton: HTMLElement;
  let OutsideDiv: HTMLElement;
  const testId = 'dropdown-button';
  const outsideTestId = 'outside-div';

  beforeEach(() => {
    cleanup();
    render(
      <>
        <div data-testid={outsideTestId} />
        <DropdownMenu options={list}>
          <div data-testid={testId} />
        </DropdownMenu>
      </>,
    );
    DropdownButton = screen.getByTestId(testId);
    OutsideDiv = screen.getByTestId(outsideTestId);
  });

  test('Check if dropdown button functionality', () => {
    waitFor(() => expect(screen.findByRole('menu')).not.toBeInTheDocument());

    fireEvent.click(DropdownButton);
    const Menu = screen.findByRole('menu');
    waitFor(() => expect(Menu).toBeInTheDocument());
  });

  test('Check if the Dropdown is closed after press outside the content', () => {
    fireEvent.click(DropdownButton);
    waitFor(() => expect(screen.findByRole('menu')).toBeInTheDocument());

    fireEvent.mouseDown(OutsideDiv);

    waitFor(() => expect(screen.findByRole('menu')).not.toBeInTheDocument());
  });
});
