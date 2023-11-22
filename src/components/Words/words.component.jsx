import { Box, List, ListItem, Grid, Typography } from '@mui/joy';
import Word from './word/word.component';

const Words = ({ words, deleteWord}) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "scroll",
            }}>
            <List sx={{ width: '100%' }}>
                {/* Mapping through the words */}
                {words.map((word, index) => (
                    <Word word={word} key={index} deleteWord={deleteWord} />
                ))}
            </List>
        </Box>
    )
}

export default Words;