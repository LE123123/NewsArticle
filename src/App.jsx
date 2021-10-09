import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from 'components/NewsPage';

const App = () => <Route path="/:category?" component={NewsPage} />;

export default App;

// axios 는 http 요청을 Promise 기반으로 처리해주는 자바스크립트 Http 클라이언트 이다.
