const heading = React.createElement('div', { id: 'heading' }, [React.createElement('h1', {}, 'h1 tag'), React.createElement('h2', {}, 'h2 tag')])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)