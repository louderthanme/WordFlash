import { useContext, useState, useEffect } from 'react';
import { WordsContext } from '../../contexts/words.context';
import { ThemeValuesContext } from '../../contexts/theme-values.context';

import {  Sheet  } from '@mui/joy';

import Words from '../../components/Words/words.component'
import WordsControl from '../../components/Words/words-control/words-control';
import GeneralLoadingSpinner from '../../components/ui/loading/general-loading-spinner.component';

const Collection = () => {

    const { theme, checks } = useContext(ThemeValuesContext);
    const {isMobile, isTablet, isLaptop, isDark} = checks;
    const { isLoading, words, alphabeticalWords, classificationWords, deleteWordFromCollection } = useContext(WordsContext);


    const [sort, setSort] = useState('Alphabetical');
    const [sortedWords, setSortedWords] = useState(alphabeticalWords);
    const [view, setView] = useState('List');

    const controlFontSize = isMobile ? '1rem' : isTablet ? '1.3rem' : isLaptop ? '1.3rem' : '1.8rem';
    const controlMarginL = isMobile ? '' : isTablet ? '6.8rem' : isLaptop ? '11rem' : '17rem';
    const controlMarginR = isMobile ? '3.8rem' : isTablet ? '8.5rem' : isLaptop ? '11.2rem' : '17rem';
    const headerFontSize = isMobile ? '.9rem' : isTablet ? '1.2rem' : isLaptop ? '1.3rem' : '1.5rem';
    const headerPadding = isMobile ? '1.2rem' : ''
    const wordClassificationsFontSize = isMobile ? '.7rem' : isTablet ? '1rem' : isLaptop ? '1.2rem' : '1.3rem';
    const wordFontSize = isMobile ? '.5rem' : isTablet ? '.8rem' : isLaptop ? '1rem' : '1.2rem';
    
    const style = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      };

    useEffect(() => {
        if (sort === 'Alphabetical') {
            setSortedWords(alphabeticalWords)
        } else {
            setSortedWords(classificationWords)
        }
    }, [sort, words, alphabeticalWords, classificationWords])

    const handleSort = () => {
      if(sort === 'Alphabetical') {
        setSort('Classification')
        setSortedWords(classificationWords)
      }  else {
        setSort('Alphabetical')
        setSortedWords(alphabeticalWords)
      }
    }

    const handleView = () => { 
        if(view === 'List') {
            setView('Flashcard')
        } else {
            setView('List')
        }
    }

    if (isLoading) {
        return (
          <GeneralLoadingSpinner checks={checks}/>
        )
    }

      return (
            <Sheet
            variant="soft"
            color="neutral"
            sx={{
                width: "100%",
                height: `calc(100vh - 60px)`,
                display: "flex",
                flexDirection: "column",
                position: 'relative',
                overflowY: 'auto', 
                overflowX: 'hidden', 
                '&::-webkit-scrollbar': {
                  width: '5px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: theme.colorSchemes.light.palette.warning[300],
                  borderRadius: '10px',
                  marginLeft: '5px',
                },
              
              //firefox
                scrollbarWidth: 'thin',
                scrollbarColor:  theme.colorSchemes.light.palette.warning[300],
            }}
            >
            <WordsControl checks={checks} theme={theme} style={style} fontSize={controlFontSize} handleSort={handleSort} handleView={handleView} mr={controlMarginR} ml={controlMarginL}/>

            <Words words={sortedWords} sort={sort} view={view} deleteWord={deleteWordFromCollection} style={style} checks={checks} theme={theme} headerFontSize={headerFontSize} classificationFontsize={wordClassificationsFontSize} headerPadding={headerPadding} wordFontSize={wordFontSize}/>
         
        </Sheet>
      );
    }
    
    
    export default Collection;