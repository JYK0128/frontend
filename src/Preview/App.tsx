import React from 'react';
import Frame from 'react-frame-component'
import './App.css';

interface Device {btnClz: string, pvClz:string, status: boolean}
class Desktop implements Device{
    btnClz="fa fa-desktop"; status=true; pvClz="preview-desktop";
    private constructor() {}
    private static instance:Desktop;
    static getInstance():Desktop {return (Desktop.instance)?Desktop.instance: Desktop.instance = new Desktop()}}
class Tablet implements Device{
    btnClz="fa fa-tablet"; status=false; pvClz="preview-tablet";
    private constructor() {}
    private static instance:Tablet;
    static getInstance():Tablet {return (Tablet.instance)?Tablet.instance: Tablet.instance = new Tablet()}}
class Mobile implements Device{
    btnClz="fa fa-mobile"; status=false; pvClz="preview-mobile";
    private constructor() {}
    private static instance:Mobile;
    static getInstance():Mobile {return (Mobile.instance)?Mobile.instance: Mobile.instance = new Mobile()}}

type Props = {website:JSX.Element};
type State = {device:Record<string, Device>};
class App extends React.Component<Props, State>{
    constructor(props:Props) {
        super(props);
        this.state = {
            device: {"desktop":Desktop.getInstance(), "tablet":Tablet.getInstance(), "mobile": Mobile.getInstance()}
        }
    }

    handleClick(device:Device){
        const devices = this.state.device;
        for(let key in devices){
            let item = devices[key];
            item.status = (device === devices[key]);
            this.setState({"device":{"desktop":Desktop.getInstance(), "tablet":Tablet.getInstance(), "mobile": Mobile.getInstance()}});
        }
    }

    handlePreview(){
        const devices = this.state.device;
        for(let key in devices) {
            let item=devices[key];
            if(item.status){return item.pvClz;}
        }
        return undefined;
    }

    render(){
        const deviceBtn = (device:Device) =>
            <li className={["preview-test", (device.status)? "preview-devices-active":" "].join(' ')}>
                <a href={"#!"} onClick={()=>this.handleClick(device)}><i className={device.btnClz}/></a>
            </li>

        return (
            <div>
                <div className="preview-devices">
                    <ul>
                        {deviceBtn(this.state.device['desktop'])}
                        {deviceBtn(this.state.device['tablet'])}
                        {deviceBtn(this.state.device['mobile'])}
                    </ul>
                </div>
                <div id="preview">
                    <Frame id="preview-frame" className={this.handlePreview()}>
                        {this.props.website}
                    </Frame>
                </div>
            </div>
        );
    }
}

export default App;