import { UseFormRegister } from 'react-hook-form';
import styles from '../../styles/inputs.module.scss';
import dateParser from '../../utils/date-parser';
import variables from '../../styles/variables.module.scss';

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorMsg?: string;
  fieldName: keyof DataItem;
  type: 'text' | 'date';
  register: UseFormRegister<DataItem>;
  value?: string | Date;
  disabled?: boolean;
};

export default function InputFieldWrapper({
  label,
  value,
  type,
  errorMsg,
  fieldName,
  register,
  onChange,
  disabled = false,
}: Props) {
  const style = errorMsg ? { borderColor: variables.colorError900, borderWidth: 2 } : {};
  const inputValue =
    type === 'date' && value instanceof Date ? dateParser(value, 'YYYY-MM-DD') : undefined;

  if (type === 'date') {
    return (
      <div className={styles.input_field}>
        <label htmlFor={fieldName} className={styles.label}>
          {label}
        </label>
        <input
          style={style}
          type={type}
          value={inputValue}
          onChange={onChange}
          disabled={disabled}
          aria-label={`${fieldName}`}
        />
        <span className={styles.error_msg}>{errorMsg}</span>
      </div>
    );
  }

  return (
    <div className={styles.input_field}>
      <label className={styles.label}>{label}</label>
      <input
        style={style}
        type={type}
        aria-label={fieldName}
        defaultValue={inputValue}
        disabled={disabled}
        {...register(fieldName)}
      />
      <span className={styles.error_msg}>{errorMsg}</span>
    </div>
  );
}
