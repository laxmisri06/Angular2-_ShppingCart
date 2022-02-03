import { environment} from 'src/environments/environment'


export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000' 
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'




// export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'https://ng-e-commerce-application6-default-rtdb.firebaseio.com/' 
// export const productsUrl = baseUrl + '/products'
// export const cartUrl = baseUrl + '/cart'