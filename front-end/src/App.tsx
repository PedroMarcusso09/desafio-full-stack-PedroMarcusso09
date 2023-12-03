import { RoutesMain } from "./routes/RotesMain";

function App() {
   // Removendo a referência ao estado de carregamento
   // const {loading} = useContext(ClientContext);

   return (
      <div className="App">
         {/* Removendo a condição de carregamento e renderizando sempre RoutesMain */}
         <RoutesMain />
      </div>
   );
}

export default App;
