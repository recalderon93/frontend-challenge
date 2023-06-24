import FinancialProductForm from '../components/templates/financial-product-form';
import { useProductContext } from '../context/products-context';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const { actions } = useProductContext();
  const navigate = useNavigate();

  return (
    <FinancialProductForm
      formType='Add_Product'
      onSubmit={async (data) => {
        await actions.createProduct(data);
        navigate('/');
      }}
    />
  );
}
