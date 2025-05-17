import React from 'react';
import {getInitials} from '../../utils/helper'
const CharAvatar = ({fullName,width,height,style}) => {
    return(
        <div
            className= {`${width ||"w-12"} ${height ||"h-12"}  ${style || "text-2xl"}
            flex items center justify-center rounded-full text-yellow-500 bg-gray-300 font-medium mt-6`}>
            {getInitials(fullName || "")}
            </div>
    );
};
export default CharAvatar;