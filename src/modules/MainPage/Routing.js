import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from '../Pages/Dashboard';
import ChatRoomPage from '../Pages/ChatRoom';

export default function Routing() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/chat-rooms' element={<ChatRoomPage />} />
    </Routes>

  );
}