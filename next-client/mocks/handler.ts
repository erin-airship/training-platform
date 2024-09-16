import { http, HttpResponse } from 'msw'
import { MOCK_SINGLE_USER } from './users/mockSingleUser';
 
// add url as env here
const BASE_API_URL = process.env.API_URL ?? 'http://localhost:3001';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${BASE_API_URL}/user`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(MOCK_SINGLE_USER)
  }),
]