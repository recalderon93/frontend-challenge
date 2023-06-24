/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import styles from '../../styles/form.module.scss';
import Button from '../button/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputFieldWrapper from '../input-field/input-field';
import { yupResolver } from '@hookform/resolvers/yup';
import financialProductSchema from '../../utils/form-validation';
import { useEffect } from 'react';
import getFormDefaultValues from '../../utils/get-form-default-values';

type Props = {
  formType: 'Add_Product' | 'Update_Product';
  defaultValues?: DataItem | null;
  onSubmit: SubmitHandler<DataItem>;
  title?: string;
};

export default function Form({
  defaultValues,
  formType,
  onSubmit,
  title = 'Formulario de Registro',
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<DataItem>({
    defaultValues: defaultValues ? getFormDefaultValues(defaultValues) : getFormDefaultValues(),
    resolver: yupResolver(financialProductSchema),
  });

  // Watched Values
  const releaseDate = watch('date_release');
  const revisionDate = watch('date_revision');

  useEffect(() => {
    if (releaseDate) {
      setValue(
        'date_revision',
        new Date(releaseDate.getFullYear() + 1, releaseDate.getMonth(), releaseDate.getDate()),
      );
    }
  }, [releaseDate]);

  useEffect(() => {}, [defaultValues]);

  return (
    <form role='form' className={styles.container}>
      <div className={styles.top}>
        <h1>{title}</h1>
      </div>
      <div className={styles.content}>
        <InputFieldWrapper
          label='ID'
          fieldName='id'
          register={register}
          type='text'
          disabled={formType === 'Update_Product'}
          errorMsg={errors['id']?.message}
        />
        <InputFieldWrapper
          label='Nombre'
          fieldName='name'
          register={register}
          type='text'
          errorMsg={errors['name']?.message}
        />
        <InputFieldWrapper
          label='Descripción'
          fieldName='description'
          register={register}
          type='text'
          errorMsg={errors['description']?.message}
        />
        <InputFieldWrapper
          label='Logo'
          fieldName='logo'
          register={register}
          type='text'
          errorMsg={errors['logo']?.message}
        />
        <InputFieldWrapper
          label='Fecha Liberación'
          fieldName='date_release'
          register={register}
          type='date'
          value={releaseDate}
          onChange={(e) => setValue('date_release', new Date(e.target.value))}
          errorMsg={errors['date_release']?.message}
        />
        <InputFieldWrapper
          label='Fecha de Revisión'
          fieldName='date_revision'
          register={register}
          type='date'
          value={revisionDate}
          onChange={(e) => setValue('date_revision', new Date(e.target.value))}
          disabled
          errorMsg={errors['date_revision']?.message}
        />
      </div>
      <div className={styles.bottom}>
        <Button type='button' variant='secondary' title='Reiniciar' onClick={() => reset()} />
        <Button
          type='button'
          variant='primary'
          title='Enviar'
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
        />
      </div>
    </form>
  );
}
