import React from 'react';
// import { useNavigate } from 'react-router-dom'

const Home=()=>{
    // const Navigate=useNavigate();

    return(
        <div className="container">
           
           <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71mDlg4f6QL._SX3000_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Smart Phone</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61MTFnfw6YL._SX3000_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aURrton0L._SX3000_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        {/* <button className="btn btn-warning text-light" onClick={()=>Navigate('/user_profile')}>Profile</button> */}
    <div className=" d-flex flex-rows">
    <div class="card border border-dark" style={{width: '18rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body " style={{textAlign:'center'}}>
    <span class="card-text font-weight-bold">Decor Lightings</span><br/>
    <span className='text-success'>UPto 80% Off</span><br/>
    <span className='text-secondary'>Big Discounts</span>

  </div>
</div>
<div class="card border-dark" style={{width: '18rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body " style={{textAlign:'center'}}>
    <span class="card-text font-weight-bold">Diyas, Candles & Holders</span><br/>
    <span className='text-success'>Upto 80% Off</span><br/>
    <span className='text-secondary'>Big Discounts</span>
  </div>
</div>
<div class="card border-dark" style={{width: '18rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Paintings</span><br/>
    <span className='text-success'>Upto 80% Off</span><br/>
    <span className='text-secondary'>Big Discounts</span>
  </div>
</div>

<div class="card border-dark" style={{width: '18rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Artificial Plants</span><br/>
    <span className='text-success'>Upto 80% Off</span><br/>
    <span className='text-secondary'>Big Discounts</span>
  </div>
</div>
</div>



<div className=" d-flex flex-rows">
    <div class="card border mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body " style={{textAlign:'center'}}>
    <span class="card-text font-weight-bold">Monitors</span><br/>
    <span className='text-success'>From <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>9999</span><br/>
    <span className='text-secondary'>SAMSUNG</span>
  </div>
</div>
<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70" class="card-img-top" alt="..." />
  <div class="card-body " style={{textAlign:'center'}}>
    <span class="card-text font-weight-bold">City & MTB Cycle</span><br/>
    <span className='text-success'>Upto 70% Off</span><br/>
    <span className='text-secondary'>Montra, Firefox & More</span>
  </div>
</div>
<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Gym Essentails</span><br/>
    <span className='text-success'>From <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>139</span><br/>
    <span className='text-secondary'>Shop Now</span>
  </div>
</div>

<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuyxrrphkbr.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Cricket</span><br/>
    <span className='text-success'>Upto 45% Off</span><br/>
    <span className='text-secondary'>Ceat, Nivia, Li-Ning....</span>
  </div>
</div>
<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/breast-pump/4/m/x/manual-first-feed-manual-breast-pump-manual-mbp-02-niscomed-original-imagg9hgf7h3ytz8.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Nursing</span><br/>
    <span className='text-success'>Upto 50% Off</span><br/>
    <span className='text-secondary'>Pump</span>
  </div>
</div>
<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/l1jmc280/mattress-protector/w/g/e/shmp723612gy-sleepyhead-original-imagd37rhpjqngzk.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Mattress Protectors</span><br/>
    <span className='text-success'>From <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>149</span><br/>
    <span className='text-secondary'>Best Offer</span>
  </div>
</div>
<div class="card ml-2 mt-1" style={{width: '10rem'}}>
  <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/artificial-flower/l/w/h/1-artificial-lily-flowers-plant-with-pot-indoor-artificial-original-imaggxwwahgzg4hg.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body" style={{textAlign:'center'}}>
  <span class="card-text font-weight-bold">Artificial Flowers</span><br/>
    <span className='text-success'>Upto 80% Off</span><br/>
    <span className='text-secondary'>Big Discounts</span>
  </div>
</div>

</div>



<footer>
  <div className='text-primary'>
    <p>Copy Right &copy; Flipkart</p>
</div>
</footer>


   





    </div>
    )
}
export default Home;