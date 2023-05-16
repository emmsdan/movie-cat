import { Button } from "@/components/Button";
import { InputField, SelectField } from "@/components/organism/Input";
import * as React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export interface Movie {
  title: string;
  description: string;
  poster: null | File | string;
  backdrop: string;
  genres: string[];
  year: string;
}

interface AddMovieProps {
  handleSubmit: (movie: Movie) => void;
}
export const AddMovie = ({ handleSubmit }: AddMovieProps) => {
  const initialValue: Movie = {
    title: "",
    description: "",
    poster: null,
    backdrop: "",
    genres: [],
    year: "",
  }
  const [form, setForm] = React.useState<Movie>(initialValue);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setForm({
        ...form,
        poster: file,
        backdrop: reader.result as string,
      });
    };
  };
  const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setForm({
      ...form,
      genres: [...form.genres, genre],
    });
  };
  const handleRemoveGenre = (genre: string) => {
    const newGenres = form.genres.filter((g) => g !== genre);
    setForm({
      ...form,
      genres: newGenres,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisabled(true);
    for (const key in form) {
      if (form[key as keyof Movie] === "" && key !== "backdrop") {
        return;
      }
    }
   await handleSubmit(form);
    setForm(initialValue);
    setDisabled(false)
  };

  React.useEffect(() => {
    if (
      form.title &&
      form.description &&
      form.poster &&
      form.genres.length > 0 &&
      form.year
    ) {
      setDisabled(false);
    }
  }, [form]);

  return (
    <section>
      <div className="space-y-12 mx-auto">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <InputField
                label={"Movie Title"}
                placeholder={"Movie Title. eg God's are to be blamed."}
                id={"title"}
                onChange={handleForm}
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={handleForm}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few words about the movie.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className={"flex"}>
                <label htmlFor={'file-upload'} className="flex-1 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <div
                        className="relative outline-0 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleUpload}
                        />
                      </div>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </label>
                {form.backdrop && (
                  <div className="ml-3 mt-2 flex-1">
                    <img
                      src={form.backdrop}
                      alt={form.title}
                      className={"w-full h-52 object-cover rounded-lg"}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <SelectField
                label={
                  <>
                    Genres <small>Genres. eg Action, Adventure, Comedy </small>
                  </>
                }
                options={[
                  { value: "", label: "Select Genres" },
                  { value: "Action", label: "Action" },
                  { value: "Adventure", label: "Adventure" },
                  { value: "Comedy", label: "Comedy" },
                  { value: "Drama", label: "Drama" },
                ]}
                id={"genres"}
                onChange={handleGenre}
              />
              <div className="mt-3 text-sm leading-6 text-gray-600">
                {form.genres.map((genre, index) => (
                  <span
                    onClick={() => handleRemoveGenre(genre)}
                    key={index}
                    className={
                      "text-gray-50 p-2 bg-teal-500 mr-2 cursor-pointer rounded"
                    }
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-full">
              <InputField
                label={"Release Year"}
                placeholder={"Release Date. eg 2021"}
                id={"year"}
                maxLength={4}
                onChange={handleForm}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="reset" outline>
          Cancel
        </Button>
        <Button disabled={disabled} onClick={onSubmit} type="button">
          Save & Add Movie
        </Button>
      </div>
    </section>
  );
};
