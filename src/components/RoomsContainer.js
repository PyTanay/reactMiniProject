import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';

function RoomsContainer({context}){
    const {loading,rooms,sortedRooms}=context
    if(loading){
        return <Loading />
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}


export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../Context';
// import Loading from './Loading';

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     console.log(value);
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading />
//                     }
//                     return(
//                         <div>
//                             Hello from rooms container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }

// export default RoomsContainer
