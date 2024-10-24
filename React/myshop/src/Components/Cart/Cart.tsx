import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const Total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  const dispatch = useDispatch();

  return (
    <S.Conteiner showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CardProductsList>
        {cart.map((product) => (
          <S.CardProductsItem key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => dispatch(removeProduct(product))}>
              Remover
            </button>
          </S.CardProductsItem>
        ))}
      </S.CardProductsList>

      <S.CardTotal>Total: ${Total}</S.CardTotal>
    </S.Conteiner>
  );
};
