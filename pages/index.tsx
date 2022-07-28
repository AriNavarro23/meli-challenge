import React from "react";
import { GetServerSideProps } from "next";
import api from "../products/api";
import {Product} from "../products/types"

interface Props{
  results: Product[];
}

const IndexPage: React.FC<Product> = (results) => {
  console.log({results})
  return <div>Hello World</div>;
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const results = await api.search(query.q as string);

  return{
    props: {
      results,
    },
  };
};

export default IndexPage;