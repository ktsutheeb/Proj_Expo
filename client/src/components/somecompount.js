import { API_URL } from './config';

fetch(`${API_URL}/api/your-endpoint`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
.then(response => response.json())
.then(data => console.log(data));
