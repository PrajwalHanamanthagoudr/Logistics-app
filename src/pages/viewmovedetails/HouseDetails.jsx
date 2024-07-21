import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';

const DetailRow = ({ label, value }) => (
    <Grid item xs={12} md={3} mt={2}>
        <strong style={{ fontSize: '14px' }}>{label}</strong>
        <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'}>{value || '-'}</Typography>
    </Grid>
);

const HouseDetails = ({ move }) => {
    return (
        <>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} mt={3}>
                <Typography mb={2} fontFamily="Poppins, sans-serif" fontWeight={699} variant="body1" gutterBottom>
                    House Details
                </Typography>
                <Button
                    size="small"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        textTransform: 'capitalize',
                        color: 'white',
                        bgcolor: 'black',
                        boxShadow: 'none',
                        '&:hover': {
                            color: '#eb5541',
                            bgcolor: '#fff',
                            boxShadow: 'none',
                            border: '1px solid #eb5541'
                        }
                    }}
                    variant="contained"
                >
                    Edit house details
                </Button>
            </Stack>
            <Box mt={3}>
                <Typography mb={2} fontFamily="Poppins, sans-serif" fontWeight={699} sx={{ color: '#eb5541' }} variant="body1" gutterBottom>
                    Existing House Details
                </Typography>
                <Grid container spacing={{ xs: 1, sm: 0 }}>
                    <DetailRow label="Floor No." value={move.old_floor_no} />
                    <DetailRow label="Elevator Available" value={move.old_elevator_availability} />
                    <DetailRow label="Packing Required" value={move.packing_service} />
                    <DetailRow label="Distance from truck to door" value={move.old_parking_distance} />
                    <DetailRow label="Additional Information" value={move.old_house_additional_info} />
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography mb={2} fontFamily="Poppins, sans-serif" fontWeight={699} sx={{ color: '#eb5541' }} variant="body1" gutterBottom>
                    New House Details
                </Typography>
                <Grid container spacing={{ xs: 1, sm: 0 }}>
                    <DetailRow label="Floor No." value={move.new_floor_no} />
                    <DetailRow label="Elevator Available" value={move.new_elevator_availability} />
                    <DetailRow label="Packing Required" value={move.packing_service} />
                    <DetailRow label="Distance from truck to door" value={move.new_parking_distance} />
                    <DetailRow label="Additional Information" value={move.new_house_additional_info} />
                </Grid>
            </Box>
        </>
    );
};

export default HouseDetails;
