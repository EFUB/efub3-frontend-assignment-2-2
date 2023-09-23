import styled from "styled-components";
import { CartItemAtom } from "../recoil/Atom";
import { useRecoilState } from "recoil";

const CartItem = ({ id, name, price, img, quantity }) => {
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);
  const handleMinusQuantity = (id) => {
    const minusQuantity = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItem(minusQuantity);
  };

  const handlePlusQuantity = (id) => {
    const plusQuantity = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItem(plusQuantity);
  };

  const handleDeleteItem = (id) => {
    const deleteItem = cartItem.filter((item) => item.id !== id);
    setCartItem(deleteItem);
  };

  return (
    <Container>
      <DrinkCount>
        <Image>
          <img src={img} alt="drink-img" />
        </Image>
        <ButtonGroup>
          <Button className="minus" onClick={() => handleMinusQuantity(id)}>
            -
          </Button>
          <Button className="quantity">{quantity}</Button>
          <Button className="plus" onClick={() => handlePlusQuantity(id)}>
            +
          </Button>
        </ButtonGroup>
        <DeleteButton onClick={() => handleDeleteItem(id)}>
          <i class="fas fa-times close"></i>
        </DeleteButton>
      </DrinkCount>

      <DrinkDetail>
        <Name>{name}</Name>
        <Price>{price}원</Price>
      </DrinkDetail>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--purple);
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const DrinkCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 8px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  cursor: pointer;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-radius: 4px;
  margin-right: 3px;
  background-color: var(--blue);

  &.quantity {
    font-size: 15px;
  }

  &:hover {
    opacity: 0.4;
  }
`;

const DrinkDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const Price = styled.div`
  font-size: 13px;
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 12px;
  top: 8px;
  color: var(--blue);
  font-size: 20px;
  cursor: pointer;
`;
