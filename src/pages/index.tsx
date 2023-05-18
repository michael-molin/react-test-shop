import {useEffect, useState} from "react";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import categories from '@/components/category/variables'
import Category from "@/components/category/Category";
import {ProductInterface} from "@/components/product/Interface";
import {burgerList, friesList, beverageList} from '@/components/product/variables'
import Header from "@/components/header/Header";
import CartProvider from "@/store/CartProvider";
import Product from "@/components/product/Product"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [category, setCategory] = useState('');
  const [productsToShow, setProductsToShow] = useState <ProductInterface[] | null> (null);

  useEffect( () => {
    let selectedCategory = categories.find(elementCategory => elementCategory.title === category );
    if(selectedCategory !== undefined) {
        if(selectedCategory.title === 'Burger') {
            setProductsToShow(burgerList);
        } else if(selectedCategory.title === 'Fries') {
            setProductsToShow(friesList);
        } else if(selectedCategory.title === 'Beverage') {
            setProductsToShow(beverageList);
        }
    }
  }, [category]);
  return (
    <>
      <Head>
        <title>React Order Food</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <CartProvider>
            <Header />
            <div className={styles.main_return}>
              {(category !== '') && <a  onClick={ () => setCategory('')}>Return to Main Menu</a>}
            </div>
            <div className={styles.main_container}>
              {(category === '') && categories.map(category => (
                  <Category key={category.id} title={category.title} image={category.image} handlerClick={setCategory} />
              ))}
              {(category !== '' && productsToShow !== null) &&
                  <div className={styles.main_products}>
                      {productsToShow.map((product => (
                          <Product key={product.id} id={product.id} price={product.price} image={product.image} description={product.description} name={product.name} />
                          )))
                      }
                  </div>
              }
            </div>
          </CartProvider>
      </main>
    </>
  )
}
