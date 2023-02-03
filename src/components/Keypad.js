// Code Keypad Component Here
function enterPw(){
    return (
        console.log('Entering password...')
    )
}

function Keypad (){
    return (
        <input onChange={enterPw} type="password" />
    )
}

export default Keypad;