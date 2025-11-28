// Placeholder API service. Replace fetch URLs with your backend endpoints.
export async function fetchProducts(){
  return fetch('/api/products.json').then(r => r.ok ? r.json() : [])
    .catch(()=> []);
}

export async function fetchLessons(){
  return fetch('/api/lessons.json').then(r => r.ok ? r.json() : [])
    .catch(()=> []);
}
