import { BasketItem } from "./BasketItem";

export function BasketList(props) {
	const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype } = props;

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price.regularPrice * el.quantity
	}, 0);

	return <div className="collection basket-list">
		<li className="collection-item basket-list-close"><span>Корзина</span> <i className="material-icons basket-close" onClick={handleBasketShow}>close</i></li>
		{
			order.length ? order.map(item => (
				<BasketItem key={item.mainId} {...item} removeFromBasket = {removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
			)) : <li className="collection-item">Корзина пуста</li>
		}
		<li className="collection-item active">Общая стоимость:{totalPrice} руб.</li>
		<li className="collection-item "><buttons className="btn btn-small">Оформить</buttons></li>
	</div>
}