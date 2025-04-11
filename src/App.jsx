import Header from "./myComponents/Header";
import Introduction from "./myComponents/Introduction";
import Entry from "./myComponents/Entry";
import songsData from "./data/songsData.json";

function fadeIn() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              return;
          } else {
              entry.target.classList.remove('in-view');
          }
      });
  });

  const allAnimatedElements = document.querySelectorAll('.fade-in');
  allAnimatedElements.forEach((element) => observer.observe(element));
}

export default function App() {
  fadeIn();

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