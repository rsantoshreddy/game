// This component handles the App template used on every page.
import React from 'react';

class App extends React.Component {
    createBody() {
        return '';
    }

    render() {
        return ( < div id = "document-body" > { this.createBody() } < /div>);
    }
}

export default App;
