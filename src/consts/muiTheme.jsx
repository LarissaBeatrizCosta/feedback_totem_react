import { createTheme } from "@mui/material"

const bold = '550'
const medium = '400'

export const materialTheme = createTheme({
    
        typography:{
            h1: {
                fontSize: '38px',
                fontWeight:bold,
            },   
            h2: {
                fontSize: '25px',
                fontWeight: medium,
            }, 
        }
    
}) 