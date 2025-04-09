import Header from "./myComponents/Header";
import Introduction from "./myComponents/Introduction";
import Entry from "./myComponents/Entry";
import songsData from "./data/songsData.json";

export default function App() {

  const entries = songsData.map(entry => 
    <Entry
      key={entry.id}
      {...entry}
    />
    )

  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        {entries}
      </main>
    </div>
  );
}