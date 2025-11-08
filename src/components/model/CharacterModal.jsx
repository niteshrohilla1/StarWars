import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { closeModal } from "../../store/slices/CharactersSlice";
import { cmToMeters, formatDate, safeMass } from "../../utlis/format";
import ModalPortal from "../ModalPortal";
import CharacterHeader from "./CharacterHeader";
import DetailGrid from "./DetailGrid";
import HomeworldSection from "./HomeworldSection";

export default function CharacterModal() {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.characters.selected);
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    if (person?.homeworld) {
      axios.get(person.homeworld).then((res) => setHomeworld(res.data));
    }
  }, [person]);

  if (!person) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)] bg-[length:3px_3px] opacity-20 pointer-events-none animate-twinkle"></div>
        <div className="relative bg-gradient-to-b from-black/90 to-blue-950/70 text-blue-200 border border-blue-400/30 rounded-3xl shadow-[0_0_50px_10px_rgba(59,130,246,0.4)] w-[92%] sm:w-[80%] md:w-[55%] max-h-[90vh] overflow-y-auto p-8 animate-fadeIn custom-scroll">
          <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-500 via-blue-400 to-red-500 blur-sm"></div>
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-5 right-6 text-blue-400 hover:text-red-400 text-3xl font-bold transition transform hover:scale-125"
          >
            ✕
          </button>
          <CharacterHeader person={person} />
          <DetailGrid
            details={[
              { label: "Height", value: cmToMeters(person.height) },
              { label: "Mass", value: safeMass(person.mass) },
              { label: "Birth Year", value: person.birth_year },
              { label: "Films", value: person.films.length },
              { label: "Date Added", value: formatDate(new Date(), "dd-MM-yyyy") },
            ]}
          />
          <HomeworldSection homeworld={homeworld} />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 blur-sm"></div>
        </div>
      </div>
    </ModalPortal>
  );
}
