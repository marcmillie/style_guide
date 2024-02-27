import './App.css';

function App() {
  return (
  <div className="App">
      <h1>My Style Guide</h1>
      <div className="container">
        <h1>Colors</h1>
        <p className="green">Light Green</p>
        <p>#a1ef88</p>
        <p className="gray">Dark Slate Gray</p>
        <p>#0B5351</p>
        <p className="periwinkle">Periwinkle</p>
        <p>#B8CDF8</p>
        <p className="fandango">Fandango</p>
        <p>#BD2D87</p>
        <p className="orchid">Orchid</p>
        <p>#D664BE</p>
      </div>
      <div>
        <div className="container">
          <h1>Fonts</h1>
          <div className='font-container'>
            <div className='font-box'>
              <p>Source Code Pro</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
            </div>
            <div className='font-box'>
              <p>Source Code Pro</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
            </div>
            <div className='font-box'>
              <p>Source Code Pro</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
              <p>Nunc sed augue lacus viverra vitae congue eu.</p>
            </div>
          </div>
        </div>
        <div className='container'>
        <h1>Text Styles</h1>
          <div className='text-container'>
            <div className='text-box'>
              <h1>H1: Main page heading</h1>
              <ul>
                <li>Font-weight:700 (bold)</li>
                <li>Font-size: 26px</li>
                <li>Font-family: Nunito Sans</li>
              </ul>
            </div>
            <div className='text-box'>
              <h1>H2: Subheading</h1>
              <ul>
                <li>Font-weight: 500</li>
                <li>Font-size: 18px</li>
                <li>Font-family: Poppins</li>
              </ul>
            </div>
            <div className='text-box'>
              <h1>P: Paragragh Text</h1>
              <ul>
                <li>Font-weight:400(regular)</li>
                <li>Font-size: 14px</li>
                <li>Font-family: Poppins</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
  </div>
  );
}

export default App;
