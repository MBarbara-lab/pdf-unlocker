import './Home.css'
import FileInput from '../../components/FileInput/FileInput';

function Home() {
    return (
        <div className='home-page'>
            <h1 className='home-page__title'><span className='red-text'>PDF</span> UNLOCKER</h1>

            <div className='form'>
                <h2 className='form__title'>Upload File</h2>

                <FileInput />
                <input className='form__password' type="password" placeholder='Write the PDF password...' required />

                <button type='submit' className='form__btn'>UNLOCK</button>
            </div>

            <div className='credits'>
                <p>DevSuzarte</p>
                <p>MelissaVitorio</p>
            </div>
        </div>
    );
}

export default Home;