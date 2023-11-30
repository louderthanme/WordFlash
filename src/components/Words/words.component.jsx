import { Grid, Typography, Divider} from '@mui/joy';
import Word from './word/word.component';
import GeneralLoadingSpinner from '../ui/loading/general-loading-spinner.component';

const Words = ({ words, deleteWord, style, theme, wordFontSize, headerFontSize, checks, padding, sort }) => {

    const {isMobile, isTablet, isLaptop, isDark} = checks;


3


    return (
        <>
            <Grid container sx={{height:'60px', position: 'fixed', top: 150, left: 0, right: 0, zIndex: 1100, backgroundColor: isDark ? theme.colorSchemes.dark.palette.neutral[800] : theme.colorSchemes.light.palette.neutral[100] }}>
                <Grid xs={4} sx={{...style}}>
                <Typography  variant='plain'color={isDark ? "danger" : "primary"} level='h2' sx={{fontSize: headerFontSize, ml:padding}}>SPANISH</Typography>
                </Grid>
                <Grid xs={4} sx={{...style}}>
                <Typography variant='plain'color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize}}>ENGLISH</Typography>
                </Grid>
                <Grid xs={4} sx={style}>
                <Typography variant='plain'color={isDark ? "danger" : "primary"}  level='h2' sx={{fontSize: headerFontSize, mr:padding}}>MANAGE</Typography>
                </Grid>
            </Grid>
            <Divider sx={{backgroundColor:theme.colorSchemes.light.palette.primary}} />    
            
            { words && sort === 'Alphabetical' ? 
            <Grid container direction="column" sx={{ pt: '155px' }}>
                {words.map((word, index) => (
                <Word word={word} key={index} style={style} checks={checks} deleteWord={deleteWord} fontSize={wordFontSize} padding={padding} />    
                ))}
            </Grid> : sort === 'Classification' ?
                <Grid container direction="column" sx={{ pt: '155px' }}>
                    <Typography> hello</Typography>
                </Grid>
            :
            <GeneralLoadingSpinner style={{pt:'175px'}} />
            }	
        </>
    )
}

export default Words;
