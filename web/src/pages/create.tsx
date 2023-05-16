import { Button } from "@/components/Button";
import { Header } from "@/components/organism/header";
import { MovieItem, MovieItemProps } from "@/components/molecule/Movie/Item";
import { Modal } from "@/components/organism/Modal";
import {AddMovie, Movie} from "@/components/template/AddMovie";
import api from "@/utils/api";
import * as React from "react";

export default function Home() {

    const handleSubmit = async (movie: Movie) => {
        try {
            const formData = new FormData();
            for (const key in movie) {
                formData.append(key, movie?.[key as never])
            }
            const response = await api.post('/movies', formData);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className={"px-8"}>
      <Header />
      <main className={'p-5 mx-auto mx-y flex justify-center'}>
          <AddMovie handleSubmit={handleSubmit} />
      </main>
    </section>
  );
}
