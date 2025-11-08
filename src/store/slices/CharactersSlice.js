import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people/";

const speciesColors = {
  Human: "#ff3333",
  Droid: "#33aaff",
  Wookiee: "#ffb300",
  "Twi'lek": "#b066ff",
  Rodian: "#00ff99",
  Hutt: "#ffee33",
  Unknown: "#ff3333",
};

const UNSPLASH_KEY = "GgFaeMc10F647oeyVQr-CCRqTliE0oY8ahMbYWZaapE";

const randomImage = async (name) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        name + " star wars dark"
      )}&client_id=${UNSPLASH_KEY}&per_page=1`
    );
    const data = await res.json();

    if (data.results && data.results.length > 0 && data.results[0].urls) {
      return data.results[0].urls.small;
    }

    return `https://picsum.photos/seed/${encodeURIComponent(name)}-starwars/400/300`;
  } catch (err) {
    console.error("Error fetching Unsplash image:", err);
    return `https://picsum.photos/seed/${encodeURIComponent(name)}-fallback/400/300`;
  }
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ page = 1, search = "" }) => {
    const res = await axios.get(`${BASE_URL}?page=${page}&search=${search}`);
    const characters = res.data.results;

    const enhanced = await Promise.all(
      characters.map(async (person) => {
        let species = "Unknown";
        let accentColor = speciesColors["Unknown"];
        let homeworld = "Unknown";
        let films = [];

        try {
          if (person.species && person.species.length > 0) {
            const sRes = await axios.get(person.species[0]);
            species = sRes.data.name || "Unknown";
            accentColor = speciesColors[species] || speciesColors["Unknown"];
          }

          if (person.homeworld) {
            const hRes = await axios.get(person.homeworld);
            homeworld = hRes.data.name;
          }

          if (person.films && person.films.length > 0) {
            const fRes = await Promise.all(
              person.films.map((url) => axios.get(url))
            );
            films = fRes.map((f) => f.data.title);
          }
        } catch {
          // gracefully fallback
        }

        const imageUrl = await randomImage(person.name);

        return {
          ...person,
          species,
          homeworld,
          films,
          accentColor,
          imageUrl,
        };
      })
    );

    return {
      ...res.data,
      results: enhanced,
    };
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    count: 0,
    next: null,
    previous: null,
    status: false,
    error: null,
    page: 1,
    search: "",
    selected: null,
    filters: {
      homeworld: "",
      film: "",
      species: "",
    },
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    selectCharacter: (state, action) => {
      state.selected = action.payload;
    },
    closeModal: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = false;
        state.items = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setPage,
  setSearch,
  selectCharacter,
  closeModal,
  setFilters,
} = charactersSlice.actions;

export default charactersSlice.reducer;
