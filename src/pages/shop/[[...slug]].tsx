import { Router, useRouter } from "next/router";
const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Page</h1>
      <h2>
        Shop : {query.slug ? query?.slug[0] : ""} -{" "}
        {query.slug ? query?.slug[1] : ""}
      </h2>
    </div>
  );
};

export default ShopPage;
