import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Schedule } from '../pages/Schedule';
import { Appointment } from '../pages/Appointment';

// Rotas para usuário logado
// Routes envolve as Rotas existentes
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/new' element={<New/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route path='/appointment' element={<Appointment/>} />
        </Routes>
    )
}