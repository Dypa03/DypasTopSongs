import React, { useEffect } from "react";
import Header from "./myComponents/Header";
import Introduction from "./myComponents/Introduction";
import Entry from "./myComponents/Entry";
import songsData from "./data/songsData.json";
import BackToTopButton from "./myComponents/BackToTopButton";

function fadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
  });
}


export default function App() {
  useEffect(() => {
    fadeIn();
  }, []);

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
        <BackToTopButton />
        {entries}
      </main>
    </div>
  );
}