import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { productService } from "./services/productService";
import {
  updateBrands,
  updateBrandsInd,
  updateTags,
  updateTagsInd,
  updateProductTypes,
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
  Promise.all(serviceCalls)
    .then((response) => {
      const [brands, tags, productTypes] = response;
      dispatch(updateTags(tags));
      dispatch(updateBrands(brands));
      dispatch(updateProductTypes(productTypes));
    })
    .finally(() => {
      setTimeout(() => {
        dispatch(updateTagsInd(Status.Loaded));
        dispatch(updateBrandsInd(Status.Loaded));
      }, 1500);
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
