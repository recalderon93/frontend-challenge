import ProductsContextProvider from './products-context';

type Props = React.PropsWithChildren;

export default function MainContext({ children }: Props) {
  return <ProductsContextProvider>{children}</ProductsContextProvider>;
}
