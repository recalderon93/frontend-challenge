/* eslint-disable @typescript-eslint/ban-ts-comment */
import DropdownMenuItemsWrapper from './components/menu';
import styles from '../../styles/dropdown-menu.module.scss';
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  options: MenuItem[];
};

export default function DropdownMenu({ children, options }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function toggleOpen() {
    setOpen((st) => !st);
  }

  function checkIfOutsideIsClicked(e: MouseEvent) {
    // @ts-ignore
    if (e.target && ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    // Add event listener to check if the user clicks outside the dropdown menu
    document.addEventListener('mousedown', checkIfOutsideIsClicked);
    return () => {
      removeEventListener('mousedown', checkIfOutsideIsClicked);
    };
  }, []);

  return (
    <div ref={ref} role='button' onClick={toggleOpen} className={styles.dropdown_button}>
      {children}
      {open && <DropdownMenuItemsWrapper options={options} />}
    </div>
  );
}
