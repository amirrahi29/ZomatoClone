import {useState,useEffect} from 'react'

const UseProductApi = (product1) => {

  const [product, setProducts] = useState(product1);

  useEffect(() => {
    getProducts();
});

const getProducts=async()=>{
    let result = await fetch("https://fakestoreapi.com/products");
    result = await result.json();
    console.log(result);
    setProducts(result);
}

  return [product,setProducts];
}

export default UseProductApi