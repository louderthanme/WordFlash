import { IconButton, Typography, Grid } from "@mui/joy";
import { MdDelete } from "react-icons/md";

const Word = ({ word, deleteWord, style, isDark, fontSize, padding }) => {

    console.log('From word component','wordfontsize', fontSize, )

    return (
        <Grid container alignItems="center" sx={{py:1}}>
            <Grid xs={4} sx={style}>
                <Typography variant="plain" color={isDark ? "primary" : "danger"} sx={{ml: padding, fontSize:fontSize, fontWeight:500, textAlign:'center', }}>
                    {word.originalWord.toUpperCase()}
                </Typography>
            </Grid>
            <Grid xs={4} sx={style}>
                <Typography variant="plain" color={isDark ? "primary" : "danger"} sx={{ml: padding, fontSize:fontSize, fontWeight:500, textAlign:'center', }}>
                    {word.englishTranslation.toUpperCase()}
                </Typography>
            </Grid>
            <Grid xs={4} sx={style}>
                <IconButton
                    variant="outlined"
                    color={isDark ? "danger" : "warning"}
                    onClick={() => deleteWord(word)}
                    sx={{
                        fontSize: fontSize,
                        mr: padding,
                    }}                
                >
                    <MdDelete/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Word;
