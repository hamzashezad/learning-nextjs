import { loadStripe } from '@stripe/stripe-js/pure';

let stripePromise;

export default async function getStripe() {
	if (! stripePromise) {
		stripePromise = await loadStripe(process.env.stripe.public_key);
	}

	return stripePromise;
};
