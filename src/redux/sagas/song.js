import { getSongs, getSongByIdAPI, createSongAPI, updateSongAPI, deleteSongByIdAPI, getTotalStatistics, getSongInGenre, getSongInAlbum, getSongInArtist } from '../../api/api'
import { setSongSlice } from '../slice/song'
import { setSongsSlice, addSongSlice, deleteSongSlice, editSongSlice, SongInGenreSlice, SongInAlbumSlice, SongInArtistSlice} from '../slice/songs'
import { statisticsSongsSlice } from '../slice/statistics'
import { CREATE_SONG, DELETE_SONG_BY_ID, GET_ALLSONG, GET_SONG_BY_ID, UPDATE_SONG_BY_ID,GET_ALLSTATISTICS, GET_SONG_IN_GENRE, GET_SONG_IN_ALBUM, GET_SONG_IN_ARTIST } from '../types'
import { put, takeEvery } from 'redux-saga/effects'

export function* getSongsSaga() {
    console.log('Get Songs Saga called!');
    const songs = yield getSongs();
    yield put(setSongsSlice(songs.data))
}

export function* getSongByIdSaga(action) {
    console.log('Get Song By ID Saga called!');
    yield getSongByIdAPI(action.id)
    yield put(setSongSlice(action.id))
}
export function* createSongSaga(action) {
    console.log('Create Song called! Saga');
    const res = yield createSongAPI(action.song)
    yield put(addSongSlice(res.data))
}

export function* updateSongSaga(action) {
    console.log('Update Song By ID Saga called!');
    console.log(action);
    const updatedSong = action.song;
    yield updateSongAPI(updatedSong);
    yield put(editSongSlice(updatedSong))
}

export function* deleteSongByIdSaga(action) {
    console.log('Delete Song By ID Saga called!');
    yield deleteSongByIdAPI(action.id)
    yield put(deleteSongSlice(action.id))
}

export function* getTotalStatisticsSaga(action) {
    console.log('Statistics Song By ID Saga called!');
    const stats = yield getTotalStatistics();
    yield put(statisticsSongsSlice(stats.data))
}

export function* getSongInGenreSaga(action) {
    console.log('Delete Song By ID Saga called!');
    const genre = yield getSongInGenre();
    yield put(SongInGenreSlice(genre.data))
}

export function* getSongInAlbumSaga(action) {
    console.log('Delete Song By ID Saga called!');
    const album = yield getSongInAlbum()
    yield put(SongInAlbumSlice(album.data))
}

export function* getSongInArtistSaga(action) {
    console.log('Delete Song By ID Saga called!');
   const artist =  yield getSongInArtist()
    yield put(SongInArtistSlice(artist))
}


export function* watchUsersAsync() {
    yield takeEvery(GET_ALLSONG, getSongsSaga)
    yield takeEvery(GET_SONG_BY_ID, getSongByIdSaga)
    yield takeEvery(CREATE_SONG, createSongSaga)
    yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga)
    yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga)
    yield takeEvery(GET_ALLSTATISTICS, getTotalStatisticsSaga)
    yield takeEvery(GET_SONG_IN_GENRE, getSongInGenreSaga)
    yield takeEvery(GET_SONG_IN_ALBUM, getSongInAlbumSaga)
    yield takeEvery(GET_SONG_IN_ARTIST, getSongInArtistSaga)

}