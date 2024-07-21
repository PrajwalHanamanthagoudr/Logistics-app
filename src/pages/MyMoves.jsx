import { useState } from 'react';
import {
    Grid, Typography, Button, Box, IconButton,
    Divider,
    Checkbox,
    FormControlLabel,
    Stack
} from '@mui/material';
import {
    HomeRounded, WidgetsRounded, RouteRounded, InsertInvitationRounded, ArrowForward, EditOutlined, WarningRounded
} from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import InventaryDetails from './viewmovedetails/InventaryDetails';
import HouseDetails from './viewmovedetails/HouseDetails';


const MyMoves = ({ movesData }) => {

    const [showInventory, setShowInventory] = useState(null);

    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, "MMM d, yyyy 'at' h:mm a");
    };

    const handleViewDetailsClick = (index) => {
        setShowInventory(index === showInventory ? null : index);
    };

    return (
        <>
            <Typography mb={2}
                fontFamily={'Poppins, sans-serif'} fontWeight={699} variant="body1" gutterBottom>My Moves</Typography>
            {movesData.map((move, index) => (
                <Box key={index} >
                    <Grid container spacing={3} >
                        <Grid item xs={12} container spacing={{ xs: 1, sm: 0 }} >
                            <Grid item xs={12} md={3.7}>
                                <strong style={{ fontSize: '14px' }}>From</strong>
                                <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'} > {move.moving_from}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} textAlign="center" sx={{ cursor: 'pointer' }}>
                                <ArrowForward sx={{ color: '#eb5541', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '50%', p: 1 }} />
                            </Grid>
                            <Grid item xs={12} md={3.3}>
                                <strong style={{ fontSize: '14px' }}>To</strong>
                                <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{move.moving_to}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <strong style={{ fontSize: '14px' }}>Request#</strong>
                                <Typography fontSize={'12px'} fontWeight={600} fontFamily={'Poppins, sans-serif'} sx={{ color: '#eb5541' }}> {move.estimate_id}</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} container spacing={{ xs: 2, sm: 7 }} alignItems="center">

                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} spacing={.8}>
                                    <HomeRounded sx={{ color: '#eb5541' }} />
                                    <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{move.property_size}</Typography>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} spacing={.8}>
                                    <WidgetsRounded sx={{ color: '#eb5541' }} />
                                    <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{move.items.inventory[0].category[0].items[0].uniquieId}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} spacing={.8}>
                                    <RouteRounded sx={{ color: '#eb5541' }} />
                                    <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{move.distance}</Typography>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} spacing={.8}>
                                    <InsertInvitationRounded sx={{ color: '#eb5541' }} />
                                    <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{formatDate(move.moving_on)}<IconButton><EditOutlined sx={{ fontSize: '18px', mb: 0.6 }} /></IconButton>
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <FormControlLabel control={<Checkbox size='small' sx={{ fontFamily: 'Poppins, sans-serif', color: '#eb5541', '&.Mui-checked': { color: '#eb5541' }, }} checked={move.items.inventory[0].category[0].items[0].meta.hasType} />} label="is flexible" sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '13px'
                                    },
                                }} />
                            </Grid>
                            <Grid item>
                                <Button size='small'
                                    onClick={() => handleViewDetailsClick(index)}
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', textTransform: 'capitalize', color: '#eb5541', border: showInventory === index ? '2px solid blue' : '1px solid #eb5541', boxShadow: 'none',
                                        '&:hover': {
                                            border: showInventory === index ? '1px solid blue' : '1px solid #eb5541'
                                        }


                                    }} variant="outlined">View move details</Button>
                            </Grid>
                            <Grid item>
                                <Button size='small'
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', textTransform: 'capitalize', color: '#fff', bgcolor: '#eb5541', boxShadow: 'none',
                                        '&:hover': {
                                            color: '#eb5541',
                                            bgcolor: '#fff',
                                            boxShadow: 'none',
                                            border: '1px solid #eb5541'
                                        }
                                    }} variant="contained">{move.custom_status}</Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} container alignItems="center" spacing={1}>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <WarningRounded sx={{ color: '#eb5541', fontSize: '15px' }} />
                                    <Typography fontFamily={'Poppins, sans-serif'} fontSize={'12px'}>
                                        <strong>Disclaimer:</strong> Please update your move date before two days of shifting
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        {showInventory === index && (
                            <Grid item xs={10.3}>
                                <InventaryDetails move={move} />
                                <HouseDetails move={move} />
                            </Grid>
                        )}

                        <Grid item xs={10.3} mb={2}>
                            <Divider />
                        </Grid>

                    </Grid>
                </Box>
            ))}
        </>
    )
};

export default MyMoves;
