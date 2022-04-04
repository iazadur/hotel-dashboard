import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useHotel from '../../hooks/useHotel';
import FormButton from '../FormButton';

function AddHotelsForm() {
    const { register, handleSubmit } = useForm();
    const {  onSubmit } = useHotel();
   

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* hotel name and code  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Name</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Hotel Name" color="success" {...register("name")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* hotel address   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Address</Typography>
                        <textarea placeholder="Hotel Address"
                            className="textArea" {...register("address")}
                        ></textarea>
                    </Box>
                </Grid>
            </Grid>

            {/* hotel telephone and button */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Telephone</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Hotel Telephone" color="success" {...register("telephone")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Code</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Hotel Code" color="success" {...register("code")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Hotel" />
            </Box>
        </form>
    );
}

export default AddHotelsForm;