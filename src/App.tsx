import "./App.scss";
import Header from "./components/header";
import Main from "./components/main";
import { productService } from "./services/productService";
import {
  updateBrands,
  updateBrandsInd,
  updateTags,
  updateTagsInd,
} from "./store/actions";
import { useAppDispatch } from "./store/hooks";
import { Status } from "./types/status";

function App() {
  const dispatch = useAppDispatch();
  const serviceCalls = [productService.getBrands(), productService.getTags()];
  Promise.all(serviceCalls)
    .then((response) => {
      const [brands, tags] = response;
      dispatch(updateTags(tags));
      dispatch(updateBrands(brands));
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
