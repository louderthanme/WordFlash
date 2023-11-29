import { Grid, Select, Option, Typography } from "@mui/joy";

const WordsControl = ({theme, checks, style, fontSize, handleView, handleSort}) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;


    return (
<Grid container 
    sx={{
        height: '60px',
        position: 'fixed',
        top: isMobile ? 64 : 68, 
        left: 0, 
        right: 0, 
        zIndex: 1100,
        backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100],
        display: 'flex',	
        flexDirection: 'row',	
    }}
>
    {/* Sort By Section */}
    <Grid container pt={1} xs={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Grid pb={1} xs={12}  sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography level="h2" sx={{ fontSize: fontSize }}>
                SORT BY:
            </Typography>
        </Grid>
        <Grid xs={12} sm={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Select placeholder="Alphabetical" defaultValue="Alphabetical" variant="soft" color="success" size={isMobile ? "sm" : "md"} onChange={handleSort}>
                <Option value="Alphabetical">Alphabetical</Option>
                <Option value="Classification">Classification</Option>
            </Select>
        </Grid>
    </Grid>

    {/* View Section */}
    <Grid container pt={1} xs={6} sx={{display: 'flex', justifyContent: 'center',  flexDirection: 'row' }}>      
        <Grid pb={1} xs={12}  sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography level="h2" sx={{ fontSize: fontSize }}>
                VIEW
            </Typography>
        </Grid>
        <Grid xs={12} sm={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
            <Select placeholder="List" defaultValue="List" variant="soft" color="success" size={isMobile ? "sm" : "md"} onChange={handleView}>
                <Option value="List">List</Option>
                <Option value="Flashcards">Flashcards</Option>
            </Select>
        </Grid>
    </Grid>
</Grid>
    );
}

export default WordsControl;
    