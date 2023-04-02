import React from 'react';
import CurrHeading  from "./Curriculum/CurrHeading";
import ContextWrapper from "./appContext";
import { DragDropContext } from 'react-beautiful-dnd';

const App  = () => {
  return (
    <ContextWrapper>
      <CurrHeading/>
    </ContextWrapper>
  )
}

export default App