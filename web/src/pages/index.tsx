import { Button } from "@/components/Button";
import { Header } from "@/components/organism/header";
import { MovieItem, MovieItemProps } from "@/components/molecule/Movie/Item";
import { Modal } from "@/components/organism/Modal";
import {imageLoader, onScroll} from "@/utils";
import api from "@/utils/api";
import * as React from "react";

export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<MovieItemProps | null>(null);

  const fetchMovies = React.useCallback(
    async () => {
      if (currentPage > totalPages || loading) {
        return;
      }
      setLoading(true);
      const {data} = await api.get('/movies')
      setMovies([...movies, ...data.result]);
      setTotalPages(data.meta.total);
      setLoading(false);
    },
    [currentPage, loading]
  );

  React.useEffect(() => {
      onScroll(fetchMovies)
      fetchMovies()
  }, []);


  return (
    <section className={"px-8"}>
      <Header />
      <main>
        <section className={"flex flex-wrap"}>
          {movies.map(
            (movie: { poster: string; title: string } & any, index) => (
              <MovieItem
                {...movie}
                key={movie.title + index}
                url={movie.title}
                image={movie.poster}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedItem(movie);
                }}
              />
            )
          )}
        </section>
      </main>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          {selectedItem && (
            <div>
              <img
                className="w-full h-60 object-cover object-top"
                src={imageLoader({ src: selectedItem.poster })}
                alt="A Quiet Place movie poster"
              />
              <div className="p-4">
                <div className={"flex align-center"}>
                  <Button classes={"justify-center align-center flex"}>
                    <i className={"material-icons"}>play_circle</i> Play
                  </Button>
                </div>
                <h1 className="text-2xl font-bold">{selectedItem.title}</h1>
                <p className="text-gray-500 text-sm">{selectedItem.description}</p>
              </div>
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}
