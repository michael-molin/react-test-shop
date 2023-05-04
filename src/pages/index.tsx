import {useEffect, useState} from "react";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import categories from '@/components/category/variables'
import Category from "@/components/category/Category";
import {ProductInterface} from "@/components/product/Interface";
import {CategoryInterface} from "@/components/category/Interface";
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
        <div className="App">
          <CartProvider>
            <Header />
            <div className="return-to-main-menu">
              {category !== '' && <a  onClick={ () => setCategory('noList')}>Return to Main Menu</a>}
            </div>
            <div className="App-body">
              {category === '' && categories.map(category => (
                  <Category key={category.id} title={category.title} image={category.image} handlerClick={setCategory} />
              ))}
              {(category !== '' && productsToShow !== null) &&
                  <div className={'name'}>
                      {productsToShow.map((product => (
                          <Product key={product.id} id={product.id} price={product.price} image={product.image} description={product.description} name={product.name} />
                          )))
                      }
                  </div>
              }
            </div>
          </CartProvider>
      </div>
      </main>
    </>
  )
}