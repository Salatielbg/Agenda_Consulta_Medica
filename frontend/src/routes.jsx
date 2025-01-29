import{
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { Details } from './components/Details/Details';
import { HomePage } from './components/HomePage/HomePage';
import { Database } from './components/Database/Database';


export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Details/:id' element={<Details />} />
                <Route path='/Database' element={<Database />} />
            </Routes>
        </Router>
    )
}
