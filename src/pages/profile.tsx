import { Container, Box } from '@mui/material';
import ProfileAvatar from '../components/ProfileAvatar';
import DetailsCard from '../components/DetailsCard';
import ProfileTabs from '../components/ProfileTabs';

const ProfilePage = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <ProfileAvatar />
        <Box width="100%"  maxWidth={700} mt={4}>
          <DetailsCard />
        </Box>
        <Box width="100%"  maxWidth={700} mt={8}>
          <ProfileTabs />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
