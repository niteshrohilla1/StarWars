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

export default function CharacterList() {
    const dispatch = useDispatch();
    const { items, status, error, page, search, next, previous, selected } = useSelector(
        (state) => state.characters
    );

    useEffect(() => {
        dispatch(fetchCharacters({ page, search }));
    }, [dispatch, page, search]);

    return (
        <div className="w-full md:p-6 lg:p-14">
            {/* Loader */}
            {status && (
                <div className="space-y-12">
                    <Loader />
                </div>
            )}

            {/* Error */}
            {!status && error && (
                <div className="flex justify-center items-center h-64 bg-amber-50 ">
                    <ErrorMessage message={error} />
                </div>
            )}

            {/* Main content */}
            {!status && !error && (
                <div className="space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {items.map((person) => (
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
