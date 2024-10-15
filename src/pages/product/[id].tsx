import { Router, useRouter } from "next/router";
const DetailProductPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Product</h1>
      <h2>Product : {query.id} </h2>
    </div>
  );
};

export default DetailProductPage;
