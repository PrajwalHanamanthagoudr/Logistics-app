import { Box, Grid, Stack, Typography } from '@mui/material';

const LivingRoomDetails = ({ move }) => {
    return (
        <>
            <Box mt={3}>
                <Grid item xs={12} container spacing={{ xs: 1, sm: 6 }}>
                    {move.items.inventory.map((category) => (
                        <Grid item xs={12} md={3} key={category.id}>
                            <Typography mb={3}
                                fontFamily={'Poppins, sans-serif'} fontWeight={999} variant="h6" gutterBottom>{category.displayName}</Typography>
                            {category.category.map((item) => (
                                <Stack direction={'row'} justifyContent={'space-between'} key={item.id}>
                                    <Box mb={2}>

                                        {item.items.map((subItem) => (
                                            <Box key={subItem.id}>
                                                <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'} mb={1}>{subItem.displayName}</Typography>
                                               
                                            </Box>
                                        ))}
                                        <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'} fontWeight={666} mb={1}>{item.displayName}</Typography>
                                    </Box>
                                    <Box>
                                        {item.items.map((subItem) => (
                                            <Box key={subItem.id}>
                                                <Typography fontSize={'12px'} fontFamily={'Poppins, sans-serif'} fontWeight={666}>{subItem.qty}</Typography>

                                            </Box>
                                        ))}
                                    </Box>
                                </Stack>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default LivingRoomDetails;
