import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Stack, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LivingRoomDetails from './LivingRoomDetails';

const InventoryDetails = ({ move }) => {
    const inventoryData = [
        { room: 'Living Room', items: 15, details: <LivingRoomDetails move={move} /> },
        { room: 'Bed Room', items: 6, details: <Typography fontFamily={'Poppins, sans-serif'} >Details of Bed Room</Typography> },
        { room: 'Kitchen', items: 7, details: <Typography fontFamily={'Poppins, sans-serif'} >Details of Kitchen</Typography> },
        { room: 'Bathroom', items: 4, details: <Typography fontFamily={'Poppins, sans-serif'} >Details of Bathroom</Typography> }
    ];

    return (
        <>
            <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} spacing={2}>
                <Typography mb={2}
                    fontFamily={'Poppins, sans-serif'} fontWeight={699} variant="body1" gutterBottom>Inventory Details</Typography>
                <Button size='small'
                    sx={{
                        fontFamily: 'Poppins, sans-serif', textTransform: 'capitalize', color: 'white', bgcolor: 'black', boxShadow: 'none',
                        '&:hover': {
                            color: '#eb5541',
                            bgcolor: '#fff',
                            boxShadow: 'none',
                            border: '1px solid #eb5541'
                        }
                    }} variant="contained">Edit Inventory</Button>
            </Stack>
            <Box mt={3}>
                {inventoryData.map((data, index) => (
                    <Accordion sx={{ mb: 2, bgcolor: '#e7e7e7', boxShadow: 'none' }} key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction="row" spacing={1}>
                                <Typography variant='body1' fontWeight={688} fontFamily={'Poppins, sans-serif'} sx={{ color: '#eb5541' }}>{data.room}</Typography>
                                <Chip size="small" label={data.items} sx={{ color: '#fff', bgcolor: '#eb5541', fontSize: '10px', fontFamily: 'Poppins, sans-serif' }} />
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: '#fff' }}>
                            {data.details}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </>
    );
};

export default InventoryDetails;
