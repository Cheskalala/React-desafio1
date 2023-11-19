
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/Mycard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
    <>
    <div className='body '>    
    <Header/>
    <section className='container '>
    <div className='row g-4'>
    <MyCard className='col'
    image="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
    title="Hotu matu ha"
    colorButton="success"
    textButton="Adoptar"
    /> 
    <MyCard className='col'
    image="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
    title="Iriti"
    colorButton="warning"
    textButton="Adoptar"
    />
        <MyCard className='col'
    image="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg"
    title="Taiha"
    colorButton="primary"
    textButton="Adoptar"
    />
        <MyCard className='col'
    image="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"
    title="Petero"
    colorButton="danger"
    textButton="Adoptar"
    />
    </div>
    </section>
        <Footer></Footer>
    </div>
    </>
    );
    }
    
export default App;
