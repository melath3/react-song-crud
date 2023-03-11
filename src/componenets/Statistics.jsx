import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALLSTATISTICS } from '../redux/types';

import './statistics.css'



const Statistics = () => {
    const statistics = useSelector(state => state.statistics);



    const dispatch = useDispatch();
    // ******** Fetch all statistics ****** 
    useEffect(() => {
        function getSongs() {
            dispatch({ type: GET_ALLSTATISTICS })
        }
        getSongs();
    }, []);

    return (



        <>

            <section id="statistic" className="statistic-section one-page-section">

                <div className="container">
                    <div className="row text-center">

                        <div className="col-xs-12 col-md-3" key={statistics.id}>
                            <div className="counter">
                                <h2 className="timer count-title count-number">Total Number</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p className="count-title">Titles: {statistics.totalNumberForAllFields?.title}</p>
                                    <p className="count-title">Genre: {statistics.totalNumberForAllFields?.genre}</p>
                                    <p className="count-title">Album: {statistics.totalNumberForAllFields?.album}</p>
                                    <p className="count-title">Artist: {statistics.totalNumberForAllFields?.artist}</p>
                                </div>
                                <h2 className="timer count-title count-number">All artists songs count</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {statistics?.allArtistsSongCount?.map((artist) => {
                                        return (<p className="count-title">Artist {artist?._id} ({artist?.count} song), &nbsp;</p>)
                                    })}
                                </div>
                                <h2 className="timer count-title count-number">All albums songs count</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {statistics?.allSongsInAlbumCount?.map((album) => {
                                        return (<p className="count-title">Album {album?._id} ({album?.count} song), &nbsp;</p>)
                                    })}
                                </div>
                                <h2 className="timer count-title count-number">All genre songs count</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {statistics?.allSongsInGenreCount?.map((genre) => {
                                        return (<p className="count-title">Genre {genre?._id} ({genre?.count} song), &nbsp;</p>)
                                    })}
                                </div>
                            </div>
                        </div>``
                    </div>
                </div>
            </section>

        </>
    )
}

export default Statistics;