import { createSlice } from "@reduxjs/toolkit";

const songs = createSlice({
    name: 'songs',
    initialState: [{
        _id: 0,
        title: '',
        artist: '',
        album: '',
        genre:''
    }],
    reducers: {
        setSongsSlice: (state, action) => {
            console.log('-----------Set all songs reducer-----------');
            state = action.payload
            return state
        },
        getSongsSlice: (state, action) => {
            console.log('--------Get all songs reducer------------');
            state = action.payload
            return state
        },
        addSongSlice: (state, action) => {
            console.log('-------Add song reducer--------');
            console.log(action);
            state.push(action.payload)
            return state
        },
        editSongSlice: (state, action) => {
            console.log('------Edit song reducer--------');
            const updatedSong = action.payload;
            state = state.map(song => song._id === updatedSong._id ? updatedSong : song)
            return state;
        },
        SongInGenreSlice: (state, action) => {
            console.log('--------Get all songs reducer------------');
            state = action.payload
            return state
        },
        SongInAlbumSlice: (state, action) => {
            console.log('--------Get all songs reducer------------');
            state = action.payload
            return state
        },
        SongInArtistSlice: (state, action) => {
            console.log('--------Get all songs reducer------------');
            state = action.payload
            return state
        },
        deleteSongSlice: (state, action) => {
            console.log('-------Delete song reducer--------');
            state = state.filter(song => {  
                return song._id !== action.payload;
            })
            return state
        }
    }
})
export const { setSongsSlice, getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice, SongInGenreSlice, SongInAlbumSlice, SongInArtistSlice} = songs.actions
export default songs.reducer

