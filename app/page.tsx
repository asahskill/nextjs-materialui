'use client';

import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  AppBar, 
  Toolbar, 
  IconButton,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material UI Next.js
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Material UI
          </Typography>
          <Typography variant="h5" gutterBottom>
            A beautiful, accessible, and performant React component library
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ mr: 2, bgcolor: 'white', color: 'primary.main' }}
            >
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Features
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          {[
            { icon: <CodeIcon fontSize="large" />, title: 'Modern Components', desc: 'Beautiful, pre-built components ready to use' },
            { icon: <BuildIcon fontSize="large" />, title: 'Easy Customization', desc: 'Flexible theming system for complete control' },
            { icon: <SpeedIcon fontSize="large" />, title: 'Fast Performance', desc: 'Optimized for speed and accessibility' },
          ].map((feature, index) => (
            <Card key={index} sx={{ flex: 1, textAlign: 'center', py: 4 }}>
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#333', color: 'white', py: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          © 2026 Material UI Next.js Starter. Built with Material UI.
        </Typography>
      </Box>
    </Box>
  );
}