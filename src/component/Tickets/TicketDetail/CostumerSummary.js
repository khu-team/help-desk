import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const CostumerSummary = (props) => {
    return (
        <React.Fragment>
            <List classes={{ root: 'costumerSummary' }}>
                {
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Person />
                            </Avatar>
                        </ListItemAvatar>
                        مشتری : {props.costumerDetails.fullName}

                    </ListItem>
                }

                {
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ShoppingCart />
                            </Avatar>
                        </ListItemAvatar>
                        محصول : {props.productDetails.name}

                    </ListItem>
                }



            </List>
        </React.Fragment>
    );
}

export default CostumerSummary;