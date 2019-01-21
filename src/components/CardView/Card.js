import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

const styles = {
    card: {
        minWidth: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


function CardNote(props) {
    const { classes } = props
    
        return (
            <div>
                <Card>
                    <Typography variant="h5" component="h2"  className={classes.title} color="textSecondary" gutterBottom>
                        Title
                    </Typography>
                    <CardContent>
                        <Typography component="p">
                            well meaning and kindly.
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    
}

CardNote.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withRouter((withStyles(styles)(CardNote)))