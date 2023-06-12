import { useEffect, useState } from "react";
import { fetchPokemonInfo } from "~/service/fetchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ChangePage({ data, setLoadNewPokemons }) {
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null);

  useEffect(() => {
    setNextPage(data.next);
    setPreviousPage(data.previous);
    setNumberOfPages(Math.floor(data.count / 20) + 1);
  }, [data]);

  async function handlePrevClick() {
    setCurrentPage(currentPage - 1);
    const resp = await fetchPokemonInfo(previousPage);
    setNextPage(resp.next);
    setPreviousPage(resp.previous);
    setLoadNewPokemons(resp);
  }

  async function handleNextClick() {
    setCurrentPage(currentPage + 1);
    const resp = await fetchPokemonInfo(nextPage);
    setNextPage(resp.next);
    setPreviousPage(resp.previous);
    setLoadNewPokemons(resp);
  }

  return (
    <div className="btn-container">
      <button
        onClick={handlePrevClick}
        disabled={!previousPage}
        className="previous-btn"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="current-page">{`${currentPage} / ${numberOfPages}`}</div>
      <button
        onClick={handleNextClick}
        disabled={!nextPage}
        className="next-btn"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
