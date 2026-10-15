const sessions = new Map([
	["demo-a", { userId: 101, expiresAt: 2000 }],
	["demo-b", { userId: 102, expiresAt: 2000 }],
	["demo-expired", { userId: 101, expiresAt: 500 }],
]);

const orders = [
	{ id: "order-1", userId: 101, total: 1500 },
	{ id: "order-2", userId: 102, total: 900 },
	{ id: "order-3", userId: 101, total: 450 },
];

// These numbers are an artificial clock for this exercise.
const now = 1000;

function getMyOrders(sessionId) {
	const session = sessions.get(sessionId);
	if (!session) {
		return { status: 401, orders: [] };
	}
	if (!session?.userId || session?.expiresAt <= now) {
		return { status: 401, orders: [] };
	}
	const data = orders.filter((order) => order?.userId === session.userId);
	return { status: 200, orders: data };
}

console.log(getMyOrders("demo-a"));
console.log(getMyOrders("demo-b"));
console.log(getMyOrders("demo-c"));
console.log(getMyOrders("demo-expired"));
