
import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
const buttonStyle = {
    width: 120,
    height: 45,
    color: "#f1f5f8",
    borderColor: "#f1f5f8",
    marginRight: 20,
    borderRadius: 10,



}
const buttonStyle2 = {
    width: 120,
    height: 45,
    backgroundColor: "#840dc3",
    borderColor: "#840dc3",
    color: "white",
    marginRight: 200,
    borderRadius: 10


}
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button basic  style={buttonStyle} onClick={signIn}>Giriş Yap</Button>
            <Button  style={buttonStyle2}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}