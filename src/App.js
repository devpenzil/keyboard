import Key from "./components/Key";
import "./App.css";
function App() {

  return (
    <div className="App">
      <div className="keyboard">
        <div className="keyrow">
          <Key uptext={'Esc'} downtext={'o'} />
          <Key uptext={'1 !'} downtext={'F1'} />
          <Key uptext={'2 @'} downtext={'F2'} />
          <Key uptext={'3 #'} downtext={'F3'} />
          <Key uptext={'4 $'} downtext={'F4'} />
          <Key uptext={'5 %'} downtext={'F5'} />
          <Key uptext={'6 ^'} downtext={'F6'} />
          <Key uptext={'7 &'} downtext={'F7'} />
          <Key uptext={'8 *'} downtext={'F8'} />
          <Key uptext={'9 ('} downtext={'F9'} />
          <Key uptext={'0 )'} downtext={'F10'} />
          <Key uptext={'- _'} downtext={'F11'} />
          <Key uptext={'= +'} downtext={'F12'} />
          <Key uptext={'Back'} downtext={''} w={160} />
          <Key uptext={'` ~'} downtext={'*'} />
        </div>
        <div className="keyrow">
          <Key uptext={'Tab'} downtext={''} w={110} />
          <Key uptext={'Q'} downtext={''} />
          <Key uptext={'W'} downtext={''} />
          <Key uptext={'E'} downtext={''} />
          <Key uptext={'R'} downtext={''} /> 
          <Key uptext={'T'} downtext={''} />
          <Key uptext={'Y'} downtext={''} />
          <Key uptext={'U'} downtext={''} />
          <Key uptext={'I'} downtext={''} />
          <Key uptext={'O'} downtext={''} /> 
          <Key uptext={'P'} downtext={''} />
          <Key uptext={'[ {'} downtext={'Prn SC'} />
          <Key uptext={'] }'} downtext={'Scr Lk'} />
          <Key uptext={` |`} downtext={'Rec'} w={110} />
          <Key uptext={'End'} downtext={'o'} />
        </div>
        <div className="keyrow">
          <Key uptext={'Capslock'} downtext={''} w={130} />
          <Key uptext={'A'} downtext={''} />
          <Key uptext={'S'} downtext={''} />
          <Key uptext={'D'} downtext={''} />
          <Key uptext={'F'} downtext={''} />
          <Key uptext={'G'} downtext={''} />
          <Key uptext={'H'} downtext={''} />
          <Key uptext={'J'} downtext={''} />
          <Key uptext={'K'} downtext={''} />
          <Key uptext={'L'} downtext={''} />
          <Key uptext={'; :'} downtext={'Pau Br'} />
          <Key uptext={`' "`} downtext={'INS'} />
          <Key uptext={'Enter'} downtext={''} w={180} />
          <Key uptext={'PgUp'} downtext={''} />
        </div>
        <div className="keyrow">
          <Key  uptext={'Shift'} downtext={''} w={180} />
          <Key  uptext={'Z'} downtext={''}  />
          <Key  uptext={'X'} downtext={''}  />
          <Key  uptext={'C'} downtext={''}  />
          <Key  uptext={'V'} downtext={''}  />
          <Key  uptext={'B'} downtext={''}  />
          <Key  uptext={'N'} downtext={''}  />
          <Key  uptext={'M'} downtext={''}  />
          <Key  uptext={`, <`} downtext={''}  />
          <Key  uptext={'. >'} downtext={'Home'} /> 
          <Key  uptext={'/ ?'} downtext={'End'}  />
          <Key  uptext={'Shift'} downtext={''} w={130}  />
          <Key  uptext={'Up'} downtext={''}  />
          <Key  uptext={'PgDn'} downtext={''}  />
        </div>
        <div className="keyrow">
          <Key uptext={'Ctrl'} downtext={''} />
          <Key uptext={'Win'} downtext={''} />
          <Key uptext={'Alt'} downtext={''} />
          <Key uptext={'---'} downtext={''} w={610} />
          <Key uptext={'Alt'} downtext={''} />
          <Key uptext={'Fn'} downtext={''} />
          <Key uptext={'Ctrl'} downtext={''} />
          <Key uptext={'Left'} downtext={''} />
          <Key uptext={'Down'} downtext={''} />
          <Key uptext={'Right'} downtext={''} />
        </div>
      </div>
    </div>
  );
}

export default App;
