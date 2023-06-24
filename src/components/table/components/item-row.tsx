import dateParser from '../../../utils/date-parser';
import styles from '../../../styles/table.module.scss';
import ItemDotsMenu from './dots-menu';
import editIcon from '../../../images/Icons-edit-05.svg';
import deleteIcon from '../../../images/Icons-trash-01.svg';

type Props = {
  data: DataItem;
  onDeleteItem: (id: string) => void;
};

export default function ItemRow({ data, onDeleteItem }: Props) {
  const options = [
    { caption: 'Editar', href: `/edit_product/${data.id}`, icon: editIcon },
    {
      caption: 'Eliminar',
      href: '/',
      icon: deleteIcon,
      onClick: () => onDeleteItem(data.id),
    },
  ];

  return (
    <tr>
      <td>
        <img className={styles.table_logo} src={data.logo} alt={`${data.name} Logo`} />
      </td>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{dateParser(new Date(data.date_release), 'DD/MM/YYYY')}</td>
      <td>{dateParser(new Date(data.date_revision), 'DD/MM/YYYY')}</td>
      <td>
        <ItemDotsMenu options={options} />
      </td>
    </tr>
  );
}
