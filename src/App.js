import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, actions, trendings, comedies, horrors, romantics, documentaries} from "./endPoints";
import { AppProvider } from "./context";

function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <AppProvider>
        <RowPost title="Netflix Originals" url={originals}/>
        <RowPost title="Trendings" isSmall url={trendings}/>
        <RowPost title="Action Movies" isSmall url={actions}/>
        <RowPost title="Comedy Movies" isSmall url={comedies}/>
        <RowPost title="Horror Movies" isSmall url={horrors}/>
        <RowPost title="Romantic Movies" isSmall url={romantics}/>
        <RowPost title="Documentaries" isSmall url={documentaries}/>
        </AppProvider>
    </div>
  );
}

export default App;
