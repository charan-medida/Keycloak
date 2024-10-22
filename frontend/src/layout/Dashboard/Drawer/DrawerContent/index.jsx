// project import
import SimpleBar from 'components/third-party/SimpleBar';
import NavCard from './NavCard';
import Navigation from './Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        <NavCard />
      </SimpleBar>
    </>
  );
}
