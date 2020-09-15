import React, { useCallback, useState } from 'react';
//import axios from 'axios';
import {Router} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
