
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'


export const getSongs = async () => axios.get('/songs');


export const getSongByIdAPI = async (id) => axios.get(`/songs/${id}`)
    

export const createSongAPI = async (song) =>  axios.post(`/songs`, song)


export const updateSongAPI = async (song) => axios.put(`/songs/${song._id}`, song)

export const deleteSongByIdAPI = async (id) => axios.delete(`/songs/${id}`)

export const getTotalStatistics = async () => axios.get(`/statistics`);

export const getSongInGenre = async () => axios.get(`/songInGenre`);

export const getSongInAlbum = async () => axios.get(`/songInAlbum`);

export const getSongInArtist = async () => axios.get(`/songInArtist`);



