import { Box } from "@mui/joy";
import GeneralLoadingSpinner from "../../ui/loading/general-loading-spinner.component";
import FlashCard from "../../FlashCard/flash-card.component";
import Instructions from "../../FlashCard/instructions.component";

const AnswerBox = ({ response, checks, isLoading, isSearchInitiated, handleSubmit }) => {
  

  return (
<Box sx={{ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    padding: 2,
  }}
>
  {!isSearchInitiated ? (
    <Instructions checks={checks}  />
  ) : isLoading ? (
    <GeneralLoadingSpinner  />
  ) : (
    <FlashCard response={response} checks={checks} handleSubmit={handleSubmit}  />
  )}

</Box>

)};

export default AnswerBox;
