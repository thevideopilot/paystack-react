import "./App.css"
import { useState } from "react"
import { PaystackButton } from "react-paystack"

function App() {
	const { REACT_APP_PUBLIC_KEY } = process.env
	const publicKey = REACT_APP_PUBLIC_KEY
	console.log(REACT_APP_PUBLIC_KEY === publicKey)
	const amount = 1000000 // Always in the least possible denomination eg Kobo for NGN
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")

	const componentProps = {
		email,

		amount,

		metadata: {
			name,

			phone,
		},

		publicKey,

		text: "Pay Now",

		currency: "USD",

		onSuccess: () =>
			alert("Thanks for doing business with us! Come back soon!!"),

		onClose: () => alert("Wait! You need this oil, don't go!!!!"),
	}

	return (
		<div className="App">
			<div className="container">
				<div className="item">
					<div className="overlay-effect"></div>

					<img
						className="item-image"
						src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
						alt="product"
					/>

					<div className="item-details">
						<p className="item-details__title">Coconut Oil</p>

						<p className="item-details__amount">NGN</p>
					</div>
				</div>

				<div className="checkout">
					<div className="checkout-form">
						<div className="checkout-field">
							<label>Name</label>

							<input
								type="text"
								id="name"
								onChange={e => setName(e.target.value)}
							/>
						</div>

						<div className="checkout-field">
							<label>Email</label>

							<input
								type="text"
								id="email"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>

						<div className="checkout-field">
							<label>Phone</label>

							<input
								type="number"
								id="phone"
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</div>

			<PaystackButton className="paystack-button" {...componentProps} />
		</div>
	)
}

export default App
