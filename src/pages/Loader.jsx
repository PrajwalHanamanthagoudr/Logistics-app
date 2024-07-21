import { Box, Container, Grid, Skeleton, Typography } from '@mui/material'

const Loader = () => {
  return (
    <Container >
    <Typography mb={2} fontFamily={'Poppins, sans-serif'} fontWeight={699} variant="body1" gutterBottom>My Moves</Typography>
    {[...Array(4)].map((_, idx) => (
      <Box key={idx} sx={{mt:2}}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} container spacing={2}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={3} key={index}>
                 {index === 1 ? (
                      <Skeleton  variant="circular" width={40} height={40} />
                    ) : (
                      <Skeleton   variant="rectangular" width="100%" height={40} />
                    )}
                
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} container spacing={2}>
            {[...Array(7)].map((_, index) => (
              <Grid item xs={1.7} key={index}>
                <Skeleton sx={{borderRadius:'20px'}} variant="rectangular" width="100%" height={40} />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} container spacing={2}>
            {[...Array(2)].map((_, index) => (
              <Grid item xs={index === 0 ? 2 : 7} key={index}>
                <Skeleton sx={{borderRadius:'10px'}} variant="rectangular" width="100%" height={30} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    ))}
  </Container>

  )
}

export default Loader
