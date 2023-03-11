import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { setSongSlice } from '../redux/slice/song';
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../redux/types"
// ******* Modal ********** //
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';





const SongForm = ({isModalOpen, handleClose}) => {

    const [open, setOpen] = React.useState(isModalOpen);

    function handleOpen() {
        setOpen(true);
      }

    useEffect(() => {
        function updateModal() {
          open ? handleOpen() : handleClose();
        }
        updateModal();
     }, [open]);

    const song = useSelector(state => state.song)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setSongSlice({ ...song, [prop]: event.target.value }))
    }
    const handleSubmit = () => {
        song._id === 0 ? dispatch({ type: CREATE_SONG, song }) : dispatch({ type: UPDATE_SONG_BY_ID, song })
        handleClose();
    }

   

     

return (
    <div>
        <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle>{ song._id === 0 ? 'New Song' : 'Update song'} </DialogTitle>
        <DialogContent>
        <DialogContentText>
            To add or edit song to this website, please fill out the form here.  We
            will save your preference.
          </DialogContentText>
           {song._id ? (<TextField style={{ margin: '10px' }}  value={song._id} fullWidth disabled />) : null}
        <TextField style={{ margin: '10px', width: 'calc(50% - 25px)' }} onChange={handleChange('title')} placeholder="Enter Title" value={song.title} />
        <TextField style={{ margin: '10px', width: 'calc(50% - 25px)' }} onChange={handleChange('artist')} placeholder="Enter Artist" value={song.artist} />
        <TextField style={{ margin: '10px', width: 'calc(50% - 25px)' }} onChange={handleChange('album')} placeholder="Enter Album" value={song.album} />
        <TextField style={{ margin: '10px', width: 'calc(50% - 25px)' }} onChange={handleChange('genre')} placeholder="Enter Genre" value={song.genre} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button style={{ margin: '10px' }} onClick={() => handleSubmit()} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SongForm