import React, {Component} from 'react';
import Item from './singleItem';
import PropType from 'prop-types';
class ListOfItem extends Component {
		static PropType = {
  		items: PropType.array.isRequired,
		};
  		
  	 render() {
		return (
 			<div>
      		<p className="items">Items</p>
      		<ol className="item">{this.props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
    		</div>
		   );
	
	}
}







export default ListOfItem;