import "./App.scss";
import Header from "./components/header";
import Main from "./components/main";
import { productService } from "./services/productService";
import {
  updateBrands,
  updateProducts,
  updateProductTypes,
  updateTags,
} from "./store/actions";
import { useAppDispatch } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const serviceCalls = [
    productService.getBrands(),
    productService.getTags(),
    productService.getProductTypes(),
  ];
  Promise.all(serviceCalls)
    .then((response) => {
      const [brands, tags, productTypes, products] = response;
      dispatch(updateTags(tags));
      dispatch(updateBrands(brands));
      dispatch(updateProductTypes(productTypes));
      dispatch(updateProducts(products));
    })
    .catch();
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
