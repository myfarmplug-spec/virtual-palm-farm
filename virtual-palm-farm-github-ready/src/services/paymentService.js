// Mock payment service. Replace with Stripe or your provider.
export async function initiatePayment(amount, metadata){ 
  console.log('Initiate payment', amount, metadata);
  return new Promise(res => setTimeout(()=> res({status:'success', id:Date.now()}), 800));
}
