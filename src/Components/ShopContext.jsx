import { createContext, useMemo, useState } from "react";
import { productData } from "../data";
import { toast } from 'react-toastify'
export const ShopContext = createContext()
export const ShopContextProvider = ({ children }) => {
      // products
      const [products, setProducts] = useState(productData)
      // cart
      const [cart, setCart] = useState([])
      // total
      const total = useMemo(() => {
            return cart.reduce((acc, item) => acc + parseFloat(item.price) * item.amount, 0)
      }, [cart])
      // quantity
      const quantity = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.amount, 0)
      }, [cart])
      // add to cart
      const addToCart = (products) => {
            setCart((prev) => {
                  const exist = prev.find((item) => item.id === products.id);
                  if (exist) {
                        toast.success('Add to Products');  // ✅ ផ្លាស់ទី toast មកនៅនេះ
                        return prev.map((item) =>
                              item.id === products.id
                                    ? { ...item, amount: item.amount + 1 }
                                    : item
                        );
                  }
                  toast.success('Add to Products');
                  return [...prev, { ...products, amount: 1 }];  // ✅ កែ + 1 → 1
            });
      };
      // increase quantity
      const inCreaseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item))
      }
      // decrease quantity
      const deCreaseQuantity = (id) => {
            const cartItem = cart.find((item) => {
                  return item.id === id
            });
            if (cartItem) {
                  const newCart = cart.map((item) => {
                        if (item.id === id) {
                              return { ...item, amount: cartItem.amount - 1 }
                        } else {
                              return item
                        }
                  })
                  setCart(newCart)
            } else {
                  if (cartItem.amount < 2) {
                        removeFormCart()
                  }
            }
      }
      // remove cart
      const removeFormCart = (id) => {
            setCart((prev) => prev.filter((item) => item.id !== id))
            toast.success('Removed Porducts')
      }
      // clear cart
      const clearCart = () => {
            setCart([])
            toast.success('Cleared Products');
      }
      return (
            <ShopContext.Provider value={{
                  products,
                  setProducts,
                  cart,
                  setCart,
                  total,
                  quantity,
                  addToCart,
                  inCreaseQuantity,
                  deCreaseQuantity,
                  removeFormCart,
                  clearCart,
            }}>
                  {children}
            </ShopContext.Provider>
      )
}
export default ShopContextProvider