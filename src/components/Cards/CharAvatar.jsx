import React from 'react';
import {getInitials} from '../../utils/helper'
const CharAvatar = ({fullName,width,height,style}) => {
    return(
        <div
            className= {`${width ||"w-12"} ${height ||"h-14"}  ${style || "text-2xl"}
            flex items-center justify-center rounded-full text-yellow-500 bg-gray-100 font-medium mt-0`}>
            {getInitials(fullName || "")}
            </div>
    );
};
export default CharAvatar;