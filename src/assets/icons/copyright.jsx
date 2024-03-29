// IMPORT LIBRARIES
import React from "react";

const CopyrightIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c1.179 0 2.31-.529 3.136-1.669l1.857 1.218c-1.27 1.811-3.112 2.67-4.993 2.67-3.308 0-6-2.692-6-6s2.691-6 6-6c1.861 0 3.713.844 4.994 2.67l-1.857 1.218c-.832-1.146-1.966-1.669-3.137-1.669-2.084 0-3.781 1.696-3.781 3.781s1.696 3.781 3.781 3.781z"/>        
        </svg>
    );
}

export default CopyrightIcon;
