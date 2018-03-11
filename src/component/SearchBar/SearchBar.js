import React ,{Component} from 'react'
import png_search from '../../assert/image/search.png'
import './SearchBar.css'


export default class SearchBar extends Component{


    render(){
        return(
            <div className='searchBar' style={{backgroundColor:this.props.color}}>
                <img src={png_search} alt='' />

                <input type='text' onFocus={this.props.onFocus} placeholder={this.props.searchBarPlaceholder}
                       style={{backgroundColor:this.props.color}}/>

            </div>
        )

    }
}

