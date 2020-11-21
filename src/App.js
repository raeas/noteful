import React from 'react';
import './App.css';
import STORE from './dummy-store'
import SideBar from './SideBar'
import {Route} from 'react-router-dom'
import Header from './Header'
import FolderList from './FolderList'
import Note from './Note'

class App extends React.Component {
  state = {
    notes: STORE.notes,
    folders: STORE.folders
  }
  render() {
    console.log(this.state)
    return (
      <main style={{display:'flex'}}>
        <section>
          <Route path='/' component={Header} />
          {/* <Route path='/' component={Header} /> */}
          <Route path='/' component={SideBar} />
        </section>
        <section>
          <Route path='/folder/:folderId' component={FolderList} />
          <Route path='/' component={FolderList} />
          <Route path='/note/:noteId' component={Note} />
        </section>
      </main>
    );
  }
}

export default App;
