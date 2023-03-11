import React from 'react'
import styled from 'styled-components';
import {DataGrid}  from "@mui/x-data-grid";
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSongSlice } from '../redux/slice/song';
import { DELETE_SONG_BY_ID, GET_ALLSONG } from '../redux/types';

import SongForm from './SongForm';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'




const SongList = () => {
 const tableData = useSelector(state => state.songs);

 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => {
    setOpen(false);
    // ******** clear store ****** //
    dispatch(setSongSlice({
        _id: 0 , 
        title: '',
        artist: '',
        album: '',
        genre: ''
    }))
};
 
  const dispatch = useDispatch();
  // ******** Fetch all songs ****** //
  useEffect(() => {
     function getSongs() {
         dispatch({ type: GET_ALLSONG})
     }
     getSongs();
  }, []);

  // ******** Handle On Edit Click ****** //
  const onEditClick = (song) => {
     handleOpen();
     dispatch(setSongSlice(song));
}
  

  
// ******** Styled Components ****** //
  const EditButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: darkgreen;
  border: 1px dotted rgba(0, 0, 139, 0.596);
  cursor: pointer;
  `
  const DeleteButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  border: 1px dotted rgba(220, 20, 60, 0.6);
  cursor: pointer;
  `
  const CellAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  `

  

const columns = [
    { field: '_id', headerName: 'Id', width: 300 },
    { field: 'title', headerName: 'Title', width: 200},
    { field: 'artist', headerName: 'Artist', width: 200 },
    { field: 'album', headerName: 'Album', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <CellAction className="cellAction">
                 <EditButton onClick={ () => onEditClick(params.row)}>Edit</EditButton>
                 <DeleteButton onClick={() => dispatch({ type: DELETE_SONG_BY_ID, id:  params.row._id})}>Delete</DeleteButton>  
                 
          </CellAction>
        );
      },
    },
  
  ];

 
  

  return (
    <div className="datatable">
        <Button style={{ margin: '10px' }} onClick={handleOpen} variant="contained">New Song</Button>
        <Button style={{marginTop: '10px', float: 'right'}} variant="contained"> <Link to="/Statistics" style={{color: '#fff'}}>Statistics</Link></Button>
        <SongForm isModalOpen={open} handleClose={handleClose}/>

    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row) =>  row._id}
      />
    </div>
    
    </div>
  )
}


export default SongList


  
    
    
    
  

