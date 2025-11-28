// Placeholder auth service. Replace with real auth.
export async function signIn(){ 
  return new Promise(res => setTimeout(()=> res({id:1, name:"Demo User"}), 300));
}
export async function signOut(){ return true }
