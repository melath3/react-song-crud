import { createSlice } from "@reduxjs/toolkit";

const statistics = createSlice({
    name: 'statistics',
    initialState: [{
        totalNumberForAllFields: [],
        allArtistsSongCount: [],
        albuallSongsInAlbumCountm: []
    }],
    reducers: {
        statisticsSongsSlice: (state, action) => {
            console.log('--------Count all songs,albums,artist,genre reducer------------');
            state = action.payload
            return state
        }
    }
})
export const { statisticsSongsSlice} = statistics.actions
export default statistics.reducer

