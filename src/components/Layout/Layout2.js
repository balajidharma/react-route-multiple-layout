import React from "react"
import Header2 from "./Header/Header2"
import Footer2 from "./Footer/Footer2"
class Layout2 extends React.Component {
  render(){
    return (
      <>
        <Header2 />
        <main>{this.props.children}</main>
        <Footer2 />
      </>
    )
  }
}
export default Layout2;