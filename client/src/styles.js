import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    titleBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgb(148 48 255)',
      },
      image: {
        marginRight: '7px',
        paddingBottom: '8px',
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection: "column-reverse",
        }
      }
      
}));