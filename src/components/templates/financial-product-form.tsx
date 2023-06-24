/* eslint-disable camelcase */
import { SubmitHandler } from 'react-hook-form';
import styles from '../../styles/templates.module.scss';
import Form from '../form/form';
import Header from '../header/header';

type Props = {
  defaultValues?: DataItem | null;
  formType: 'Add_Product' | 'Update_Product';
  onSubmit: SubmitHandler<DataItem>;
};

export default function FinancialProduct({ defaultValues, formType, onSubmit }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <Form formType={formType} defaultValues={defaultValues} onSubmit={onSubmit} />
    </div>
  );
}
