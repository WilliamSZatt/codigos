import { Provider } from "react-redux";
import { Header } from "./Components/Header/Header";
import { ProductList } from "./Components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/global-styles";
import { store } from "./redux/store";

//! Componente Funcional do React
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <Header />
      <ProductList />
    </Provider>
  );
}

export default App;
