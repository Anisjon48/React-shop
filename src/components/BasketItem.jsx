export function BasketItem(props) {
	const {
		mainId,
		displayName,
		price,
		quantity,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props

	return <li className="collection-item">
		{displayName} <i class="material-icons basket-quantity" onClick={() => decQuantity(mainId)}>remove</i> {quantity} <i class="material-icons basket-quantity" onClick={() => incQuantity(mainId)}>add</i> = {price.regularPrice * quantity} руб.
		<span class="secondary-content">
			<i class="material-icons delete-goods" onClick={() => removeFromBasket(mainId)}>close</i>
		</span>
	</li>
}