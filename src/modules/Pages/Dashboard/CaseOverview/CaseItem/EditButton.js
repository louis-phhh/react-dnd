import { useTheme } from "@emotion/react"
import { Button } from "@mui/material"


export default function EditButton(props) {
  const theme = useTheme();

  return (
    <Button sx={{
      backgroundColor: theme.palette.grey[200],
      borderRadius: theme.spacing(2),
      color: 'inherit',
      textDecoration: 'none',
      textTransform: 'none',
      padding: `${theme.spacing(0.3)} ${theme.spacing(3.5)}`,
      fontWeight: 'bold',
      height: 'fit-content',
      ":hover": {
        backgroundColor: theme.palette.grey[300],
      }
    }}>
      <span>Edit</span>
    </Button>
  )
}