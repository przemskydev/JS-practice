import setText, { appendText } from './results.mjs';

export async function get() {
  const { data } = await axios.get("http://localhost:3000/orders/1");
  console.log(data)
}

export async function getCatch() {
  try {
    const { data } = await axios.get("http://localhost:3000/orders/1");
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export async function chain() {
  const { data } = await axios.get("http://localhost:3000/orders/1");
  const { data: address } = await axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);

  console.log(`City: ${address.city}`)
}

export async function concurrent() {
  const orderStatus = axios.get("http://localhost:3000/orderStatuses");
  const orders = axios.get("http://localhost:3000/orders");

  const { data: statuses } = await orderStatus;
  const { data: order } = await orders;

  console.log(statuses);
  console.log(order[0])
}

export async function parallel() {
  console.log('')

  await Promise.all([
    (async () => {
      const {data} = await axios.get("http://localhost:3000/orderStatuses")
      console.log(data)
    })(),
    (async () => {
      const {data} = await axios.get("http://localhost:3000/orders")
      console.log(data)
    })(),
  ])
}