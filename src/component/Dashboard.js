import { ChakraProvider } from "@chakra-ui/react";
import Header from "../component/Header.js";
import Hero from "../component/Hero.js";
import Footer from "../component/Footer.js";
import { useState } from "react";

export default function Dashboard() {
  // State to manage search values
  const [search, setSearch] = useState({
    from: '',
    to: '',
    AC: '',
    date: ''
  });

  // Handle changes in search values
  const handleSearchValue = (value) => {
    setSearch(prevValues => ({
      ...prevValues,
      from: value.from,
      to: value.to,
      AC: value.AC,
      date: value.date,
    }));
  };

  return (
    <ChakraProvider>
      <Header />
      <Hero onChangeValue={handleSearchValue} />
      <Footer />
    </ChakraProvider>
  );
}
