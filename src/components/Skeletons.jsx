import { Skeleton, Grid, Container } from '@mui/material/';

export default function Skeletons() {

    return (

        <Container sx={{ mt: 5 }} >
            <Grid container spacing={3} >
                <Grid item xs={12} md={5}>
                    <Skeleton variant="h2" height={50} />
                    <Skeleton variant="rectangular" height={400} sx={{ mt: 3 }} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Skeleton variant="h4" height={50} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="h4" height={30} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Skeleton variant="h4" height={50} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                    <Skeleton variant="p" sx={{ mt: 3 }} />
                </Grid>
            </Grid>
        </Container>
    )
}