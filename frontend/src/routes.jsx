import{
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { Details } from './components/Details/Details';
import { HomePage } from './components/HomePage/HomePage';
import { Database } from './components/Database/Database';
import AppointmentWindow from './components/HomePage/TopBar/AppointmentsWindow/AppointmentsWindow';


export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Details/:id' element={<Details />} />
                <Route path='/Database' element={<Database />} />
                <Route path='/Appointments' element={<AppointmentWindow />} />
            </Routes>
        </Router>
    )
}
