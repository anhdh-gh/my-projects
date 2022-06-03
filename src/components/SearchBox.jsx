import '../assets/css/SearchBox.css'

const SearchBox = (props) => {

    const { value, placeholder, onChange, className, inputColor } = props

    return <div className={`SearchBox-container ${className}`}>
        <input style={{backgroundColor: inputColor}} value={value} onChange={onChange} className="search-field-input" type="text" id="SearchBox" required/>
        <label className="search-field-label" htmlFor="SearchBox">{placeholder}</label>
    </div>
}

export default SearchBox