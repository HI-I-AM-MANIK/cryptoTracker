import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import LabTabs from '../Components/Dashboard/Tabs';
import Search from '../Components/Dashboard/Search';
import PaginationComponent from '../Components/Dashboard/Pagination';
import Loader from '../Components/Loader';

const API_KEY = 'CG-3j2yzJKLe6VoXJKGBTB9x4mY';
const ITEMS_PER_PAGE = 10; // Define how many coins to display per page

const Dashboardpage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginationCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true); // Initially loading

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Handle search input change
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to page 1 when search changes
  };

  // Fetch coins data from the API
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1&per_page=100',
        {
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': API_KEY,
          },
        }
      )
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCoins(response.data);
          setLoad(false); // Set loading to false once data is fetched
        } else {
          console.error('Unexpected data structure', response.data);
        }
      })
      .catch((error) => {
        console.error('Error>>>', error);
        setLoad(false); // Stop loading even if there is an error
      });
  }, []);

  // Filter coins based on search
  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Paginate the filtered coins
  const totalPages = Math.ceil(filteredCoins.length / ITEMS_PER_PAGE);
  const paginatedCoinsToShow = filteredCoins.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <Header />
      {load ? (
        <Loader />
      ) : (
        <div>
          {/* Pass search value and onSearchChange handler as props */}
          <Search search={search} onSearchChange={onSearchChange} />
          <LabTabs coins={paginatedCoinsToShow} />
          <PaginationComponent
            page={page}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default Dashboardpage;
