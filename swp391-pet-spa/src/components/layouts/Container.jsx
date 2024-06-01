const Container = () => {
  return(
    <div>
    <div className="product-container">
      <div className="product" style={{backgroundColor: '#f06464'}}>
        <div className="product-left">
          <img alt="Combo for summer" className="block" src="Combospa.jpg" />
        </div>
        <div className="product-right">
          <div className="product-title" style={{fontSize: 48, marginTop: 60, color: 'white'}}>
            Service for summer
          </div>
          <div className="product-description" style={{color: 'white', fontSize: 20}}>
            Effective solution for pets on hot days. Try the new pet's spa service experience for your pets. Avoid the summer heat and protect your pets
          </div>
          <div className="product-button product-button-white" style={{marginTop: 10}}>
            Learn more
          </div>
        </div>
      </div>
    </div>
    <div className="product-container">
      <div className="product" style={{backgroundColor: '#faaa5a'}}>
        <div className="product-right">
          <div className="product-title" style={{fontSize: 48, marginTop: 60, color: '#1e3932'}}>
            Feedback and service reviews
          </div>
          <div className="product-description" style={{fontSize: 20, maxWidth: 500, textAlign: 'center'}}>
            Let us know your feedback on our pet spa services. Your feedback will help us a lot.
            Thank you
          </div>
          <div className="product-button product-button-black" style={{marginTop: 10}}>
            Feedback
          </div>
        </div>
        <div className="product-left">
          <img alt="Gift card with an illustrated backpack and “BACK AT IT!” message." className="block" src="petgrooming.jpg" />
        </div>
      </div>
    </div>
    <div className="product-container">
      <div className="product" style={{backgroundColor: '#9bf5b4'}}>
        <div className="product-left">
          <img alt="Become a member" className="block" src="Services.png" width={760}/>
        </div>
        <div className="product-right">
          <div className="product-title" style={{fontSize: 48, marginTop: 60, color: '#1e3932'}}>
            Register for a membership card
          </div>
          <div className="product-description" style={{color: '#1e3932', fontSize: 20}}>
            Accumulating points can get discounts on the following services and will receive a small gift from the pet store when registering as a member.
          </div>
          <div className="product-button product-button-black" style={{marginTop: 10}}>
            Become a member
          </div>
        </div>
      </div>
    </div>
  </div>
        );
    }
 export default Container;