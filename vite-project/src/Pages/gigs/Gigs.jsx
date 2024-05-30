import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../Data.js";
import GigCard from "../../Components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs-component">
      <div className="gigs-container">
        <span className="gigs-breadcrumbs">
          Digically / Graphics & Design /
        </span>
        <h1>AI Artists</h1>
        <p className="gigs-para">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="gigs-menu">
          <div className="gigs-left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="gigs-right">
            <span className="gigs-sortBy">Sort by</span>
            <span className="gigs-sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="../img/down.png" alt="" onClick={() => setOpen(!open)} />
            <div className={`gigs-rightMenu ${open ? "show" : ""}`}>
              {sort === "sales" ? (
                <span onClick={() => reSort("createdAt")}>Newest</span>
              ) : (
                <span onClick={() => reSort("sales")}>Best Selling</span>
              )}
              <span onClick={() => reSort("sales")}>Popular</span>
            </div>
          </div>
        </div>

        <div className="gigs-cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
