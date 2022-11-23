import React, {Component} from 'react';
import items from '../../assets/data/mock_stores.json';
import Table from "./Table";



class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Table items={items}/>
                </div>
            </div>
        );
    }
}

export default Main;