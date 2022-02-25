import Footer from 'rjs-sticky-footer/Footer'


const Foots = () => {

  const FooterBody = <div><h1>Greetings</h1></div>
  const Foot =  (<Footer
      background={'Blue'}
      opacity={0.5}
      footerBody={<FooterBody/>}
      isSticky={false}
    />)

    return (<Foot/>)
  };

  export default Foots;
