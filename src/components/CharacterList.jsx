import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCharacters,
    selectCharacter,
} from "../store/slices/CharactersSlice";
import CharacterCard from "./cardComponents/CharacterCard"
import CharacterModal from "./model/CharacterModal";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Pagination from "./Pagination";
import FilterBar from "./FilterBar";

export default function CharacterList() {
    const dispatch = useDispatch();
    const { items, status, error, page, search, next, previous, selected } = useSelector(
        (state) => state.characters
    );

    useEffect(() => {
        dispatch(fetchCharacters({ page, search }));
    }, [dispatch, page, search]);
    const filters = useSelector((state) => state.characters.filters);

    const filteredCharacters = items.filter((person) => {
        const matchesHomeworld =
            !filters.homeworld || person.homeworld === filters.homeworld;
        const matchesFilm =
            !filters.film || person.films?.includes(filters.film);
        const matchesSpecies =
            !filters.species || person.species === filters.species;

        return matchesHomeworld && matchesFilm && matchesSpecies;
    });


    return (
        <div className="w-full md:p-6 lg:px-14 lg:py-6">
            <FilterBar />
            {status && (
                <div className="space-y-12">
                    <Loader />
                </div>
            )}
            {!status && error && (
                <div className="flex justify-center items-center h-64 bg-amber-50 ">
                    <ErrorMessage message={error} />
                </div>
            )}
            {!status && !error && (
                <div className="space-y-12 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                        {filteredCharacters.map((person) => (
                            <CharacterCard
                                key={person.url}
                                person={person}
                                onClick={() => dispatch(selectCharacter(person))}
                            />
                        ))}
                    </div>
                    <Pagination next={next} previous={previous} />
                    {selected && <CharacterModal />}
                </div>
            )}
        </div>
    );
}
