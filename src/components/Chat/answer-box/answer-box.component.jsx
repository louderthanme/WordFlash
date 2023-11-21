import { List, ListItem, Alert, Sheet, Box } from "@mui/joy";
import { StyledTypography } from "../../../utils/styledComponents";
import GeneralLoadingSpinner from "../../ui/loading/general-loading-spinner.component";

const AnswerBox = ({ response, checks, isLoading, isSearchInitiated }) => {
  
  const { isMobile, isTablet } = checks;
 
  return (
    <Box
    sx={{ 
      height: '60vh', 
      borderRadius:5,
      width: isMobile ? '100%' : isTablet ? '80%' : '50%',
      margin:'auto',
      padding: isMobile ? 1 : 2,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      }}>
    {
    
    
    isLoading ? (
      <GeneralLoadingSpinner />
    ) : (
      <Sheet
        variant="solid" 
        color="primary"
        sx={{
          borderRadius: 5,
          padding: 3,
          width: '90%',
          marginBotton: 2,
        }}>

      {!response.errorMessage ? (
           <>
          <StyledTypography level="h4">
            Original Word: {response.originalWord}
          </StyledTypography>
        
          <StyledTypography level="h4">
            English Translation: {response.englishTranslation}
          </StyledTypography>
        
          <StyledTypography level="h5">
            Classification: {response.classification}
          </StyledTypography>

          <StyledTypography level="h5">Spanish Definitions:</StyledTypography>

          <List>
            {response.spanishDefinition.map((definition, index) => (
              <ListItem key={index} aria-label={`Spanish definition ${index + 1}`}>{definition}</ListItem>
            ))}
          </List>
          
          <StyledTypography level="h5">Example Sentences:</StyledTypography>
          <List>
            {response.exampleSentences.map((sentence, index) => (
              <ListItem key={index} aria-label={`Example sentence ${index + 1}`}>{sentence}</ListItem>
            ))}
          </List>
          <StyledTypography level="h5">
            Note: {response.note}
          </StyledTypography>
        
          </>

      ) : 
      (
      <Alert 
        role="alert"
        severity="error"
        color="danger"
        sx={{ textAlign: 'center' }}
      >
        {response.errorMessage}
      </Alert>

      )}

      </Sheet>
    )}
    </Box>

  );
};

export default AnswerBox;
