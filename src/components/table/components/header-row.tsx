import styles from '../../../styles/table.module.scss';
import ToolTip from '../../tool-tip/tool-tip';

type Props = {
  headers: Record<keyof DataItem, string>;
  description: Record<keyof DataItem, string>;
};

export default function HeaderRow({ headers, description }: Props) {
  return (
    <thead className={styles.table_header}>
      <tr>
        <th>{headers.logo}</th>
        <th>
          <div>
            {headers.name}
            <ToolTip description={description.name} />
          </div>
        </th>
        <th>
          <div>
            {headers.description}
            <ToolTip description={description.description} />
          </div>
        </th>
        <th>
          <div>
            {headers.date_release}
            <ToolTip description={description.date_release} />
          </div>
        </th>
        <th>
          <div>
            {headers.date_revision}
            <ToolTip description={description.date_revision} />
          </div>
        </th>
        <th></th>
      </tr>
    </thead>
  );
}
