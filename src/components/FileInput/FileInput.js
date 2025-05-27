import './FileInput.css'

function FileInput() {
    return (
        <div className='form__file'>
            <label for='file-input' className='form__file__placeholder'>Select a file...</label>
            <i class="upload-icon bi bi-file-earmark-arrow-up"></i>
            <input name='file-input' type="file" required />
        </div>
    )
}

export default FileInput