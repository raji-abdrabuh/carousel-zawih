import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import {products_card} from './product-card'

function App() {

const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  }
}
  return (
 <Carousel 
swipeable={false}
  draggable={false}
  infinite={true}
  responsive={responsive}
  partialVisible={false}
  centerMode={false}
  itemClass="px-1"
  containerClass="w-full"
  ssr={true} // means to render carousel on server-side.
 
  autoPlay={true}
  // autoPlaySpeed={1000}
  // keyBoardControl={true}
  // customTransition="all .5"
  // transitionDuration={500}
  // containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  // itemClass="carousel-item-padding-40-px"
>
  {products_card.map((product) => (
 <div
  key={product.id}
  className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col"
>
  {/* الصورة */}
  <div className="w-full aspect-[1/1] flex items-center justify-center bg-white">
    <img
      src={product.image}
      alt={product.name}
      className="max-h-full object-contain"
    />
  </div>

  {/* المحتوى */}
  <div className="p-3 flex flex-col flex-1">
    {/* الاسم */}
    <h2 className="text-sm font-semibold line-clamp-2 mb-1 min-h-[40px]">
      {product.name}
    </h2>

    {/* السعر */}
    <p className="text-xs text-gray-600 mb-3 min-h-[20px]">
      السعر: <span className="font-bold">{product.price} ر.س</span>
    </p>

    {/* زر ثابت بالأسفل */}
    <a href={product.urlitem}>
      
    <button
      className="mt-auto w-full bg-blue-600 text-white text-xs py-2 rounded-md hover:bg-blue-700 transition"
    >
      تعرف أكثر
    </button>
    </a>
  </div>
</div>


        ))}
</Carousel>
  );
}

export default App;
