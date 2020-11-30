import { Elm } from './Main.elm'
import Fluence from "fluence";

// Elm.Main.init({
//     node: document.querySelector('main')
// })

console.log("yo! " + document.getElementById('root'));

window.onload = () => {
    Elm.Main.init({
        node: document.getElementById('root'),
    })

    (async () => {
        let multiaddr = "/dns4/stage.fluence.dev/tcp/19001/wss/p2p/12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9"
        let client = await Fluence.connect(multiaddr);
        console.log(`First PeerId: ${client.selfPeerId}`);
    })()
};
