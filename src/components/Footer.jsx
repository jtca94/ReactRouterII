import { Typography, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <footer className='bgFooter'>
            <Container sx={{ py: 4 }}>
                <Typography variant="body1" align="center" color="lightgrey" sx={{ mb: 2 }}>
                    &copy; 2023 PokeDex desarrollada por José Cannobbio
                </Typography>
                <div align="center">
                    <Link href="https://github.com/jtca94" target="_blank" rel="noopener" sx={{ mx: 1, color: 'lightgrey' }}>
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.instagram.com/jtcannobbio/" target="_blank" rel="noopener" sx={{ mx: 1, color: 'lightgrey' }}>
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.facebook.com/tomas.cannobbio" target="_blank" rel="noopener" sx={{ mx: 1, color: 'lightgrey' }}>
                        <FacebookIcon />
                    </Link>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
