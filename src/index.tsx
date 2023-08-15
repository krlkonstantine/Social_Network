import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import {renderEntireTree} from "./render";


store.subscribe(renderEntireTree)
renderEntireTree()


