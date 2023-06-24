/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate, useParams } from 'react-router-dom';
import FinancialProductForm from '../components/templates/financial-product-form';
import { useProductContext } from '../context/products-context';

export default function EditProduct() {
  const { actions } = useProductContext();
  const { productId } = useParams();
  const navigate = useNavigate();
  const defaultValues = productId ? actions.getProductById(productId) : null;

  return (
    <FinancialProductForm
      defaultValues={defaultValues}
      formType='Update_Product'
      onSubmit={async (data) => {
        await actions.updateProduct(data);
        navigate('/');
      }}
    />
  );
}
