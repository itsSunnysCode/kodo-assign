import React, { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./Home.module.css";
import { matchQuery, sortByProperty } from "./helper";
import ListingPage from "../ListingPage";
import DataTable from "../DataTable";
import { useDebounce } from "../../customHooks/useDebounce";
import data from "../../data";
const selectOptions = ["name", "last edited", "none"];

function Home() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const isSortSelected = useMemo(
    () => selectOptions.slice(0, 2).includes(sortBy),
    [sortBy]
  );
  const changePage = useCallback(
    (selectedPage) => {
      if (
        selectedPage >= 1 &&
        selectedPage <= Math.ceil(items.length / 10) &&
        selectedPage !== page
      ) {
        setPage(selectedPage);
      }
    },
    [page, items]
  );

  useEffect(() => {
    const { cachedSearch, cachedSort } =
      JSON.parse(localStorage.getItem("filterKeys")) || {};
    if (cachedSearch || cachedSort) {
      setSearch(cachedSearch);
      setSortBy(cachedSort);
    } else {
      setItems(data);
    }
  }, []);

  const setFilter = (dbSrch, sort) => {
    let filteredData;
    if (dbSrch) {
      filteredData = data.filter(
        (d) => matchQuery(dbSrch, d.name) || matchQuery(dbSrch, d.description)
      );
    }
    if (isSortSelected) {
      filteredData = sortByProperty(
        filteredData?.length > 0 ? filteredData : data,
        sort
      );
    }
    setPage(1);
    setItems(filteredData?.length > 0 ? filteredData : data);
  };
  useEffect(() => {
    localStorage.setItem(
      "filterKeys",
      JSON.stringify({ cachedSearch: debouncedSearch, cachedSort: sortBy })
    );
    setFilter(debouncedSearch, sortBy);
  }, [debouncedSearch, sortBy]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h2 style={{ marginLeft: "10px" }}>Feed</h2>

        <div className={styles.filter}>
          <input
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            placeholder="sort by"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            {selectOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <ListingPage items={items} changePage={changePage} page={page} />
        <DataTable items={items} />
      </div>
    </div>
  );
}

export default Home;
