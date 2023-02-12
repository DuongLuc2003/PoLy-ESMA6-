import ProductList from "@/components/ProductList";
import { products } from "@/data";
const product = () => {
  console.log(products)
  return `<div class="container"><div class="row">
        ${ProductList({products})}
  </div></div>`
}

export default product;