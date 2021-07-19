import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Tween } from 'react-gsap';

import Head from 'next/head';
import ProductGridItem from '../src/components/ProductGridItem';
import Pagination from '../src/components/Pagination';
import Image from 'next/image';

import { getProducts, getTotalProductPages, getProductsByCategory } from '../src/services/fetchData';

export const getStaticProps = async () => {
  const totalPages = await getTotalProductPages();
  const products = await getProducts();
  const productsByCategory1 = await getProductsByCategory(16);
  const productsByCategory2 = await getProductsByCategory(17);
  return {
    props: { products, totalPages, productsByCategory1, productsByCategory2 },
  };
};

const Home = ({ products, totalPages, productsByCategory1, productsByCategory2 }) => {
  // Handle Pagination Page changes
  const router = useRouter();
  const handlePageChange = (pageNumber) => {
    router.push({
      pathname: `products/page/${pageNumber.selected + 1}`,
    });
  };

  const sRef = useRef([]);

  return (
    <>
      <Head>
        <title>Home : Next WooCommerce</title>
      </Head>
      <div className="section-1 pt-3">
        <div className="container">
          <Image src="/images/evaly.png" width={1280} height={400} type="intrinsic" alt="" className="m-auto" />
        </div>
      </div>
      <div className="section-2 py-20">
        <div className="container">
          <Tween from={{ y: 50, delay: 0.7, opacity: 0 }} duration={0.5} ease="back.out(1.7)">
            <h2 className="text-left pb-10 text-2xl">Travel</h2>
          </Tween>
          {/* {console.log(productsByCategory)} */}
          {productsByCategory1 ? (
            <>
              <div className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                <Tween from={{ y: 30, delay: 0.7, opacity: 0 }} duration={0.5} stagger={0.1} ease="power3.out">
                  {productsByCategory1.map((product) => {
                    return <ProductGridItem ref={sRef} key={product.id} product={product} />;
                  })}
                </Tween>
              </div>
              {/* <Tween from={{ y: 30, delay: 0.9, opacity: 0 }} duration={0.7} ease="power3.out">
                <div className="paginate-wrap">
                  <Pagination initialPage={1} totalPage={totalPages} onPageChange={handlePageChange} />
                </div>
              </Tween> */}
            </>
          ) : (
            <h1>Something Went Wrong</h1>
          )}
        </div>
      </div>
      <div className="section-2 py-20">
        <div className="container">
          <Tween from={{ y: 50, delay: 0.7, opacity: 0 }} duration={0.5} ease="back.out(1.7)">
            <h2 className="text-left pb-10 text-2xl">Nature</h2>
          </Tween>
          {/* {console.log(productsByCategory)} */}
          {productsByCategory2 ? (
            <>
              <div className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                <Tween from={{ y: 30, delay: 0.7, opacity: 0 }} duration={0.5} stagger={0.1} ease="power3.out">
                  {productsByCategory2.map((product) => {
                    return <ProductGridItem ref={sRef} key={product.id} product={product} />;
                  })}
                </Tween>
              </div>
              {/* <Tween from={{ y: 30, delay: 0.9, opacity: 0 }} duration={0.7} ease="power3.out">
                <div className="paginate-wrap">
                  <Pagination initialPage={1} totalPage={totalPages} onPageChange={handlePageChange} />
                </div>
              </Tween> */}
            </>
          ) : (
            <h1>Something Went Wrong</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
