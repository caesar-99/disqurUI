import { Komment } from "./Domain/Komment";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface CommentProps{
    comment: Komment;
}

export const CommentCard = ({comment} : CommentProps)=>{
    return (
        <div>
            <div><h1>{comment.commentDetail}</h1></div>
        </div>
    )
}