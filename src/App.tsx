import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { productService } from "./services/productService";
import {
  updateBrands,
  updateProducsInd,
  updateProductTypes,
  updateTags,
} from "./store/actions";
import { useAppDispatch } from "./store/hooks";
import { Status } from "./types/status";

function App() {
  const dispatch = useAppDispatch();
  const serviceCalls = [
    productService.getBrands(),
    productService.getTags(),
    productService.getProductTypes(),
  ];
  dispatch(() => updateProducsInd(Status.Loading));
  Promise.all(serviceCalls)
    .then((response) => {
      const [brands, tags, productTypes] = response;
      dispatch(updateTags(tags));
      dispatch(updateBrands(brands));
      dispatch(updateProductTypes(productTypes));
    })
    .finally(() => {
      dispatch(() => updateProducsInd(Status.Loaded));
    });
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
