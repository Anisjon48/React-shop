export function GoodsItem(props) {
	const {
		mainId,
		displayName,
		displayDescription,
		price,
		granted,
		addToBasket = Function.prototype,
	} = props;

	return <div className="card">
		<div className="card-image">
			<img src={granted[0].images.full_background} alt={displayName} />
		</div>
		<div className="card-content">
			<span className="card-title">{displayName}</span>
			<p>{displayDescription}</p>
		</div>
		<div className="card-action">
			<button className="btn" onClick={() => addToBasket({
				mainId,
				displayName,
				price,
			})}>Купить</button>
			<span className="right price">{price.regularPrice} руб.</span>
		</div>
	</div>
}
