import styled from "styled-components";
import React from 'react';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import {selectRoomId} from "../features/appSlice";
import ChatInput from "../components/ChatInput";
import { useCollection,useDocument} from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";


function Chat() {
    const roomId =useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(roomId &&
        db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    );
    return (
        <ChatContainer>
            <>
           <Header>
               <HeaderLeft>
                   <h4>
                       <strong>
                           #{roomDetails?.data().name}
                       </strong>
                   </h4>
                   <StarBorderOutlinedIcon />
               </HeaderLeft>
               <HeaderRight>
                   <p>
                       <InfoOutlinedIcon /> Details
                    </p>
               </HeaderRight>
           </Header>
           <ChatMessages>
               {roomMessages?.docs.map(doc => {
                   const{message, timestamp,user,userImage} = doc.data();

                   return(
                       <message
                         key ={doc.id}
                         message ={message}
                         timestamp={timestamp}
                         user = {user}
                         userImage = {userImage}
                   />
                   );
            
               })}

               <ChatBottom />

           </ChatMessages>
           <ChatInput
            channelName = {roomDetails?.data().name}
            channelId ={roomId}
           />
           </>

        </ChatContainer>
    );
}

export default Chat;
const ChatMessages = styled.div`

`;
const ChatBottom = styled.div`
padding-bottom:200px;
`;


const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
display:flex;
align-items: center;
>h4{
    display:flex;
    text-transform:lowercase;

}
>h4 >.MuiSVGIcon-root{
    margin-left: 10px;
    font-size: 18px;
}
`;
const HeaderRight = styled.div`

>p{
    display:flex;
    align-items:center;
    font-size:14px;

}
>p >.MuiSVGIcon-root{
    margin-right:5px;
    font-size:16px;
}
`;

const ChatContainer = styled.div`
flex: 0.7;
flex-grow:1;
overflow-y:scroll;
margin-top: 60px;
`; 