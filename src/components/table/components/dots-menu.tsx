import DropdownMenu from '../../dropdown-menu/dropdown-menu';
import dotsIcon from '../../../images/Icons-dots-vertical.svg';

type Props = {
  options: MenuItem[];
};

export default function ItemDotsMenu({ options }: Props) {
  return (
    <DropdownMenu options={options}>
      <img src={dotsIcon} />
    </DropdownMenu>
  );
}
